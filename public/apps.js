// import { init } from "ityped";
const introSkill = document.querySelector(".intro_skill");
const header = document.querySelector(".header");
const navContainer = document.querySelector(".nav_container");
const aboutContainer = document.querySelector(".about_section");
const moodBtn = document.querySelector(".mood_btn");
const body = document.body;
const navLink = document.querySelectorAll(".nav_link");
const signIn = document.querySelector(".signIn");
const footer = document.querySelector("footer");

console.log(footer);
const navContainerHeight = navContainer.getBoundingClientRect().height;

const callBack = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) navContainer.classList.add("sticky");
  else navContainer.classList.remove("sticky");
};

const observerOptions = {
  root: null,
  threshold: 0,
  rooMarging: `-${navContainerHeight}px`,
};

const observer = new IntersectionObserver(callBack, observerOptions);
observer.observe(header);

// moodBtn.classList.add("mood-night");
// moodBtn.style.color = "hotpink";
console.log(moodBtn);
// * Mood Button Functinality:::
console.log(body);
const moodButton = () => {
  moodBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(e.target);
    const el = e.target;
    // el.classList.toggle("mood-night");
    if (body.classList.contains("dark-mood")) {
      body.classList.add("light-mood");
      body.classList.remove("dark-mood");

      signIn.classList.add("dark-font");
      signIn.classList.remove("mood-day");

      footer.classList.add("footer-light");
      footer.classList.remove("footer-dark");

      el.classList.add("mood-night");
      el.classList.remove("mood-day");

      navLink.forEach((link) => {
        link.classList.add("dark-font");
        link.classList.remove("mood-day");
      });
    } else {
      body.classList.remove("light-mood");
      body.classList.add("dark-mood");

      signIn.classList.add("mood-day");
      signIn.classList.remove("dark-font");

      footer.classList.remove("footer-light");
      footer.classList.add("footer-dark");

      el.classList.add("mood-day");
      el.classList.remove("mood-night");

      navLink.forEach((link) => {
        link.classList.remove("dark-font");
        link.classList.add("mood-day");
      });
    }

    /*  if (el.classList.contains("mood-day")) {
      el.classList.remove("mood-day");
      el.classList.add("mood-night");
    } else {
      el.classList.add("mood-day");
      el.classList.remove("mood-night");
    } */
  });
};
moodButton();
