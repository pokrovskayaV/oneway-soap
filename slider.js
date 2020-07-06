let container = document.querySelector(".container");
const count = 1;
let width = 546;

let list = container.querySelector("ul");
let listElems = container.querySelectorAll("li");

let position = 0;

const btnColor1 = document.querySelector(".color-1");
const btnColor2 = document.querySelector(".color-2");
const btnColor3 = document.querySelector(".color-3");
let btnBuy = document.querySelector(".buy");
let picture1 = document.querySelector(".picture-1");
let picture2 = document.querySelector(".picture-2");
let gallery = document.querySelector(".gallery");

let i = 1;
for (let li of container.querySelectorAll("li")) {
  li.style.position = "relative";
  i++;
}

function windowWidth() {
  return document.body.clientWidth;
}
window.addEventListener("resize", function() {
  windowWidth();
 if (windowWidth() > 768) {
    width = 546;
  } else if (windowWidth() <= 768 && windowWidth() > 320) {
    width = 342;
  } else if (windowWidth() <= 320) {
    width = 320;
  }
  return width;
});

container.querySelector(".left").addEventListener("click", scrollLeft);
container.querySelector(".right").addEventListener("click", scrollRight);

function scrollLeft() {
  position += width * count;
  position = Math.min(position, 0);
  console.log(position);
  list.style.marginLeft = position + "px";
}

function scrollRight() {
  position -= width * count;
  position = Math.max(position, -width * (listElems.length - count));
  console.log(position);
  list.style.marginLeft = position + "px";
}

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
