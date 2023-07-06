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
            let data = cart.map((item) =>
                `<div class="item">
                <p class="price">SAR&nbsp;<span id="price">${item.price * item.quantity}</span></p>
                <p class="item-name">${item.quantity}&nbsp;x&nbsp;${item.productID.title}</p>
                <p class="item-description">
                ${item.productCategory == "ChocolateBox" ?
                    `<p>${item.variant}&nbsp pieces</p>`
                    : item.productCategory == "Tray" ?
                        `<p>${item.variant}&nbsp kg</p>`
                        : item.productCategory == "Package" ?
                            `<p>${item.variant}&nbsp kg</p>`
                            : item.productCategory == "Cake"
                                `<p>${item.variant}&nbsp cm</p>`
                }
                </p>
            </div>`
            ).join("")
            document.getElementById("orderproducts").innerHTML = data;

            let data2 = `Total<span class="price">SAR&nbsp;${response.data.data.totalCartPrice}</span>`
            document.getElementById("total").innerHTML = data2;


            let data4 =
                `
            <div id="accordion">
            
            ${response.data.data.user.addresses.map((address) => {
                    getID(address._id);
                    return `<div class="card mb-2">
                <div class="card-header" id="headingOne">
                    <label class="labelstyle" data-toggle="collapse" data-target="#${address._id}" aria-expanded="true" aria-controls="collapseOne">
                    <input id="aliasinput" type="radio" value="${address.alias}" class=" radioclass" name="optradio" required>${address.alias}
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
                }).join("")}
                
                </div>`
            document.getElementById("details").innerHTML = data4;

            let inputID = document.getElementById("cartIDs")
            inputID.value = response.data.data._id


        }).catch(() => {

        })


}
getorderitems();

var addressId

function getID(addressID) {
    addressId = addressID
}
const form = document.getElementById("form8");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    collectFormData();
    console.log("kjhgfds");
});


function collectFormData() {

        console.log(document.getElementById("cartIDs").value);
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
                    alias: document.getElementById("aliasinput").value,
                    details: document.getElementById(`addressdetails_${addressId}`).innerHTML,
                    phone: document.getElementById(`addressphone_${addressId}`).innerHTML,
                }
            },
        };
        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);

            })

            .catch(function (error) {
                console.error(error.response.data);

            });

}