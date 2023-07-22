function getorderdetails() {
    let orderDetails = localStorage.getItem('orderID');

    let baseUrl3 = `https://peacock-api-ixpn.onrender.com/api/v1/orders/${orderDetails}`;

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
        let data=`
                <div class="container-fluid d-flex  justify-content-center">
                    <div class="card card-1" style="width: 800px;">
                        <div class="card-body">
                            <div class="col-auto  pl-0"> <small>Order# ${order.orderNumber}</small>
                            </div>
                            <div class="row justify-content-between mb-3">
                            </div>
                            <div class="row">
                                <div class="col">
                                ${order.cartItems.map((item) => {
                                    let productInfo;
                                    try {
                                        productInfo = `
                                            <div class="sq align-self-center "> 
                                                <img class="my-auto align-self-center mr-2 mr-md-4 pl-0 p-0 m-0" src="${item.productID.images[0]}" style="width: 100px" />
                                            </div>
                                            <div class="media-body my-auto fsmaller">
                                                <div class="row text-left">
                                                    <h6 class="mb-2 fs1">${item.productID.title}</h6>
                                                </div>
                                                <div class="row text-left">
                                                    <p class="mb-0">${item.productID.description}</p>
                                                </div>
                                                <div class="row text-left">
                                                    <p class="mb-0">Qty: ${item.quantity}</p>
                                                </div>
                                                <div class="row text-right">
                                                    <h6 class="mb-0 h6t">SAR&nbsp;${item.price}</h6>
                                                </div>
                                            </div>
                                        `;
                                    } catch (error) {
                                        // If there's an error accessing item properties, set a default message
                                        productInfo = "<div>Product has been removed</div>";
                                    }
                                    return `
                                        <div class="card card-2 mb-3">
                                            <div class="card-body bg-white shadow rounded-lg">
                                                <div class="media">
                                                    ${productInfo}
                                                </div>
                                            </div>
                                        </div>
                                    `;
                                }).join("")}
                                
                                    
                                </div>
                            </div>
                            <div class="row mt-4">
                                <div class="col-md-6">
                                    <p class="mb-1 text-dark text--bold"><b>Shipping details</b></p>
                                    <p class="mb-1">Place: ${order.shippingAddress.alias}</p>
                                    <p class="mb-1">Address: ${order.shippingAddress.details}</p>
                                    <p class="mb-1">Phone number: ${order.shippingAddress.phone}</p>
                                    <p class="mb-1 text-dark text--bold"><b>Payment method</b></p>
                                    <p class="mb-1">${order.paymentMethod}</p>

                                </div>
                                <div class="col-md-6">
                                    <div class="row justify-content-between">
                                        <div class="flex-sm-col text-right col">
                                            <p class="mb-1 text--bold"><b>Total</b></p>
                                        </div>
                                        <div class="flex-sm-col col-auto">
                                            <p class="mb-1">SAR&nbsp;${order.totalorderPrice}</p>
                                        </div>
                                    </div>
                                    <div class="row justify-content-between">
                                        <div class="flex-sm-col text-right col">
                                            <p class="mb-1 text--bold"><b>Delivery Charges</b></p>
                                        </div>
                                        <div class="flex-sm-col col-auto">
                                            <p class="mb-1">SAR&nbsp; 0</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="jumbotron-fluid">
                                <div class="row justify-content-between ">
                                    <div class="col-auto my-auto ">
                                        <h2 class="mb-0 font-weight-bold h2t">TOTAL PAID</h2>
                                    </div>
                                    <div class="col-auto my-auto ml-auto">
                                        <h6 class="display-3 h6t">SAR&nbsp;${order.totalorderPrice}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `;
        document.getElementById('form1').innerHTML = data;


        }
        )
        .catch((err) => {
            console.log(err);
        }
        )

}
getorderdetails();
