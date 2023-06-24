const baseUrl = 'https://peacock-api-ixpn.onrender.com/api/v1/auth/resetPassword';

const form = document.getElementById("newpw-form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    collectFormData();
    validateForm();
});

function clearForm() {
    form.reset();
}

function collectFormData() {
    const formData = new FormData(form);
    const options = {
        method: "PUT",
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

 function validateForm() {
    var password = document.getElementById("newPassword").value;
    var rePassword = document.getElementById("confirmationPassword").value;

    if (password !== rePassword) {
        alert("Passwords do not match.");
        return false;
    }
    else{
        return true; 
    }
    
}
