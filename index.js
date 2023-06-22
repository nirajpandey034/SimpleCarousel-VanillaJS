const carousel_container = document.getElementById("carousel-container");
const prevButton = document.querySelector(".btn-prev");
const nextButton = document.querySelector(".btn-next");

let currentSlide = 0;

const slideData = [
  "https://images.pexels.com/photos/17239929/pexels-photo-17239929.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/17206864/pexels-photo-17206864/free-photo-of-wood-landscape-building-construction.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/16349260/pexels-photo-16349260/free-photo-of-rose-in-bottle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
];

const createAndAddSlides = (index, img) => {
  const slide = document.createElement("div");
  slide.setAttribute("id", `slide-${index}`);
  slide.setAttribute("class", "slide");
  slide.style.backgroundImage = `url(${img})`;

  slide.style.transform = `translateX(${index * 100}%)`;

  carousel_container.append(slide);
};

window.addEventListener("load", () => {
  slideData.forEach((item, index) => {
    createAndAddSlides(index, item);
  });
});

prevButton.addEventListener("click", () => {
  const slides = document.querySelectorAll(".slide");
  // if first slide is visible, move user back to last one
  if (currentSlide === 0) currentSlide = slides.length - 1;
  else currentSlide--; // otherwise just decrease current slide by 1
  slides.forEach((item, index) => {
    let it = item.classList;
    it.remove("slide-active");
    if (currentSlide === index) {
      it.add("slide-active");
      item.style.transform = `translateX(${
        (index - currentSlide) * 100
      }%) scale(${1.2})`;
    } else
      item.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
  });
});

nextButton.addEventListener("click", () => {
  const slides = document.querySelectorAll(".slide");
  // if last slide is visible, move user back to first one
  if (currentSlide === slides.length - 1) currentSlide = 0;
  else currentSlide++; // otherwise just increase current slide by 1
  slides.forEach((item, index) => {
    let it = item.classList;
    it.remove("slide-active");
    if (currentSlide === index) {
      it.add("slide-active");
      item.style.transform = `translateX(${
        (index - currentSlide) * 100
      }%) scale(${1.2})`;
    } else
      item.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
  });
});
