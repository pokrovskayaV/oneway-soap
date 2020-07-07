const btnColor1 = document.querySelector(".color-1");
const btnColor2 = document.querySelector(".color-2");
const btnColor3 = document.querySelector(".color-3");
let btnBuy = document.querySelector(".buy");
let picture1 = document.querySelector(".picture-1");
let picture2 = document.querySelector(".picture-2");
let gallery = document.querySelector(".gallery");

const btn_prev = document.querySelector(".arrow .left"),
  btn_next = document.querySelector(".arrow .right");

let images = document.querySelectorAll(".photo img");
let i = 0;

//Слайдер фото

btn_prev.addEventListener("click", function() {
  images[i].className = "";
  i = i - 1;
  if (i < 0) {
    i = 0;
  }
  images[i].className = "shown";
});

btn_next.addEventListener("click", function() {
  images[i].className = "";
  i = i + 1; //i++
  if (i >= images.length) {
    i = 1;
  }
  images[i].className = "shown";
});

// Изменение фото на сайдере при переключении цвета

btnColor1.addEventListener("click", selectColor1);
btnColor2.addEventListener("click", selectColor2);
btnColor3.addEventListener("click", selectColor3);

function selectColor1(event) {
  event.preventDefault();
  picture1.src = "img/item-2-1.png";
  picture2.src = "img/item-2-2.png";
  btnColor1.classList.add("color-chosen");
  btnColor2.classList.remove("color-chosen");
  btnColor3.classList.remove("color-chosen");
  btnBuy.classList.remove("disabled-btn");
  btnBuy.disabled = false;
  gallery.classList.remove("gallery-hidden");
}

function selectColor2(event) {
  event.preventDefault();
  picture1.src = "img/item-1-1.png";
  picture2.src = "img/item-1-2.png";
  btnColor2.classList.add("color-chosen");
  btnColor1.classList.remove("color-chosen");
  btnColor3.classList.remove("color-chosen");
  btnBuy.classList.remove("disabled-btn");
  btnBuy.disabled = false;
  gallery.classList.remove("gallery-hidden");
}
function selectColor3(event) {
  event.preventDefault();
  btnBuy.classList.add("disabled-btn");
  btnBuy.disabled = true;
  btnColor3.classList.add("color-chosen");
  btnColor1.classList.remove("color-chosen");
  btnColor2.classList.remove("color-chosen");
  gallery.classList.add("gallery-hidden");
}
