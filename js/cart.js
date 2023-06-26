let baseUrl = "https://peacock-api-ixpn.onrender.com/api/v1/cart";


function getitems() {

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
            cart.map((item) => axios.get(`https://peacock-api-ixpn.onrender.com/api/v1/${item.productCategory.toLowerCase()}/${item.productID}`).then((res) => {
                document.getElementById('products-card').innerHTML += `<div class="row mb-5" id="product">
            <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                <div class="bg-image hover-overlay hover-zoom ripple rounded"
                    data-mdb-ripple-color="light">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                        class="w-100" alt="Blue Jeans Jacket" />
                    <a href="#!">
                        <div class="mask"
                            style="background-color: rgba(251, 251, 251, 0.2)"></div>
                    </a>
                </div>
            </div>

            <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                <p><strong>${res.data.data.title}</strong></p>
                <p>Color: blue</p>
                <p>Size: M</p>
                <button type="button" class="btn btn-primary2 btn-sm me-1 mb-2"
                    onclick="remove()" data-mdb-toggle="tooltip">
                    <i class="fas fa-trash"></i>
                </button>
            </div>

            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div class="d-flex mb-4 quantity">
                    <button class="btn btn-primary px-3 me-2" onclick="decreaseQuantity()">
                        <i class="fas fa-minus"></i>
                    </button>

                    <div class="form-outline">
                        <input id="form1" min="0" name="quantity" value="1" type="number"
                            class="form-control" />
                        <label class="form-label" for="form1">Quantity</label>
                    </div>

                    <button class="btn btn-primary px-3 ms-2" onclick="increaseQuantity()">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <p id="price" class="text-start text-md-center ml63">
                    <strong>$17.99</strong>
                </p>
            </div>
        </div>`
            })
            ).join("")














        }).catch(function (error) {
            console.error(error);
        });



}
getitems();

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

