document.addEventListener("DOMContentLoaded", function () {
  const menuBtnO = document.getElementById("menuBtnO");
  const menuBtnC = document.getElementById("menuBtnC");
  const sidebar = document.getElementById("sidebar");

  menuBtnO.addEventListener("click", function () {
    sidebar.classList.add("open");
  });
  menuBtnC.addEventListener("click", function () {
    sidebar.classList.remove("open");
  });
});
// function menubtn(x) {
//   x.classList.toggle("change");
// }
