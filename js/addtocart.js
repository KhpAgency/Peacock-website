const addToCart = (id) => {
    localStorage.setItem("cart_id", id);

    // const numElement = document.getElementById('num');

}

async function addboxes() {
    let productDetails = localStorage.getItem('cart_id');
    console.log(productDetails);
    let { data } = await axios.get(`https://peacock-api-ixpn.onrender.com/api/v1/chocolateBox/${productDetails}`);

    console.log(data.data);
    let dataRow = `
    <div class="row mb-5" id="product">
    <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
        <!-- Image -->
        <div class="bg-image hover-overlay hover-zoom ripple rounded"
            data-mdb-ripple-color="light">
            <img class="imgheight" src="${data.data.images[0]}"
                class="w-100" alt="Blue Jeans Jacket" />
            <a>
                <div class="mask"
                    style="background-color: rgba(251, 251, 251, 0.2)"></div>
            </a>
        </div>
        <!-- Image -->
    </div>

    <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
        <!-- Data -->
        <p class="titlef"><strong>${data.data.title}</strong></p>
        <p>${data.data.description}</p>
        <p>Number of pieces: ${data.data.pieces} Pieces</p>
        <button type="button" class="btn btn-primary2 btn-sm me-1 mb-2"
            onclick="remove()" data-mdb-toggle="tooltip">
            <i class="fas fa-trash"></i>
        </button>
        <!-- <button type="button" class="btn btn-danger btn-sm mb-2"
            data-mdb-toggle="tooltip" title="Move to the wish list">
            <i class="fas fa-heart"></i>
        </button> -->
        <!-- Data -->
    </div>

    <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
        <!-- Quantity -->
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
        <!-- Quantity -->

        <!-- Price -->
        ${data.data.discountedPrice ? `
        <p id="price" class="text-start text-md-center ml63">
            <strong>SAR&nbsp;${data.data.discountedPrice}</strong>
        </p>`:
            `<p id="price" class="text-start text-md-center ml63">
        <strong>SAR&nbsp;${data.data.price}</strong>
    </p>`}
        <!-- Price -->
    </div>
    </div>`;
    document.getElementById('products-card').innerHTML = dataRow;



    let dataRow2 = `<ul class="list-group list-group-flush">
    ${data.data.discountedPrice ? `
    <li
        class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
        Products
        <span id="product-price">${data.data.discountedPrice}</span>
    </li>
    <li
        class="list-group-item d-flex justify-content-between align-items-center px-0">
        Shipping
        <span class="d-block" id="num">Not Included</span>
        <!-- <span class="alert alert-warning d-block">sjgdwufgwufcg</span> -->
    </li>
    <li
        class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
        <div>
            <strong>Total amount</strong>
            <strong>
                <p class="mb-0">(including VAT)</p>
            </strong>
        </div>
        <span><strong id="final-price">${data.data.discountedPrice}</strong></span>
    </li>`: `<li
    class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
    Products
    <span id="product-price">${data.data.price}</span>
</li>
<li
    class="list-group-item d-flex justify-content-between align-items-center px-0">
    Shipping
    <span class="d-block" id="num">Not Included</span>
    <!-- <span class="alert alert-warning d-block">sjgdwufgwufcg</span> -->
</li>
<li
    class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
    <div>
        <strong>Total amount</strong>
        <strong>
            <p class="mb-0">(including VAT)</p>
        </strong>
    </div>
    <span><strong id="final-price">${data.data.price}</strong></span>
</li>`}
<a href="checkout.html">
<button type="button" class="btn btn-primary btn-lg btn-block">
    Go to checkout
</button>
</a>
</ul>`;
    document.getElementById('summary').innerHTML = dataRow2;


}
addboxes();

// -------------------------------------------------------------

// Check if quantity and total price exist in localStorage and update the input field and price
var quantityInput = document.getElementById("form1");
var totalPriceElement = document.getElementById("price");
var productprice = document.getElementById("product-price");
var finalprice = document.getElementById("final-price");



if (localStorage.getItem("quantity")) {
    quantityInput.value = localStorage.getItem("quantity");
} else {
    quantityInput.value = 1;
}

if (localStorage.getItem("totalPrice")) {
    totalPriceElement.innerHTML = "<strong>SAR" + localStorage.getItem("totalPrice") + "</strong>";
    productprice.innerHTML = "<strong>SAR" + localStorage.getItem("totalPrice") + "</strong>";
    finalprice.innerHTML = "<strong>SAR" + localStorage.getItem("productprice")+ "</strong>";

}

// Add event listener to update quantity value in localStorage
quantityInput.addEventListener("input", function () {
    localStorage.setItem("quantity", quantityInput.value);
    updatePrice();
});

function increaseQuantity() {
    var currentQuantity = parseInt(quantityInput.value);
    quantityInput.value = currentQuantity + 1;
    localStorage.setItem("quantity", quantityInput.value);
    updatePrice();
}

function decreaseQuantity() {
    var currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 0) {
        quantityInput.value = currentQuantity - 1;
        localStorage.setItem("quantity", quantityInput.value);
        updatePrice();
    }
}

async function updatePrice() {

    var currentQuantity = parseInt(quantityInput.value);

    var price = 17.99; 
    var totalPrice = price * currentQuantity;
    totalPriceElement.innerHTML = "<strong>SAR" + totalPrice.toFixed(2) + "</strong>";
    localStorage.setItem("totalPrice", totalPrice.toFixed(2));
    localStorage.setItem("productprice", localStorage.getItem("totalPrice"));
    localStorage.setItem("finalprice", localStorage.getItem("productprice"));
    
    
    productprice.innerHTML = "<strong>SAR" + localStorage.getItem("totalPrice") + "</strong>";
    finalprice.innerHTML = "<strong>SAR" + localStorage.getItem("productprice") + "</strong>";

}

function remove() {
    const element = document.getElementById("product");
    element.remove();
    localStorage.setItem("totalPrice", 0);
    localStorage.setItem("productprice", 0);
    localStorage.setItem("finalprice", 0);
    
    productprice.innerHTML = "<strong>SAR" + localStorage.getItem("totalPrice") + "</strong>";
    finalprice.innerHTML = "<strong>SAR" + localStorage.getItem("productprice") + "</strong>";

}
updatePrice();

