let baseUrl = "https://peacock-api-ixpn.onrender.com/api/v1/cart";

function setVariant(e) {
    localStorage.setItem('variant', e.target.value)
}


async function getItems() {
    let productDetails = localStorage.getItem('id');
    let productCat = localStorage.getItem('productCategory');
    let { data } = await axios.get(`https://peacock-api-ixpn.onrender.com/api/v1/${productCat}/${productDetails}`);
    let dataRow = `
        <div class="row">
            <div class="col-md-6">
                <div class="container mob-bg gallery">
                <div class="fotorama" data-minwidth="600" data-fit="cover" data-width="100%" data-height="70%" data-allowfullscreen="true" data-nav="thumbs" data-thumbwidth="155px">
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
                    <form method="POST" id="form1">

                    <div class="sizes mt-5">
                        ${productCat == "ChocolateBox" ? `<h6 class="text-uppercase">Number of pieces</h6> 
                        <select >
                        <option disabled selected>Choose...</option>
                        ${data.data.pieces.map((item) => `
                            <option  value="${item}" >${item} pieces</option>
    
                        `).join("")}
                        </select>`: productCat == "Tray" ? `<h6 class="text-uppercase">Tray Weight</h6> 
                        <select >
                        <option disabled selected>Choose...</option>
                        ${data.data.weight.map((item) => `
                            <option  value="${item}" >${item} KG</option>
    
                        `).join("")}
                        </select>` : productCat == "Packages" ? `<h6 class="text-uppercase">Weight of each tray</h6> 
                        <select >
                        <option disabled selected>Choose...</option>
                        ${data.data.weight.map((item) => `
                            <option  value="${item}" >${item} KG</option>
    
                        `).join("")}
                        </select>` : productCat == "Cake" && `<h6 class="text-uppercase">Cake Size</h6> 
                        <select >
                        <option disabled selected>Choose...</option>
                        ${data.data.size.map((item) => `
                            <option  value="${item}" >${item} CM</option>
    
                        `).join("")}
                        </select>`}



                    </div>
                    <div class="cart mt-4 align-items-center">
                        <button type="submit" id="add" class="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button>
                    </div>

                    </form>

                </div>
            </div>
        </div>`;
    document.getElementById('card1').innerHTML = dataRow;
    initFotorama(); // Initialize fotorama after setting the HTML content

    let form = document.getElementById("form1");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        collectFormData(form);
    });

    let selectElement = document.querySelector("#form1 select");
    selectElement.addEventListener("change", setVariant);
}
getItems();


function collectFormData(form) {

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        url: baseUrl,
        data: { productCategory: localStorage.getItem("productCategory"), productID: localStorage.getItem("id"), variant: localStorage.getItem("variant").toString(), price: localStorage.getItem("price") },
    };

    axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            let number = response.data.numOfCartItems;
            let data = `<p class="num">${number}</p>`;
            document.getElementById("numberofitems").innerHTML = data;
            Toastify({
                text: "Product added to cart!",
                className: "info",
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                    borderRadius: "5px",
                },

            }).showToast();
            // clearForm();
            // setTimeout(redirct(), 100000);

        })

        .catch(function (error) {
            console.error(error);
            Toastify({
                text: error.response.data.message,
                className: "info",
                style: {
                    background: "red",
                    borderRadius: "5px",
                },
            }).showToast();
        });

}


function initFotorama() {
    $('.fotorama').fotorama(); // Initialize fotorama component
}



