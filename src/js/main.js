// ------- 01

var darkBox = document.querySelector(".box-javascript-1");

var toggleColorToDark = function () {
  darkBox.classList.toggle("black-javascript-box");
};

darkBox.addEventListener("click", toggleColorToDark);

// ------- 02

var darkBox2B = document.querySelector(".box-javascript-2B");
var click2A = document.querySelector(".box-javascript-2A");

var toggleColorToDark2 = function () {
  darkBox2B.classList.toggle("black-javascript-box");
};

click2A.addEventListener("click", toggleColorToDark2);

// ------- 03

var Box3A = document.querySelector(".box-javascript-3A");
var Box3B = document.querySelector(".box-javascript-3B");
var Box3C = document.querySelector(".box-javascript-3C");

var toggleInvisibleBox = function () {
  Box3B.classList.toggle("invisible-box");
};

var toggleVisibleBox = function () {
  Box3C.classList.toggle("visible-box");
};

Box3A.addEventListener("click", toggleVisibleBox);
Box3A.addEventListener("click", toggleInvisibleBox);
