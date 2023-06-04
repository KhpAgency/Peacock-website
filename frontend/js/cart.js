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
    totalPriceElement.innerHTML = "<strong>$" + localStorage.getItem("totalPrice") + "</strong>";
    productprice.innerHTML = "<strong>$" + localStorage.getItem("totalPrice") + "</strong>";
    finalprice.innerHTML = "<strong>$" + localStorage.getItem("productprice")+ "</strong>";

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

function updatePrice() {
    var currentQuantity = parseInt(quantityInput.value);

    var price = 17.99; // The base price
    var totalPrice = price * currentQuantity;
    totalPriceElement.innerHTML = "<strong>$" + totalPrice.toFixed(2) + "</strong>";
    localStorage.setItem("totalPrice", totalPrice.toFixed(2));
    localStorage.setItem("productprice", localStorage.getItem("totalPrice"));
    localStorage.setItem("finalprice", localStorage.getItem("productprice"));
    
    
    productprice.innerHTML = "<strong>$" + localStorage.getItem("totalPrice") + "</strong>";
    finalprice.innerHTML = "<strong>$" + localStorage.getItem("productprice") + "</strong>";


}

function remove() {
    const element = document.getElementById("product");
    element.remove();
    localStorage.setItem("totalPrice", 0);
    localStorage.setItem("productprice", 0);
    localStorage.setItem("finalprice", 0);
    
    productprice.innerHTML = "<strong>$" + localStorage.getItem("totalPrice") + "</strong>";
    finalprice.innerHTML = "<strong>$" + localStorage.getItem("productprice") + "</strong>";

}
updatePrice();


// add to cart

// const newDiv = document.createElement("newproduct");
// newDiv.classList.add("div-shadow");
// newDiv.innerHTML = sessionStorage.getItem("page1content");
// var cWrapper = document.getElementById("products-card");
// cWrapper.appendChild(newDiv);

