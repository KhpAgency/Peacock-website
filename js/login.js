const baseUrl = 'https://peacock-api-ixpn.onrender.com/api/v1/auth/login';

const form = document.getElementById("login-form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    collectFormData();

});

function clearForm() {
    form.reset();
}

function collectFormData() {
    const formData = new FormData(form);
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        url: baseUrl,
        data: new URLSearchParams(formData),
    };
    axios
        .request(options)
        .then(function (response) {
            console.log(response.data); // Log the entire response object for inspection
        })
        .catch(function (error) {
            console.error(error); // Log the error object for troubleshooting
        });


}
