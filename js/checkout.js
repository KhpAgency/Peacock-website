function getorderitems() {
    let baseUrl = "https://peacock-api-ixpn.onrender.com/api/v1/cart";
    const options = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        url: baseUrl,
    };
    axios.request(options)
        .then(function (response) {

            const cart = response.data.data.cartItems
            console.log(response.data.data);
            cart.map((item) => {
                if (item.productID == null) {
                    document.getElementById("proceedbutton").setAttribute("disabled", "");
                    document.getElementById("proceedbutton").setAttribute("data-toggle", "tooltip");
                    document.getElementById("proceedbutton").setAttribute("title", "invalid data");

                }
            })
            let data = cart.map((item) =>
                item.productID !== null ?
                    `<div class="item">
                <p class="price">SAR&nbsp;<span id="price">${item.price * item.quantity}</span></p>
                <p class="item-name">${item.quantity}&nbsp;x&nbsp;${item.productID.title}</p>
                <p class="item-description">
                ${item.productCategory == "ChocolateBox" ?
                        `<p>${item.variant}&nbsp pieces</p>`
                        : item.productCategory == "Tray" ?
                            `<p>${item.variant}&nbsp kg</p>`
                            : item.productCategory == "Packages" ?
                                `<p>${item.variant}&nbsp kg</p>`
                                : item.productCategory == "Cake" &&
                                `<p>${item.variant}&nbsp cm</p>`
                    }
                </p>
            </div>`:
                    `<div class="item">
                <p class="price">SAR&nbsp;<span id="price">${item.price * item.quantity}</span></p>
                <p class="item-name">Product has been removed</p>
            </div>`
            ).join("")
            document.getElementById("orderproducts").innerHTML = data;

            // if (item.productID == null) {
            //     document.getElementById("proceedbutton").setAttribute("disabled", "");
            //     document.getElementById("proceedbutton").setAttribute("data-toggle", "tooltip");
            //     document.getElementById("proceedbutton").setAttribute("title", "invalid data");

            // }


            console.log(response.data.data.user.addresses);

            let data2 = `Total<span class="price">SAR&nbsp;${response.data.data.totalCartPrice}</span>`
            document.getElementById("total").innerHTML = data2;
            if (response.data.data.user.addresses <= 0) {
                let data4 =
                    `
            <div id="accordion">
                <p>No addresses found! Add new address from <a href="myprofile.html#addresses" style="color:blue !important">here</a>.</p>
                </div>`
                document.getElementById("details").innerHTML = data4;
            }
            else {
                let data4 =
                    `
            <div id="accordion">
            <p>Add new address from <a href="myprofile.html#addresses" style="color:blue !important">here</a>.</p>
            ${response.data.data.user.addresses.map((address) =>
                        `<div class="card mb-2" onclick="getID('${address._id}')">
                <div class="card-header" id="headingOne" >
                    <label class="labelstyle" data-toggle="collapse" data-target="#${address._id}" aria-expanded="true" aria-controls="collapseOne">
                    <input id="alias_${address._id}" type="radio" value="${address.alias}" class=" radioclass" name="optradio" required>${address.alias}
                    </label>
                </div>
            
                <div id="${address._id}" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                  <div class="card-body">
                  <span class="font-weight-bold">Address:</span>
                  <span id="addressdetails_${address._id}">${address.details}</span>
                  </div>
                  <div class="card-body pt-0">
                  <span class="font-weight-bold">Phone:</span>
                  <span id="addressphone_${address._id}">${address.phone}</span>
                  </div>
                </div>
              </div>`
                    ).join("")}
                
                </div>`
                document.getElementById("details").innerHTML = data4;
            }



            let inputID = document.getElementById("cartIDs")
            inputID.value = response.data.data._id


        }).catch(() => {

        })


}
getorderitems();


function getID(addressID) {
    console.log(addressID);
    localStorage.setItem("addressID", addressID)
}
const form = document.getElementById("form8");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    collectFormData();
});


function collectFormData() {

    let id = document.getElementById("cartIDs").value;


    let baseUrl = `https://peacock-api-ixpn.onrender.com/api/v1/orders/${id}`;

    const formData = new FormData(form);
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/JSON",
            Authorization: `Bearer ${localStorage.getItem("token")}`

        },
        url: baseUrl,
        data: {
            shippingAddress: {
                alias: document.getElementById(`alias_${localStorage.getItem("addressID")}`).value,
                details: document.getElementById(`addressdetails_${localStorage.getItem("addressID")}`).innerHTML,
                phone: document.getElementById(`addressphone_${localStorage.getItem("addressID")}`).innerHTML,
            }
        },
    };
    axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            if (response.data.status = "success") {
                localStorage.setItem("successorderid", response.data.order._id);
                window.location.href = 'orderconfirmation.html';
            }
        })

        .catch(function (error) {
            console.error(error.response.data);

        });

}

// if (document.getElementById("online").checked) {
//     document.getElementById("proceedbutton").style.display = "none";
// }

document.addEventListener("DOMContentLoaded", function () {
    // Get references to the radio button and the button you want to hide
    const onlineRadioButton = document.getElementById("online");
    const cashRadioButton = document.getElementById("cash");
    const proceedButton = document.getElementById("proceedbutton");

    // Add an event listener to the radio button to listen for changes
    onlineRadioButton.addEventListener("click", function () {
        // Check if the radio button is checked
        if (onlineRadioButton.checked) {
            // If the radio button is checked, hide the button
            proceedButton.style.display = "none";
            proceedButton.setAttribute("disabled", "");

    let id = document.getElementById("cartIDs").value;

            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/JSON",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
        
                },
                url: `https://peacock-api-ixpn.onrender.com/api/v1/orders/payonline/${id}`,
                data: {
                    shippingAddress: {
                        name:"mohamed khaled",
                        details: document.getElementById(`addressdetails_${localStorage.getItem("addressID")}`).innerHTML,
                        phone: document.getElementById(`addressphone_${localStorage.getItem("addressID")}`).innerHTML,
                        city:"Alexandria",
                        state: "ALX"
                    }
                },
            };
        
            axios.request(options).then((res)=>{
                console.log(res);

              let iframe=  document.querySelector("iframe")
              iframe.setAttribute("src",`${res.data.paymentURL}` )
            }).catch((err)=>{
                console.log(err);
            })





        } else {
            // If the radio button is not checked, show the button
            proceedButton.style.display = "block"; // Or "inline-block" depending on your layout
        }
    });

    // Add an event listener to the radio button to listen for changes
    cashRadioButton.addEventListener("click", function () {
        // Check if the radio button is checked
        if (cashRadioButton.checked) {
            // If the radio button is checked, hide the button
            proceedButton.style.display = "block";
            proceedButton.removeAttribute("disabled", "");

        } else {
            // If the radio button is not checked, show the button
            proceedButton.style.display = "none"; // Or "inline-block" depending on your layout
        }
    });
});