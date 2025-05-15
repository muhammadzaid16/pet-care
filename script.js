let nav_container = document.querySelector(".menu");
let humberger_btn = document.querySelector("#humberger-btn");

humberger_btn.addEventListener("click", () => {
  nav_container.classList.toggle("active");

  if (humberger_btn.classList.contains("fa-bars")) {
    humberger_btn.classList.remove("fa-bars");
    humberger_btn.classList.add("fa-xmark");
  } else {
    humberger_btn.classList.add("fa-bars");
    humberger_btn.classList.remove("fa-xmark");
  }
});

window.addEventListener("click", function (e) {
  if (e.target != nav_container && e.target != humberger_btn) {
    if (nav_container.classList.contains("active")) {
      nav_container.classList.remove("active");
    }

    if (humberger_btn.classList.contains("fa-xmark")) {
      humberger_btn.classList.add("fa-bars");
      humberger_btn.classList.remove("fa-xmark");
    }
  }
});

//carousel

const rightBtn = document.querySelector("#right-arrow-btn");
const leftBtn = document.querySelector("#left-arrow-btn");
const carousel_slides = document.querySelectorAll(".carousel-slide");

const MAX_STEPS_INDEX = carousel_slides.length - 1;
let activeIndex = 0;

const handleSlide = (newIndex) => {
  carousel_slides.forEach((slide) => (slide.style.display = "none"));
  carousel_slides[newIndex].style.display = "flex";

  // console.log({ newIndex });
  // console.log({ MAX_STEPS_INDEX });
};

leftBtn.addEventListener("click", () => {
  let newIndex = activeIndex;

  if (newIndex - 1 === -1) {
    newIndex = MAX_STEPS_INDEX;
  } else {
    newIndex--;
  }

  activeIndex = newIndex;

  handleSlide(newIndex);
});

rightBtn.addEventListener("click", () => {
  let newIndex = activeIndex;

  if (newIndex + 1 === MAX_STEPS_INDEX + 1) {
    newIndex = 0;
  } else {
    newIndex++;
  }

  activeIndex = newIndex;

  handleSlide(newIndex);
});
