function logout() {
  localStorage.setItem('token', "");
  window.location.href="index.html";
}