function openMenuMobile() {
  document.querySelector("#menu").classList.add("open");
  document.querySelector("#overlay").classList.add("visible");
}

function closeMenuMobile() {
  document.querySelector("#menu").classList.remove("open");
  document.querySelector("#overlay").classList.remove("visible");
}
