let baseUrl = "https://peacock-api-ixpn.onrender.com/api/v1/cart";

async function getboxes() {
    let productDetails = localStorage.getItem('id');
    let { data } = await axios.get(`https://peacock-api-ixpn.onrender.com/api/v1/chocolateBox/${productDetails}`);
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
                    <form method="POST" id="form1">

                    <div class="sizes mt-5">
                        <h6 class="text-uppercase">Number of pieces</h6> 
                        <select>
                        <option disabled selected="selected">Choose...</option>
                        ${data.data.pieces.map((piece) =>`
                            <option value="${piece}" >${piece} pieces</option>

                        `).join("")}
                        </select>
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
}
getboxes();




function collectFormData(form) {
    const formData = new FormData(form);
    console.log(formData);
  
    const variant = formDataToObject(formData); // Convert form data to JSON object
  
    if (isEmptyObject(variant)) {
      console.error("Form data is empty. Please ensure form fields have values.");
      return;
    }
  
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      url: baseUrl,
      data: {
        productCategory: localStorage.getItem("productCategory"),
        productID: localStorage.getItem("id"),
        variant: JSON.stringify(variant), // Serialize variant object to a string
        price: localStorage.getItem("price")
      },
    };
    console.log(options.data);
  
  
  

    axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            // Toastify({
            //     text: "Product added to cart!",
            //     className: "info",
            //     style: {
            //         background: "linear-gradient(to right, #00b09b, #96c93d)",
            //         borderRadius: "5px",
            //     },

            // }).showToast();
            clearForm();
            // setTimeout(redirct(), 100000);

        })

        .catch(function (error) {
            console.error(error.response.data);
            // Toastify({
            //     text: error.response.data.message,
            //     className: "info",
            //     style: {
            //         background: "red",
            //         borderRadius: "5px",
            //     },
            // }).showToast();
        });

}

function formDataToObject(formData) {
    const obj = {};
    formData.forEach((value, key) => {
      if (!obj.hasOwnProperty(key)) {
        obj[key] = value;
      } else {
        if (!Array.isArray(obj[key])) {
          obj[key] = [obj[key]];
        }
        obj[key].push(value);
      }
    });
    return obj;
  }
  
  function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }
// async function getTrays() {
//     let productDetails = localStorage.getItem('id');
//     // console.log(productDetails);
//     let { data } = await axios.get(`https://peacock-api-ixpn.onrender.com/api/v1/trays/${productDetails}`);

//     console.log(data.data);
//     let dataRow = `
//         <div class="row">
//             <div class="col-md-6">
//                 <div class="container mob-bg gallery">
//                     <div class="fotorama" data-allowfullscreen="true" data-nav="thumbs" data-thumbwidth="155px">
//                         ${data.data.images.map((img) => `<img src="${img}">`).join("")}
//                     </div>
//                 </div>
//             </div>

//             <div class="col-md-6">
//                 <div class="p-4">
//                     ${data.data.discountedPrice ? `
//                         <div class="mt-4 mb-3"> 
//                             <h5 class="text-uppercase" id="title">${data.data.title}</h5>
//                             <div class="price d-flex flex-row align-items-center"> 
//                                 <span class="act-price" id="price">SAR&nbsp;${data.data.discountedPrice}</span>
//                                 <div class="ms-1"> 
//                                     <small class="dis-price">SAR&nbsp;${data.data.price}</small>
//                                 </div>
//                             </div>
//                         </div>` :
//             `
//                         <div class="mt-4 mb-3"> 
//                             <h5 class="text-uppercase" id="title">${data.data.title}</h5>
//                             <div class="price d-flex flex-row align-items-center"> 
//                                 <span class="act-price" id="price">SAR&nbsp;${data.data.price}</span>
//                             </div>
//                         </div>`
//         }
//                     <p class="about">${data.data.description}</p>
//                     <div class="sizes mt-5">
//                         <h6 class="text-uppercase">Weight</h6> 
//                         ${data.data.weight.map((weight) =>
//             `<label class="radio"> 
//                             <input type="radio" name="size" value="${weight}" id="radio" checked>
//                             <span>${weight}&nbsp;kg</span>
//                             </label>`).join("")}

//                     </div>
//                     <div class="cart mt-4 align-items-center">
//                         <button id="add" onclick="addToCart()" class="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button>
//                     </div>
//                 </div>
//             </div>
//         </div>`;

//     document.getElementById('card1').innerHTML = dataRow;
//     initFotorama(); // Initialize fotorama after setting the HTML content
// }
// getTrays();

// async function getpackages() {
//     let productDetails = localStorage.getItem('id');
//     // console.log(productDetails);
//     let { data } = await axios.get(`https://peacock-api-ixpn.onrender.com/api/v1/packages/${productDetails}`);

//     console.log(data.data);
//     let dataRow = `
//         <div class="row">
//             <div class="col-md-6">
//                 <div class="container mob-bg gallery">
//                     <div class="fotorama" data-allowfullscreen="true" data-nav="thumbs" data-thumbwidth="155px">
//                         ${data.data.images.map((img) => `<img src="${img}">`).join("")}
//                     </div>
//                 </div>
//             </div>

//             <div class="col-md-6">
//                 <div class="p-4">
//                     ${data.data.discountedPrice ? `
//                         <div class="mt-4 mb-3"> 
//                             <h5 class="text-uppercase" id="title">${data.data.title}</h5>
//                             <div class="price d-flex flex-row align-items-center"> 
//                                 <span class="act-price" id="price">SAR&nbsp;${data.data.discountedPrice}</span>
//                                 <div class="ms-1"> 
//                                     <small class="dis-price">SAR&nbsp;${data.data.price}</small>
//                                 </div>
//                             </div>
//                         </div>` :
//             `
//                         <div class="mt-4 mb-3"> 
//                             <h5 class="text-uppercase" id="title">${data.data.title}</h5>
//                             <div class="price d-flex flex-row align-items-center"> 
//                                 <span class="act-price" id="price">SAR&nbsp;${data.data.price}</span>
//                             </div>
//                         </div>`
//         }
//                     <p class="about">${data.data.description}</p>
//                     <div class="sizes mt-5">
//                         <h6 class="text-uppercase">Weight Of Each Tray in The Package</h6> 
//                         ${data.data.weight.map((weight) =>
//             `<label class="radio"> 
//                             <input type="radio" name="size" value="${weight}" id="radio" checked>
//                             <span>${weight}&nbsp;kg</span>
//                             </label>`).join("")}

//                     </div>
//                     <div class="cart mt-4 align-items-center">
//                         <button id="add" onclick="addToCart()" class="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button>
//                     </div>
//                 </div>
//             </div>
//         </div>`;

//     document.getElementById('card1').innerHTML = dataRow;
//     initFotorama(); // Initialize fotorama after setting the HTML content
// }
// getpackages();

// async function getcakes() {
//     let productDetails = localStorage.getItem('id');
//     // console.log(productDetails);
//     let { data } = await axios.get(`https://peacock-api-ixpn.onrender.com/api/v1/cakes/${productDetails}`);

//     console.log(data.data);
//     let dataRow = `
//         <div class="row">
//             <div class="col-md-6">
//                 <div class="container mob-bg gallery">
//                     <div class="fotorama" data-allowfullscreen="true" data-nav="thumbs" data-thumbwidth="155px">
//                         ${data.data.images.map((img) => `<img src="${img}">`).join("")}
//                     </div>
//                 </div>
//             </div>

//             <div class="col-md-6">
//                 <div class="p-4">
//                     ${data.data.discountedPrice ? `
//                         <div class="mt-4 mb-3"> 
//                             <h5 class="text-uppercase" id="title">${data.data.title}</h5>
//                             <div class="price d-flex flex-row align-items-center"> 
//                                 <span class="act-price" id="price">SAR&nbsp;${data.data.discountedPrice}</span>
//                                 <div class="ms-1"> 
//                                     <small class="dis-price">SAR&nbsp;${data.data.price}</small>
//                                 </div>
//                             </div>
//                         </div>` :
//             `
//                         <div class="mt-4 mb-3"> 
//                             <h5 class="text-uppercase" id="title">${data.data.title}</h5>
//                             <div class="price d-flex flex-row align-items-center"> 
//                                 <span class="act-price" id="price">SAR&nbsp;${data.data.price}</span>
//                             </div>
//                         </div>`
//         }
//                     <p class="about">${data.data.description}</p>
//                     <div class="sizes mt-5">
//                         <h6 class="text-uppercase">Size Of The Cake</h6> 
//                         ${data.data.size.map((size) =>
//             `<label class="radio"> 
//                             <input type="radio" name="size" value="${size}" id="radio" checked>
//                             <span>${size}&nbsp;cm</span>
//                             </label>`).join("")}

//                     </div>
//                     <div class="cart mt-4 align-items-center">
//                         <button id="add" onclick="addToCart()" class="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button>
//                     </div>
//                 </div>
//             </div>
//         </div>`;

//     document.getElementById('card1').innerHTML = dataRow;
//     initFotorama(); // Initialize fotorama after setting the HTML content
// }
// getcakes();

function initFotorama() {
    $('.fotorama').fotorama(); // Initialize fotorama component
}



