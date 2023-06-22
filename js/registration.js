// document.getElementById("signup-form").addEventListener("submit", function (event) {
//     event.preventDefault(); 

//      if (validateForm()) {
//         console.log("Form submitted successfully!");
//         alert("Successfully Registered!");
//         clearForm();
//         window.location.href = "index.html"; 
//     }
// });

//  function validateForm() {
//      var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     var rePassword = document.getElementById("confirmationPassword").value;
//     var agreeTerm = document.getElementById("agree-term").checked;

//      if (name === "") {
//         alert("Please enter your name.");
//         return false;
//     }

//     if (email === "") {
//         alert("Please enter your email.");
//         return false;
//     }

//     if (password === "") {
//         alert("Please enter a password.");
//         return false;
//     }

//     if (password !== rePassword) {
//         alert("Passwords do not match.");
//         return false;
//     }

//     if (!agreeTerm) {
//         alert("Please agree to the Terms of Service.");
//         return false;
//     }

//     return true; 
// }

// function clearForm() {
//     document.getElementById("name").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("password").value = "";
//     document.getElementById("re_password").value = "";
//     document.getElementById("agree-term").checked = false;
// }



const baseUrl = 'https://peacock-api-ixpn.onrender.com/api/v1/auth/signup';

const form = document.getElementById("signup-form");
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


//     fetch(baseUrl, {
//         Method: 'POST',
//         Headers: {
//           Accept: 'application.json',
//           'Content-Type': 'application/json'
//         },
//         Body: new URLSearchParams(formData),
//         Cache: 'default'
//       }).then((response)=>{
//         console.log(response);
//       }).catch((err)=>{
//         console.log(err);
//       })




