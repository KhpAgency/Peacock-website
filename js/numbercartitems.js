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
            number = response.data.numOfCartItems;
            var data1;
            data1 = `<p class="num">${number}</p>`;
            document.getElementById("numberofitems").innerHTML = data1;
        })
        .catch((err) => {
            console.log(err);
            data1 = `<p class="num">0</p>`;
            document.getElementById("numberofitems").innerHTML = data1;
        }
        )
}
cartitemsnumber();
