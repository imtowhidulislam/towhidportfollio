// import { init } from "ityped";
const introSkill = document.querySelector(".intro_skill");
const header = document.querySelector(".header");
const navContainer = document.querySelector(".nav_container");
const aboutContainer = document.querySelector(".about_section");

const navContainerHeight = navContainer.getBoundingClientRect().height;

const callBack = (entries, observer) => {
  const [entry] = entries;

 /*  if (!entry.isIntersecting) navContainer.classList.add("sticky");
  else navContainer.classList.remove("sticky"); */
};

const observerOptions = {
  root: null,
  threshold: 0,
  rooMarging: `-${navContainerHeight}px`,
};

const observer = new IntersectionObserver(callBack, observerOptions);
observer.observe(header);
