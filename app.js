window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.remove("bg-transparent");
    header.classList.add("bg-opaque");
  } else {
    header.classList.remove("bg-opaque");
    header.classList.add("bg-transparent");
  }
});

// let menuIcon = document.getElementById("menuIcon");
let menuContainer = document.getElementById("menuContainer");
let openIcon = document.getElementById("openMenu");
let closeIcon = document.getElementById("closeMenu");
openIcon.addEventListener("click", showMenu);
function showMenu(e) {
  e.preventDefault();
  menuContainer.style.display = "flex";
  openIcon.style.display = "none";
  closeIcon.style.display = "block";
}
closeIcon.addEventListener("click", closeMenu);
function closeMenu(e) {
  e.preventDefault();
  menuContainer.style.display = "none";
  openIcon.style.display = "block";
  closeIcon.style.display = "none";
}
