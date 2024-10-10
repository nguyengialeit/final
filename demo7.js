function toggleMobileMenu() {
  document.getElementById("mobileMenu").classList.toggle("hidden");
  document.getElementById("mobileMenu").classList.toggle("flex");
}

function moveCursor(event) {
  document.getElementById("cursor").style.left = event.clientX;
  document.getElementById("cursor").style.top = event.clientY;
}