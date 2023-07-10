function cartitemsnumber() {
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
            number=response.data.numOfCartItems;
            let data=`<p class="num">${number}</p>`;
            document.getElementById("numberofitems").innerHTML=data;
        })
        .catch((err) => {
            console.log(err);
        }
        )
}
cartitemsnumber();
