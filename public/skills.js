// ? Current Btn...
/* let currentBtn = 0;
const slideSize = slide.length; */

// * Left Button:::
/* btnLeft.addEventListener("click", (e) => {
  e.preventDefault();
  currentBtn--;
  if (currentBtn < 0) {
    currentBtn = slideSize - 1;
  }
  slideMove(currentBtn);
  console.log(currentBtn);
}); */

// * Right Button:::
/* btnRight.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentBtn > slideSize - 1) {
    currentBtn = 0;
  }
  currentBtn++;
  slideMove(currentBtn);
  console.log(currentBtn);
}); */

// * Navigate Slide:::
/* const slideMove = (slideNo) => {
  console.log(slideNo);
  slide.forEach((slide, i) => {
    console.log(i);
    slide.style.transform = `translateX(${100 * (i - slideNo)}%)`;
    slide.style.transition = "transform 400ms 300ms ease-in-out";
  });
}; */
// slideMove(0);

const Slider = () => {
  const slide = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  // const btnLeft = document.querySelector(".fa-angle-left");
  // const btnRight = document.querySelector(".fa-angle-right");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");
  console.log(slide);
  console.log(btnLeft);

  /*   const crtDots = function () {
      slide.forEach((_, i) =>
        dotContainer.insertAdjacentHTML(
          "beforeend",
          `<button class="dots__dot" data-slide="${i}"></button>`
        )
      );
    }; */

  // slider.style.transform = `scale(${0.5})`;

  /*  slide.forEach((s, i) => {
      return (s.style.transform = `translateX(${100 * i}%)`);
    });
   */
  /* * Goto Slide */

  const gotoSlide = (slides) => {
    slide.forEach((s, i) => {
      return (s.style.transform = `translateX(${100 * (i - slides)}%)`);
    });
  };
  console.log(slide);
  let currentSlide = 0;
  /* * Next slide */
  const nextSlide = () => {
    if (currentSlide > slide.length - 2) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    console.log(currentSlide);
    gotoSlide(currentSlide);
    // removeActive(currentSlide);
  };

  /* PrevSlide */
  const prevSlide = () => {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slide.length - 1;
    }
    console.log(currentSlide);
    gotoSlide(currentSlide);
    // removeActive(currentSlide);
  };

  /* Button Left Funtionality */
  btnRight.addEventListener("click", nextSlide);

  /* Button Right Funtionality */
  btnLeft.addEventListener("click", prevSlide);

  /* Remove Active Class */
  /* const removeActive = function (slide) {
      document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));
      
      document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add("dots__dot--active");
    }; */
  /* getSpecific Dot */
  /* dotContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("dots__dot")) {
        const { slide } = e.target.dataset;
        gotoSlide(slide);
        removeActive(slide);
      }
    }); */

  /* Initial State */
  const init = function () {
    gotoSlide(0);
    // crtDots();
    // removeActive(0);
  };
  init();
};
// * Slider
/* ? Sliding content */
const slider = document.querySelector(".slider");

// * Showing the skills:::
const url = "http://localhost:3000/api/skill/";
const showSkills = async () => {
  const res = await fetch(url);
  const skillData = await res.json();
  console.log(skillData);

  skillData.map((skill) => {
    const { icon, title, desc, year } = skill;

    const html = `
      <div class="skill_slide1 slide">
      <li><i class="${icon}"></i></li>
      <h2 class="skill_title">${title}</h2>
      <p class="skill_desc">${desc}</p>
      <h3 class="skill_exp">experience : <strong>${year}</strong> years</h3>
    </div>
      `;
    return slider.insertAdjacentHTML("beforeend", html);
  });
  Slider();
};
showSkills();
