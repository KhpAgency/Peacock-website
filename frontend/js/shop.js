async function getData() {
let allData =await axios.get("https://jsonplaceholder.typicode.com/photos")
    
console.log(allData.data[0]);
let dataRow = `<div class="col-md-3 col-sm-6 mb-4">
                                <div class="product-grid">
                                    <div class="product-image">
                                        <a href="#" class="image">
                                            <img class="pic-1" src="${allData.data[0].url}">
                                            <img class="pic-2" src="img/savory1/savory-02.webp">
                                        </a>
                                        <span class="product-sale-label">sale!</span>
                                        <div class="product-rating">
                                            <a class="add-to-cart" href="#"> ADD TO CART </a>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <h3 class="title"><a href="product_detail.html">${allData.data[0].title}</a></h3>
                                        <div class="price"><span>$28.00</span>$20.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 mb-4">
                                <div class="product-grid">
                                    <div class="product-image">
                                        <a href="#" class="image">
                                            <img class="pic-1" src="${allData.data[1].url}">
                                            <img class="pic-2" src="img/savory1/savory-02.webp">
                                        </a>
                                        <span class="product-sale-label">sale!</span>
                                        <div class="product-rating">
                                            <a class="add-to-cart" href="#"> ADD TO CART </a>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <h3 class="title"><a href="product_detail.html">${allData.data[1].title}</a></h3>
                                        <div class="price"><span>$28.00</span>$20.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 mb-4">
                                <div class="product-grid">
                                    <div class="product-image">
                                        <a href="#" class="image">
                                            <img class="pic-1" src="${allData.data[2].url}">
                                            <img class="pic-2" src="img/savory1/savory-02.webp">
                                        </a>
                                        <span class="product-sale-label">sale!</span>
                                        <div class="product-rating">
                                            <a class="add-to-cart" href="#"> ADD TO CART </a>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <h3 class="title"><a href="product_detail.html">${allData.data[2].title}</a></h3>
                                        <div class="price"><span>$28.00</span>$20.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 mb-4">
                                <div class="product-grid">
                                    <div class="product-image">
                                        <a href="#" class="image">
                                            <img class="pic-1" src="${allData.data[3].url}">
                                            <img class="pic-2" src="img/savory1/savory-02.webp">
                                        </a>
                                        <span class="product-sale-label">sale!</span>
                                        <div class="product-rating">
                                            <a class="add-to-cart" href="#"> ADD TO CART </a>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <h3 class="title"><a href="product_detail.html">${allData.data[3].title}</a></h3>
                                        <div class="price"><span>$28.00</span>$20.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 mb-4">
                                <div class="product-grid">
                                    <div class="product-image">
                                        <a href="#" class="image">
                                            <img class="pic-1" src="${allData.data[4].url}">
                                            <img class="pic-2" src="img/savory1/savory-02.webp">
                                        </a>
                                        <span class="product-sale-label">sale!</span>
                                        <div class="product-rating">
                                            <a class="add-to-cart" href="#"> ADD TO CART </a>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <h3 class="title"><a href="product_detail.html">${allData.data[4].title}</a></h3>
                                        <div class="price"><span>$28.00</span>$20.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 mb-4">
                                <div class="product-grid">
                                    <div class="product-image">
                                        <a href="#" class="image">
                                            <img class="pic-1" src="${allData.data[5].url}">
                                            <img class="pic-2" src="img/savory1/savory-02.webp">
                                        </a>
                                        <span class="product-sale-label">sale!</span>
                                        <div class="product-rating">
                                            <a class="add-to-cart" href="#"> ADD TO CART </a>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <h3 class="title"><a href="product_detail.html">${allData.data[5].title}</a></h3>
                                        <div class="price"><span>$28.00</span>$20.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 mb-4">
                                <div class="product-grid">
                                    <div class="product-image">
                                        <a href="#" class="image">
                                            <img class="pic-1" src="${allData.data[6].url}">
                                            <img class="pic-2" src="img/savory1/savory-02.webp">
                                        </a>
                                        <span class="product-sale-label">sale!</span>
                                        <div class="product-rating">
                                            <a class="add-to-cart" href="#"> ADD TO CART </a>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <h3 class="title"><a href="product_detail.html">${allData.data[6].title}</a></h3>
                                        <div class="price"><span>$28.00</span>$20.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 mb-4">
                                <div class="product-grid">
                                    <div class="product-image">
                                        <a href="#" class="image">
                                            <img class="pic-1" src="${allData.data[7].url}">
                                            <img class="pic-2" src="img/savory1/savory-02.webp">
                                        </a>
                                        <span class="product-sale-label">sale!</span>
                                        <div class="product-rating">
                                            <a class="add-to-cart" href="#"> ADD TO CART </a>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <h3 class="title"><a href="product_detail.html">${allData.data[7].title}</a></h3>
                                        <div class="price"><span>$28.00</span>$20.00</div>
                                    </div>
                                </div>
                            </div>`
                            document.getElementById('row1').innerHTML = dataRow
}
getData()


