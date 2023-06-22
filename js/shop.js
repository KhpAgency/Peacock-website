async function getData() {
    let { data } = await axios.get("https://peacock-api-ixpn.onrender.com/api/v1/chocolateBox")
    
    console.log(data.data);
    let dataRow = data.data.map((product)=>  `
    <div class="col-md-3 col-sm-6 mb-4">
    <div class="product-grid">
    ${product.discountedPrice ? `<div class="product-image">
    <a href="#" class="image">
        <img class="pic-1" src="${product.images[0]}">
        <img class="pic-2" src="${product.images[1]}">
    </a>
    <span class="product-sale-label">sale!</span>
    <div class="product-rating">
        <a class="add-to-cart" onclick="addToCart('${product._id}')" href="#"> ADD TO CART </a>
    </div>
    </div>` : `<div class="product-image">
    <a href="#" class="image">
        <img class="pic-1" src="${product.images[0]}">
        <img class="pic-2" src="${product.images[1]}">
    </a>

    <div class="product-rating">
        <a class="add-to-cart" onclick="addToCart('${product._id}')" href="#"> ADD TO CART </a>
    </div>
    </div>`}
        
    ${product.discountedPrice ? `<div class="product-content">
    <input class="field" type="text" name="id" value="${product._id}" hidden/>

    <h3 class="title"><a onclick="setID('${product._id}')" href="product_detail.html">${product.title}</a></h3>
    <div class="price"><span>SAR&nbsp;${product.price}</span>SAR&nbsp;${product.discountedPrice}</div>
    </div>` : `<div class="product-content">
    <input class="field" type="text" name="id" value="${product._id}" hidden />
    <h3 class="title"><a onclick="setID('${product._id}')" href="product_detail.html">${product.title}</a></h3>
    <div class="price">SAR&nbsp;${product.price}</div>
    </div>`}
            
        </div>
    </div>
    `).join("")

    document.getElementById('row1').innerHTML = dataRow;

}
getData();

const setID =(id) => {
    localStorage.setItem("id", id)
}


async function getData2() {
    let { data } = await axios.get("https://peacock-api-ixpn.onrender.com/api/v1/trays")

    console.log(data.data);
    let dataRow = data.data.map((product)=>    `
    <div class="col-md-3 col-sm-6 mb-4">
    <div class="product-grid">
    ${product.discountedPrice ? `<div class="product-image">
    <a href="#" class="image">
        <img class="pic-1" src="${product.images[0]}">
        <img class="pic-2" src="${product.images[1]}">
    </a>
    <span class="product-sale-label">sale!</span>
    <div class="product-rating">
        <a class="add-to-cart" onclick="addToCart('${product._id}')" href="#"> ADD TO CART </a>
    </div>
    </div>` : `<div class="product-image">
    <a href="#" class="image">
        <img class="pic-1" src="${product.images[0]}">
        <img class="pic-2" src="${product.images[1]}">
    </a>

    <div class="product-rating">
        <a class="add-to-cart" onclick="addToCart('${product._id}')" href="#"> ADD TO CART </a>
    </div>
    </div>`}
        
    ${product.discountedPrice ? `<div class="product-content">
    <h3 class="title"><a onclick="setID('${product._id}')" href="product_detail.html">${product.title}</a></h3>
    <div class="price"><span>SAR&nbsp;${product.price}</span>SAR&nbsp;${product.discountedPrice}</div>
    </div>` : `<div class="product-content">
    <h3 class="title"><a onclick="setID('${product._id}')" href="product_detail.html">${product.title}</a></h3>
    <div class="price">SAR&nbsp;${product.price}</div>
    </div>`}
            
        </div>
    </div>
    `).join("")

    document.getElementById('row2').innerHTML = dataRow;
}
getData2();


async function getData3() {
    let { data } = await axios.get("https://peacock-api-ixpn.onrender.com/api/v1/packages")

    console.log(data.data);
    let dataRow = data.data.map((product)=>    `
    <div class="col-md-3 col-sm-6 mb-4">
    <div class="product-grid">
    ${product.discountedPrice ? `<div class="product-image">
    <a href="#" class="image">
        <img class="pic-1" src="${product.images[0]}">
        <img class="pic-2" src="${product.images[1]}">
    </a>
    <span class="product-sale-label">sale!</span>
    <div class="product-rating">
        <a class="add-to-cart" onclick="addToCart('${product._id}')" href="#"> ADD TO CART </a>
    </div>
    </div>` : `<div class="product-image">
    <a href="#" class="image">
        <img class="pic-1" src="${product.images[0]}">
        <img class="pic-2" src="${product.images[1]}">
    </a>

    <div class="product-rating">
        <a class="add-to-cart" onclick="addToCart('${product._id}')" href="#"> ADD TO CART </a>
    </div>
    </div>`}
        
    ${product.discountedPrice ? `<div class="product-content">
    <h3 class="title"><a onclick="setID('${product._id}')" href="product_detail.html">${product.title}</a></h3>
    <div class="price"><span>SAR&nbsp;${product.price}</span>SAR&nbsp;${product.discountedPrice}</div>
    </div>` : `<div class="product-content">
    <h3 class="title"><a onclick="setID('${product._id}')" href="product_detail.html">${product.title}</a></h3>
    <div class="price">SAR&nbsp;${product.price}</div>
    </div>`}
            
        </div>
    </div>
    `).join("")

    document.getElementById('row3').innerHTML = dataRow;
}
getData3();


async function getData4() {
    let { data } = await axios.get("https://peacock-api-ixpn.onrender.com/api/v1/cakes")

    console.log(data.data);
    let dataRow = data.data.map((product)=>    `
    <div class="col-md-3 col-sm-6 mb-4">
    <div class="product-grid">
    ${product.discountedPrice ? `<div class="product-image">
    <a href="#" class="image">
        <img class="pic-1" src="${product.images[0]}">
        <img class="pic-2" src="${product.images[1]}">
    </a>
    <span class="product-sale-label">sale!</span>
    <div class="product-rating">
        <a class="add-to-cart" onclick="addToCart('${product._id}')" href="#"> ADD TO CART </a>
    </div>
    </div>` : `<div class="product-image">
    <a href="#" class="image">
        <img class="pic-1" src="${product.images[0]}">
        <img class="pic-2" src="${product.images[1]}">
    </a>

    <div class="product-rating">
        <a class="add-to-cart" onclick="addToCart('${product._id}')" href="#"> ADD TO CART </a>
    </div>
    </div>`}
        
    ${product.discountedPrice ? `<div class="product-content">
    <h3 class="title"><a onclick="setID('${product._id}')" href="product_detail.html">${product.title}</a></h3>
    <div class="price"><span>SAR&nbsp;${product.price}</span>SAR&nbsp;${product.discountedPrice}</div>
    </div>` : `<div class="product-content">
    <h3 class="title"><a onclick="setID('${product._id}')" href="product_detail.html">${product.title}</a></h3>
    <div class="price">SAR&nbsp;${product.price}</div>
    </div>`}
            
        </div>
    </div>
    `).join("")

    document.getElementById('row4').innerHTML = dataRow;
}
getData4();


