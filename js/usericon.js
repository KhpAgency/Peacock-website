function addAuthorizationHeader() {
    const token = localStorage.getItem('token');
    // console.log(token);
    if (token) {
        var newElement = document.createElement("div");
        newElement.innerHTML = `<ul id="userdiv" class="header_nav-socials d-flex">
            <li class="header_nav-list_item dropdown">
                <a class="link nav-link nav-item dropdown-toggle d-flex align-items-center"
                    data-bs-toggle="collapse" data-bs-target="#userMenu" data-trigger="dropdown"
                    data-page-parent="user" data-main-link="true" aria-expanded="false"
                    aria-controls="userMenu" rel="noopener noreferrer" style="width: 40px;height: 40px;">
                    <i class="icon2-user icon2 usericonshop usericoncart"></i>
                </a>
                <div class="dropdown-menu" id="userMenu">
                    <ul class="dropdown-list" style="background-color: #A8C7C7;">
                        <li class="list-item" style="background-color: #A8C7C7;">
                            <a class="dropdown-item nav-item" data-page="reservations"
                                data-page-parent="user" href="myprofile.html">
                                My Profile
                            </a>
                        </li>
                        <li class="list-item" style="background-color: #A8C7C7;">
                            <a class="dropdown-item nav-item" data-page="reservations"
                                data-page-parent="user" href="#" onclick="logout()">
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>`;
        var parentElement = document.getElementById("headerMenu");
        parentElement.appendChild(newElement);
        document.getElementById("registerbutton").style.display="none";
    }

    return { authorization: `Bearer ${token}` };
}
addAuthorizationHeader();


window.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth <= 768) {
        var dropdownMenu = document.getElementById("userMenu");
        dropdownMenu.classList.remove("dropdown-menu");
    }
});
