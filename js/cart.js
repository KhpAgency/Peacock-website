
function getitems() {
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
            if (cart.length <= 0) {
                console.log("000000");
                let element = `<P class="empty">Your cart is empty!</P>`
            document.getElementById("products-card").innerHTML = element;
            document.getElementById("cartcard").style.display = "block";
            document.getElementById("cartcard").style.width = "855px";
            document.getElementById("summarycol").style.display = "none";

            } 
            else {
                console.log("11111");
                console.log(response.data.data);
                let data = cart.map((item) => {
                    try {
                        return `
                            <div class="row mb-5" id="product${item._id}">
                                <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                    <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                        <img src="${item.productID.images[0]}" class="w-100 imgh" alt="" />
                                        <a href="#!">
                                            <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
                                        </a>
                                    </div>
                                </div>
                    
                                <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                    <input id="productid" value="${item._id}" type="text" hidden>
                                    <p><strong>${item.productID.title}</strong></p>
                                    <p>${item.productID.description}</p>
                                    ${item.productCategory == "ChocolateBox" ?
                                        `<p>${item.variant}&nbsp pieces</p>`
                                        : item.productCategory == "Tray" ?
                                            `<p>${item.variant}&nbsp kg</p>`
                                            : item.productCategory == "Packages" ?
                                                `<p>${item.variant}&nbsp kg</p>`
                                                : item.productCategory == "Cake" &&
                                                    `<p>${item.variant}&nbsp cm</p>`
                                    }
                                    <button type="button" class="btn btn-primary2 btn-sm me-1 mb-2"
                                        onclick="remove('${item._id}')" data-mdb-toggle="tooltip">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                    
                                <div class="col-lg-4 col-md-6 mb-4 mb-lg-0" id="changequantity">
                                    <div class="d-flex mb-4 quantity">
                                        <button class="btn btn-primary px-3 me-2" onclick="decreaseQuantity(${item.price},'${item._id}')">
                                            <i class="fas fa-minus"></i>
                                        </button>
                    
                                        <div class="form-outline">
                                            <input id="form1${item._id}" min="0" name="quantity" value=${item.quantity} type="number" disabled
                                                class="form-control active" />
                                            <label class="form-label" for="form1">Quantity</label>
                                        </div>
                    
                                        <button class="btn btn-primary px-3 ms-2" onclick="increaseQuantity(${item.price},'${item._id}')">
                                            <i class="fas fa-plus"></i>
                                        </button>
                                    </div>
                                    <p class="text-start text-md-center ml63">
                                        SAR&nbsp
                                        <span id="price${item._id}" class="price-price">${item.price * item.quantity}</span>
                                    </p>
                                </div>
                            </div>`;
                    } catch (error) {
                        return `
                            <div class="row mb-5" id="product${item._id}" style="margin-left: 25%;">
                                <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                    <input id="productid" value="${item._id}" type="text" hidden>
                                    <p><strong>Product has been removed</strong></p>
                                    <button type="button" class="btn btn-primary2 btn-sm me-1 mb-2"
                                        onclick="remove('${item._id}')" data-mdb-toggle="tooltip">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                    
                                <div class="col-lg-5 col-md-6 mb-4 mb-lg-0" id="changequantity" style="margin-left: 14%;">
                                    <div class="d-flex mb-4 quantity">
                                        <button class="btn btn-primary px-3 me-2" onclick="decreaseQuantity(${item.price},'${item._id}')">
                                            <i class="fas fa-minus"></i>
                                        </button>
                    
                                        <div class="form-outline">
                                            <input id="form1${item._id}" min="0" name="quantity" value=${item.quantity} type="number" disabled
                                                class="form-control active" />
                                            <label class="form-label" for="form1">Quantity</label>
                                        </div>
                    
                                        <button class="btn btn-primary px-3 ms-2" onclick="increaseQuantity(${item.price},'${item._id}')">
                                            <i class="fas fa-plus"></i>
                                        </button>
                                    </div>
                                    <p class="text-start text-md-center ml63">
                                        SAR&nbsp
                                        <span id="price${item._id}" class="price-price">${item.price * item.quantity}</span>
                                    </p>
                                </div>
                            </div>`;
                    }
                }).join("");
                
                document.getElementById("products-card").innerHTML = data;
                
    
                // -----------------summary--------------------------
                const total = response.data.data.totalCartPrice;
                let data2 = `<ul class="list-group list-group-flush">
                <li
                    class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products
                    <p>SAR&nbsp <span id="product-price">${total}</span></p>
                </li>
                <li
                    class="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span class="d-block" id="num">Not Included</span>
                </li>
                <li
                    class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                        <strong>Total amount</strong>
                        <strong>
                            <p class="mb-0">(including VAT)</p>
                        </strong>
                    </div>
                    <strong >SAR&nbsp <span id="final-price">${total}</span></strong>
                </li>
            </ul>
            <a href="checkout.html">
                <button type="button" class="btn btn-primary btn-lg btn-block">
                    Go to checkout
                </button>
            </a>`
                document.getElementById("summary").innerHTML = data2;
                document.getElementById("summarycol").style.display = "block";
                document.getElementById("cartcard").style.display = "block";
    
            }



        })
        .catch((err) => {
            console.log(err);
            let element = `<P class="empty">Your cart is empty!</P>`
            document.getElementById("products-card").innerHTML = element;
            document.getElementById("cartcard").style.display = "block";
            document.getElementById("cartcard").style.width = "855px";
        }
        )



}
getitems();



function increaseQuantity(price, id) {
    let Qinput = document.getElementById("form1" + id)
    let neww = parseInt(Qinput.value)
    Qinput.value = neww + 1
    updatePrice(Qinput.value, price, id)

    let productURL = `https://peacock-api-ixpn.onrender.com/api/v1/cart/${id}`;
    const options = {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        url: productURL,
        data: { quantity: Qinput.value }
    };
    axios.request(options).then((res) => {
        console.log(res.data.data);
        updateTotalPrice(res)
    }).catch((err) => {
        console.log(err);
    })


}

function decreaseQuantity(price, id) {
    let Qinput = document.getElementById("form1" + id)
    let neww = parseInt(Qinput.value)
    Qinput.value = neww - 1

    updatePrice(Qinput.value, price, id)

    let productURL = `https://peacock-api-ixpn.onrender.com/api/v1/cart/${id}`;
    const options = {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        url: productURL,
        data: { quantity: Qinput.value }
    };
    axios.request(options).then((res) => {
        console.log(res.data.data);
        updateTotalPrice(res)

    }).catch((err) => {
        console.log(err);
    })
}

function updatePrice(neww, price, id) {
    var totalPrice = price * neww;
    document.getElementById("price" + id).innerHTML = totalPrice
    console.log(totalPrice);
}

function updateTotalPrice(res) {
    document.getElementById("product-price").innerHTML = res.data.data.totalCartPrice
    document.getElementById("final-price").innerHTML = res.data.data.totalCartPrice

}

function remove(id) {
    let productURL = `https://peacock-api-ixpn.onrender.com/api/v1/cart/${id}`;
    const options = {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        url: productURL,
    };
    axios.request(options).then((res) => {
        const element = document.getElementById("product"+id);
        element.remove();
        console.log(res.data.data);
        updateTotalPrice(res)
        if (res.data.data.cartItems.length <= 0) {
            getitems()
        }

    }).catch((err) => {
        console.log(err);
    })

}

window.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth <= 768) {
        var dropdownMenu = document.getElementById("servicesMenu");
        dropdownMenu.classList.remove("dropdown-menu");

        var dropdownMenu2 = document.getElementById("productsMenu");
        dropdownMenu2.classList.remove("dropdown-menu");
    }
});

// Check if quantity and total price exist in localStorage and update the input field and price
// var quantityInput = document.getElementById("form1");
// var totalPriceElement = document.getElementById("price");
// var productprice = document.getElementById("product-price");
// var finalprice = document.getElementById("final-price");


// if (localStorage.getItem("quantity")) {
//     quantityInput.value = localStorage.getItem("quantity");
// } else {
//     quantityInput.value = 1;
// }

// if (localStorage.getItem("totalPrice")) {
//     totalPriceElement.innerHTML = "<strong>SAR" + localStorage.getItem("totalPrice") + "</strong>";
//     productprice.innerHTML = "<strong>SAR" + localStorage.getItem("totalPrice") + "</strong>";
//     finalprice.innerHTML = "<strong>SAR" + localStorage.getItem("productprice") + "</strong>";

// }

// Add event listener to update quantity value in localStorage
// quantityInput.addEventListener("input", function () {
//     localStorage.setItem("quantity", quantityInput.value);
//     updatePrice();
// });

// function increaseQuantity() {
//     var currentQuantity = parseInt(quantityInput.value);
//     quantityInput.value = currentQuantity + 1;
//     localStorage.setItem("quantity", quantityInput.value);
//     updatePrice();
// }

// function decreaseQuantity() {
//     var currentQuantity = parseInt(quantityInput.value);
//     if (currentQuantity > 0) {
//         quantityInput.value = currentQuantity - 1;
//         localStorage.setItem("quantity", quantityInput.value);
//         updatePrice();
//     }
// }

// function updatePrice() {
//     var currentQuantity = parseInt(quantityInput.value);

//     var price = 17.99;
//     var totalPrice = price * currentQuantity;
//     totalPriceElement.innerHTML = "<strong>SAR" + totalPrice.toFixed(2) + "</strong>";
//     localStorage.setItem("totalPrice", totalPrice.toFixed(2));
//     localStorage.setItem("productprice", localStorage.getItem("totalPrice"));
//     localStorage.setItem("finalprice", localStorage.getItem("productprice"));


//     productprice.innerHTML = "<strong>SAR" + localStorage.getItem("totalPrice") + "</strong>";
//     finalprice.innerHTML = "<strong>SAR" + localStorage.getItem("productprice") + "</strong>";

// }

// function remove() {
//     const element = document.getElementById("product");
//     element.remove();
//     localStorage.setItem("totalPrice", 0);
//     localStorage.setItem("productprice", 0);
//     localStorage.setItem("finalprice", 0);

//     productprice.innerHTML = "<strong>SAR" + localStorage.getItem("totalPrice") + "</strong>";
//     finalprice.innerHTML = "<strong>SAR" + localStorage.getItem("productprice") + "</strong>";

// }
// updatePrice();

