let userData = {};

function getuserdata() {
    let baseUrl = "https://peacock-api-ixpn.onrender.com/api/v1/users/getLoggedUser";

    const options = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        url: baseUrl,
    };

    axios.request(options)
        .then((response) => {
            console.log(response.data.data);
            userData = response.data.data;

            let data1 =
                `<h4 class="text-center">${response.data.data.name}</h4>`;
            document.getElementById("main_name").innerHTML = data1;

            let data2 =
                `<div class="row mb-3">
            <div class="col-md-12">
                <div class="form-group">
                    <label>Name</label>
                    <input id="nameinput" type="text" name="name" class="form-control" value="${response.data.data.name}">
                </div>
            </div>
            <div class="col-md-12">
                <div class="form-group">
                    <label>Email</label>
                    <input id="emailinput" type="text" name="email" class="form-control"
                        value="${response.data.data.email}">
                </div>
            </div>
            <div class="col-md-12">
                <div class="form-group">
                    <label>Phone number</label>
                    <input id="phoneinput" type="text" name="phone" class="form-control"
                        value="${response.data.data.phone}">
                </div>
            </div>
        </div>
        <div>
            <button type="submit" class="btn btn-primary mr-2">Update</button>
        </div>`;
            document.getElementById("form1").innerHTML = data2;


        }
        )
        .catch((err) => {
            console.log(err);
        }
        )

}
getuserdata();


const form = document.getElementById("form1");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    collectFormData();
});


function collectFormData() {
    let url2 = "https://peacock-api-ixpn.onrender.com/api/v1/users/updateLoggedUserData";
    const formData = new FormData(form);

    // Get the initial form values fetched from the API
    const initialFormValues = {
        name: userData.name,
        email: userData.email,
        phone: userData.phone
    };

    // Compare the current form values with the initial values
    const updatedFields = {};
    for (let [key, value] of formData.entries()) {
        if (value !== initialFormValues[key]) {
            updatedFields[key] = value;
        }
    }

    console.log(initialFormValues["email"]);
    const options = {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url: url2,
        data: new URLSearchParams(updatedFields), // Use only the updated fields
    };

    axios
        .request(options)
        .then(function (response) {
            console.log(response.data); // Log the entire response object for inspection
        })
        .catch(function (error) {
            console.error(error); // Log the error object for troubleshooting
        });
}



const form2 = document.getElementById("form2");
form2.addEventListener("submit", function (event) {
    event.preventDefault();
    newpassword();
});

function newpassword() {
    let url2 = "https://peacock-api-ixpn.onrender.com/api/v1/users/updateLoggedUserPassword";
    const formData = new FormData(form2);

    const options = {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url: url2,
        data: new URLSearchParams(formData), // Use only the updated fields
    };

    axios
        .request(options)
        .then(function (response) {
            console.log(response.data); // Log the entire response object for inspection
        })
        .catch(function (error) {
            console.error(error); // Log the error object for troubleshooting
        });

}


function getaddresses() {
    let baseUrl3 = "https://peacock-api-ixpn.onrender.com/api/v1/addresses";

    const options = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        url: baseUrl3,
    };

    axios.request(options)
        .then((response) => {
            console.log(response.data.data);
            // userData = response.data.data;

            let data3 =
                `
                <div class="form-group">
                ${response.data.data.map((address, index) => `
                <div class="card mb-4"> 
                <div class="card-header p-2">
                <button type="button" class="close" aria-label="Close" onclick="deleteaddress('${address._id}')">
                <span class="text-danger font-weight-bold" style="font-size: larger;" aria-hidden="true">&times;</span>
                </button>
      

                ${address.alias}
                </div>
                <div class="card-body">
                  <p class="card-text"><span class="font-weight-bold">Details: </span>${address.details}</p>
                  <p class="card-text"><span class="font-weight-bold">Phone: </span>${address.phone}</p>
                </div>
              </div>`).join("")}
                    
                </div>`;

            document.getElementById("form3").innerHTML = data3;

        }
        )
        .catch((err) => {
            console.log(err);
        }
        )

}
getaddresses();

function deleteaddress(id) {
    let baseUrl4 = `https://peacock-api-ixpn.onrender.com/api/v1/addresses/${id}`;

    const options = {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        url: baseUrl4,
    };

    axios.request(options)
        .then((response) => {

            console.log(response);
            getaddresses();
        }
        )
        .catch((err) => {
            console.log(err);
        }
        )
}

const form4 = document.getElementById("form4");
form4.addEventListener("submit", function (event) {
    event.preventDefault();
    addnewaddress();
});

function addnewaddress() {
    let baseUrl = "https://peacock-api-ixpn.onrender.com/api/v1/addresses";
    const formData = new FormData(form4);
    const options = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url: baseUrl,
        data: new URLSearchParams(formData),
    };
    axios
        .request(options)
        .then(function (response) {
            console.log(response.data); // Log the entire response object for inspection
        })
        .catch(function (error) {
            console.error(error); // Log the error object for troubleshooting
        });
}

const setID =(id) => {
    localStorage.setItem("orderID", id);
}

function getorders() {
    let baseUrl3 = "https://peacock-api-ixpn.onrender.com/api/v1/orders";

    const options = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        url: baseUrl3,
    };

    axios.request(options)
        .then((response) => {
            console.log(response.data.data);
            // userData = response.data.data;

            let data3 =
                `
                <div class="form-group">
                    ${response.data.data.map((order) =>`
                    <div class="card mb-4">
                        <div class="card-body">
                        <span class="card-text2">Order# ${order.orderNumber}</span> 
                        <a onclick="setID ('${order._id}')" href="orderdetails.html" class="card-text3">SEE DETAILS</a> 
                            ${order.cartItems.map((item)=>`
                            <div class="item mt-3">
                                <div class="card2">
                                    <div class="card-body1">
                                        <h5 class="card-title1">
                                            ${item.quantity}&nbsp;x&nbsp;${item.productID.title}
                                        </h5>
                                        <span class="card-text1">${item.productCategory ==
                                            "ChocolateBox" ?
                                            `
                                        <span class="card-text1">${item.variant}&nbsp pieces</span>`
                                        : item.productCategory == "Tray" ?
                                        `<span class="card-text1">${item.variant}&nbsp kg</span>`
                                        : item.productCategory == "Packages" ?
                                        `<span class="card-text1">${item.variant}&nbsp kg</span>`
                                        : item.productCategory == "Cake" &&
                                        `<span class="card-text1">${item.variant}&nbsp cm</span>`
                                        }</span>
                                    </div>
                                </div>
                            </div>
                            `).join("")}
                            <span class="card-text4">Total: ${order.totalorderPrice}</span>
                        </div>
                    </div>
                </div>`).join("")}`;

            document.getElementById("form5").innerHTML = data3;

        }
        )
        .catch((err) => {
            console.log(err);
        }
        )

}
getorders();
