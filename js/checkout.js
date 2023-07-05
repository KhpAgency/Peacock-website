function getorderitems() {
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
            console.log(response.data.data);
            let data = cart.map((item) =>
            `<div class="item">
                <p class="price">SAR&nbsp;<span id="price">${item.price * item.quantity}</span></p>
                <p class="item-name">${item.quantity}&nbsp;x&nbsp;${item.productID.title}</p>
                <p class="item-description">
                ${item.productCategory == "ChocolateBox" ?
                        `<p>${item.variant}&nbsp pieces</p>`
                        : item.productCategory == "Tray" ?
                            `<p>${item.variant}&nbsp kg</p>`
                            : item.productCategory == "Package" ?
                                `<p>${item.variant}&nbsp kg</p>`
                                : item.productCategory == "Cake"
                                    `<p>${item.variant}&nbsp cm</p>`
                }
                </p>
            </div>`
            ).join("")
            document.getElementById("orderproducts").innerHTML = data;
            
            let data2=`Total<span class="price">SAR&nbsp;${response.data.data.totalCartPrice}</span>`
            document.getElementById("total").innerHTML = data2;
        }).catch(() => {

        })


}  
getorderitems();