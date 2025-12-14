const closeButton = document.querySelector(".closeBtn");
const openButton = document.querySelector(".openBtn");
const ul = document.querySelector("ul");

function openBtn() {
  ul.classList.remove("hidden");
  if (ul.className === "") {
    openButton.style.display = "none";
    closeButton.style.display = "block";
  }
}

function closeBtn() {
  ul.classList.add("hidden");
  if (ul.className === "hidden") {
    closeButton.style.display = "none";
    openButton.style.display = "block";
  }
}

closeButton.addEventListener("click", closeBtn);
openButton.addEventListener("click", openBtn);
