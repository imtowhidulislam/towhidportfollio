const rippleBtn = document.querySelectorAll(".ripple_btn");

const rippleButton = (ele) => {
  ele.forEach((button) => {
    button.addEventListener("mousedown", (e) => {
      e.preventDefault();
      const axisX = e.offsetX;
      const axisY = e.offsetY;

      button.style.setProperty("--x", axisX + "px");
      button.style.setProperty("--y", axisY + "px");
      button.classList.add("pulse");

      button.addEventListener("animationend", () => {
        button.classList.remove("pulse");
      });
    });
  });
};
rippleButton(rippleBtn);
