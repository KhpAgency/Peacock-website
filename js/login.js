const baseUrl = "https://peacock-api-ixpn.onrender.com/api/v1/auth/login";

const form = document.getElementById("login-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  collectFormData();

});

function redirect() {
  window.location.href = "index.html";
}

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
      console.log(response.data);
      if (response.data.token) {
        const token = response.data.token;
        localStorage.setItem('token', token);
        
      }
      Toastify({
        text: "Logged in Successfully",
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
          borderRadius: "5px",
        },
        
      }).showToast();
      // clearForm();
      setTimeout(redirect, 2000);
      
    })

    .catch(function (error) {
      console.error(error.response.data);

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
