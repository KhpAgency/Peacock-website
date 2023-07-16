let successorderDetails = localStorage.getItem('successorderid');
if (successorderDetails==""){
    redirect()
}


function getorderdetails() {

    let baseUrl3 = `https://peacock-api-ixpn.onrender.com/api/v1/orders/${successorderDetails}`;

    const options = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        url: baseUrl3,
    };

    axios.request(options)
        .then((response) => {
            console.log(response.data.data);
            let order=response.data.data;
            let data3 =
            `
            <div class="form-group">
                <div class="card mb-4">
                    <div class="card-body">
                    <span class="card-text2 float-left font-weight-bold">Order summary</span> 
                    <span class="card-text2 float-right">Order# ${response.data.data.orderNumber}</span> 
                    <hr class="mt-4">
                        ${order.cartItems.map((item)=>`
                        <div class="item mt-3 text-left">
                            <div class="card2">
                                <div class="card-body1">
                                    <h5 class="card-title1" style="font-size:1.1rem !important;">
                                        ${item.quantity}&nbsp;x&nbsp;${item.productID.title}
                                    </h5>
                                    <span class="card-text1">${item.productCategory ==
                                        "ChocolateBox" ?
                                        `
                                    <span class="card-text1">${item.variant}&nbsp pieces</span>`
                                    : item.productCategory == "Tray" ?
                                    `<span class="card-text1">${item.variant}&nbsp kg</span>`
                                    : item.productCategory == "Packages" ?
                                    `<span class="card-text1">${item.variant}&nbsp kg</span>`
                                    : item.productCategory == "Cake" &&
                                    `<span class="card-text1">${item.variant}&nbsp cm</span>`
                                    }</span>
                                    <span class="card-text1 text-right float-right">SAR&nbsp;${item.price}</span>
                                </div>
                            </div>
                        </div>
                        `).join("")}
                        <hr class="mt-3">
                        <div class="text-right mt-3">
                        <span class="card-text4 text--bold">Total: ${order.totalorderPrice}</span>
                        </div>
                    </div>
                </div>
            </div>`;

        document.getElementById("form5").innerHTML = data3;

        // orderconfirmed = true
        // redirect(orderconfirmed)
    localStorage.setItem("successorderid","")
                                
        }
        )
        .catch((err) => {
            // orderconfirmed = false
            redirect()
        }
        )

}
getorderdetails()





function redirect() {
    // if (params ==false) {
        location.assign('index.html');

    // }
}
