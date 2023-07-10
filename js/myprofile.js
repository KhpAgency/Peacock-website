let userData = {};

function getuserdata() {
    let baseUrl = "https://peacock-api-ixpn.onrender.com/api/v1/users/getLoggedUser";

    const options = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        url: baseUrl,
    };

    axios.request(options)
        .then((response) => {
            console.log(response.data.data);
            userData = response.data.data;

            let data1 =
                `<h4 class="text-center">${response.data.data.name}</h4>`;
            document.getElementById("main_name").innerHTML = data1;

            let data2 =
                `<div class="row mb-3">
            <div class="col-md-12">
                <div class="form-group">
                    <label>Name</label>
                    <input id="nameinput" type="text" name="name" class="form-control" value="${response.data.data.name}">
                </div>
            </div>
            <div class="col-md-12">
                <div class="form-group">
                    <label>Email</label>
                    <input id="emailinput" type="text" name="email" class="form-control"
                        value="${response.data.data.email}">
                </div>
            </div>
            <div class="col-md-12">
                <div class="form-group">
                    <label>Phone number</label>
                    <input id="phoneinput" type="text" name="phone" class="form-control"
                        value="${response.data.data.phone}">
                </div>
            </div>
        </div>
        <div>
            <button type="submit" class="btn btn-primary mr-2">Update</button>
            <button class="btn btn-light">Cancel</button>
        </div>`;
            document.getElementById("form1").innerHTML = data2;


        }
        )
        .catch((err) => {
            console.log(err);
        }
        )

}
getuserdata();


const form = document.getElementById("form1");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    collectFormData();
});


function collectFormData() {
    let url2 = "https://peacock-api-ixpn.onrender.com/api/v1/users/updateLoggedUserData";
    const formData = new FormData(form);

    // Get the initial form values fetched from the API
    const initialFormValues = {
        name: userData.name,
        email: userData.email,
        phone: userData.phone
    };

    // Compare the current form values with the initial values
    const updatedFields = {};
    for (let [key, value] of formData.entries()) {
        if (value !== initialFormValues[key]) {
            updatedFields[key] = value;
        }
    }

    console.log(initialFormValues["email"]);
    const options = {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url: url2,
        data: new URLSearchParams(updatedFields), // Use only the updated fields
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

