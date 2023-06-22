async function getboxes() {
    let productDetails = localStorage.getItem('id');
    // console.log(productDetails);
    let { data } = await axios.get(`https://peacock-api-ixpn.onrender.com/api/v1/chocolateBox/${productDetails}`);

    console.log(data.data);
    let dataRow = `
        <div class="row">
            <div class="col-md-6">
                <div class="container mob-bg gallery">
                    <div class="fotorama" data-allowfullscreen="true" data-nav="thumbs" data-thumbwidth="155px">
                        ${data.data.images.map((img) => `<img src="${img}">`).join("")}
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="p-4">
                    ${data.data.discountedPrice ? `
                        <div class="mt-4 mb-3"> 
                            <h5 class="text-uppercase" id="title">${data.data.title}</h5>
                            <div class="price d-flex flex-row align-items-center"> 
                                <span class="act-price" id="price">SAR&nbsp;${data.data.discountedPrice}</span>
                                <div class="ms-1"> 
                                    <small class="dis-price">SAR&nbsp;${data.data.price}</small>
                                </div>
                            </div>
                        </div>` :
            `
                        <div class="mt-4 mb-3"> 
                            <h5 class="text-uppercase" id="title">${data.data.title}</h5>
                            <div class="price d-flex flex-row align-items-center"> 
                                <span class="act-price" id="price">SAR&nbsp;${data.data.price}</span>
                            </div>
                        </div>`
        }
                    <p class="about">${data.data.description}</p>
                    <div class="sizes mt-5">
                        <h6 class="text-uppercase">Number of pieces</h6> 
                        ${data.data.pieces.map((piece) =>
            `<label class="radio"> 
                            <input type="radio" name="size" value="${piece}" id="radio" checked>
                            <span>${piece}</span>
                            </label>`).join("")}
                        
                    </div>
                    <div class="cart mt-4 align-items-center">
                        <button id="add" onclick="addToCart()" class="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>`;

    document.getElementById('card1').innerHTML = dataRow;
    initFotorama(); // Initialize fotorama after setting the HTML content
}
getboxes();

async function gettrays() {
    let productDetails = localStorage.getItem('id');
    // console.log(productDetails);
    let { data } = await axios.get(`https://peacock-api-ixpn.onrender.com/api/v1/trays/${productDetails}`);

    console.log(data.data);
    let dataRow = `
        <div class="row">
            <div class="col-md-6">
                <div class="container mob-bg gallery">
                    <div class="fotorama" data-allowfullscreen="true" data-nav="thumbs" data-thumbwidth="155px">
                        ${data.data.images.map((img) => `<img src="${img}">`).join("")}
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="p-4">
                    ${data.data.discountedPrice ? `
                        <div class="mt-4 mb-3"> 
                            <h5 class="text-uppercase" id="title">${data.data.title}</h5>
                            <div class="price d-flex flex-row align-items-center"> 
                                <span class="act-price" id="price">SAR&nbsp;${data.data.discountedPrice}</span>
                                <div class="ms-1"> 
                                    <small class="dis-price">SAR&nbsp;${data.data.price}</small>
                                </div>
                            </div>
                        </div>` :
            `
                        <div class="mt-4 mb-3"> 
                            <h5 class="text-uppercase" id="title">${data.data.title}</h5>
                            <div class="price d-flex flex-row align-items-center"> 
                                <span class="act-price" id="price">SAR&nbsp;${data.data.price}</span>
                            </div>
                        </div>`
        }
                    <p class="about">${data.data.description}</p>
                    <div class="sizes mt-5">
                        <h6 class="text-uppercase">Weight</h6> 
                        ${data.data.weight.map((weight) =>
            `<label class="radio"> 
                            <input type="radio" name="size" value="${weight}" id="radio" checked>
                            <span>${weight}&nbsp;kg</span>
                            </label>`).join("")}
                        
                    </div>
                    <div class="cart mt-4 align-items-center">
                        <button id="add" onclick="addToCart()" class="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>`;

    document.getElementById('card1').innerHTML = dataRow;
    initFotorama(); // Initialize fotorama after setting the HTML content
}
gettrays();

async function getpackages() {
    let productDetails = localStorage.getItem('id');
    // console.log(productDetails);
    let { data } = await axios.get(`https://peacock-api-ixpn.onrender.com/api/v1/packages/${productDetails}`);

    console.log(data.data);
    let dataRow = `
        <div class="row">
            <div class="col-md-6">
                <div class="container mob-bg gallery">
                    <div class="fotorama" data-allowfullscreen="true" data-nav="thumbs" data-thumbwidth="155px">
                        ${data.data.images.map((img) => `<img src="${img}">`).join("")}
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="p-4">
                    ${data.data.discountedPrice ? `
                        <div class="mt-4 mb-3"> 
                            <h5 class="text-uppercase" id="title">${data.data.title}</h5>
                            <div class="price d-flex flex-row align-items-center"> 
                                <span class="act-price" id="price">SAR&nbsp;${data.data.discountedPrice}</span>
                                <div class="ms-1"> 
                                    <small class="dis-price">SAR&nbsp;${data.data.price}</small>
                                </div>
                            </div>
                        </div>` :
            `
                        <div class="mt-4 mb-3"> 
                            <h5 class="text-uppercase" id="title">${data.data.title}</h5>
                            <div class="price d-flex flex-row align-items-center"> 
                                <span class="act-price" id="price">SAR&nbsp;${data.data.price}</span>
                            </div>
                        </div>`
        }
                    <p class="about">${data.data.description}</p>
                    <div class="sizes mt-5">
                        <h6 class="text-uppercase">Weight Of Each Tray in The Package</h6> 
                        ${data.data.weight.map((weight) =>
            `<label class="radio"> 
                            <input type="radio" name="size" value="${weight}" id="radio" checked>
                            <span>${weight}&nbsp;kg</span>
                            </label>`).join("")}
                        
                    </div>
                    <div class="cart mt-4 align-items-center">
                        <button id="add" onclick="addToCart()" class="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>`;

    document.getElementById('card1').innerHTML = dataRow;
    initFotorama(); // Initialize fotorama after setting the HTML content
}
getpackages();

async function getcakes() {
    let productDetails = localStorage.getItem('id');
    // console.log(productDetails);
    let { data } = await axios.get(`https://peacock-api-ixpn.onrender.com/api/v1/cakes/${productDetails}`);

    console.log(data.data);
    let dataRow = `
        <div class="row">
            <div class="col-md-6">
                <div class="container mob-bg gallery">
                    <div class="fotorama" data-allowfullscreen="true" data-nav="thumbs" data-thumbwidth="155px">
                        ${data.data.images.map((img) => `<img src="${img}">`).join("")}
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="p-4">
                    ${data.data.discountedPrice ? `
                        <div class="mt-4 mb-3"> 
                            <h5 class="text-uppercase" id="title">${data.data.title}</h5>
                            <div class="price d-flex flex-row align-items-center"> 
                                <span class="act-price" id="price">SAR&nbsp;${data.data.discountedPrice}</span>
                                <div class="ms-1"> 
                                    <small class="dis-price">SAR&nbsp;${data.data.price}</small>
                                </div>
                            </div>
                        </div>` :
            `
                        <div class="mt-4 mb-3"> 
                            <h5 class="text-uppercase" id="title">${data.data.title}</h5>
                            <div class="price d-flex flex-row align-items-center"> 
                                <span class="act-price" id="price">SAR&nbsp;${data.data.price}</span>
                            </div>
                        </div>`
        }
                    <p class="about">${data.data.description}</p>
                    <div class="sizes mt-5">
                        <h6 class="text-uppercase">Size Of The Cake</h6> 
                        ${data.data.size.map((size) =>
            `<label class="radio"> 
                            <input type="radio" name="size" value="${size}" id="radio" checked>
                            <span>${size}&nbsp;cm</span>
                            </label>`).join("")}
                        
                    </div>
                    <div class="cart mt-4 align-items-center">
                        <button id="add" onclick="addToCart()" class="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>`;

    document.getElementById('card1').innerHTML = dataRow;
    initFotorama(); // Initialize fotorama after setting the HTML content
}
getcakes();

function initFotorama() {
    $('.fotorama').fotorama(); // Initialize fotorama component
}

