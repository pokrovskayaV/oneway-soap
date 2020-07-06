const btnMore = document.querySelector(".more");
let textContainer = document.querySelector(".text-shadow");
let descriptionBlock = document.querySelector(".text-and-btn");
let characterBlock = document.querySelector(".table");

const descriptionBtn = document.querySelector(".description-btn");
const characterBtn = document.querySelector(".character-btn");

let form = document.querySelector(".subscribe");
let input = document.querySelector(".subscribe-form");

let hamburgerBtn = document.querySelector(".hamburger");
let mobileMenu = document.querySelector(".mobile-menu");

btnMore.addEventListener("click", toggleHeightContainer);

function toggleHeightContainer(event) {
  event.preventDefault();
  textContainer.classList.toggle("open");
  textContainer.classList.contains("open")
    ? (this.textContent = "Свернуть ↑")
    : (this.textContent = "Показать больше  ↓");
}

descriptionBtn.addEventListener("click", showDescroptionBlock);
characterBtn.addEventListener("click", showCharacterBlock);

function showDescroptionBlock(event) {
  event.preventDefault();
  characterBlock.classList.remove("block-visible");
  characterBlock.classList.add("block-hidden");
  descriptionBlock.classList.remove("block-hidden");
  textContainer.classList.remove("open");
  btnMore.textContent = "Показать больше  ↓";
  descriptionBtn.classList.add("bold");
  characterBtn.classList.remove("bold");
}

function showCharacterBlock(event) {
  event.preventDefault();
  descriptionBlock.classList.add("block-hidden");
  characterBlock.classList.remove("block-hidden");
  characterBlock.classList.add("block-visible");
  descriptionBtn.classList.remove("bold");
  characterBtn.classList.add("bold");
}

form.addEventListener("submit", event => {
  event.preventDefault();
  alert("Подписка оформлена!");
  input.value = "";
});

hamburgerBtn.addEventListener("click", openMenu);

function openMenu(event) {
  event.preventDefault();
  mobileMenu.classList.toggle("block-visible");
  hamburgerBtn.classList.toggle("hamburger-close");
}
