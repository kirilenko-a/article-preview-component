import "./style.css";
//DOM
const shareButton = document.getElementById("share-btn");
const popover = document.getElementById("popover");
const footer = document.getElementById("footer");
const author = document.getElementById("author");
const footerGreyButton = document.getElementById("footer-grey-btn");
const shareIcon = document.getElementById("share-icon");

//LOGIC
shareButton.addEventListener("click", () => {
  if (window.matchMedia("(min-width: 768px)").matches) {
    popover.classList.toggle("hidden");
    popover.classList.add("flex");
    shareButton.classList.toggle("bg-grey500");
    shareIcon.classList.toggle("invert");
    shareIcon.classList.toggle("brightness-0");
  } else {
    author.classList.toggle("hidden");
    footer.classList.toggle("hidden");
    footer.classList.add("flex");
  }
});

footerGreyButton.addEventListener("click", () => {
  footer.classList.toggle("hidden");
  author.classList.toggle("hidden");
});
