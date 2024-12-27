
// !start scroll button

let buttonUp = document.querySelector(".scroll-button");

window.onscroll = function () {
  if (window.scrollY >= 1100) {
    buttonUp.style.display = "block";
  } else if (window.scrollY < 1000) {
    buttonUp.style.display = "none";
  }
};

buttonUp.addEventListener("click", function (e) {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ! end scroll button
