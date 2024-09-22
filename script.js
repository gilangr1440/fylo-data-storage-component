const range = document.querySelector(".input-container__input-range");

range.oninput = function () {
  document.querySelector(".input-container__text_weight_bold").innerHTML = this.value;
  document.querySelector(".input-container__remain-number").innerHTML = 1000 - this.value;
  let percentage = Math.floor(this.value / 10);
  this.style.setProperty("--gradient", `linear-gradient(to right, hsl(6, 100%, 80%) 0%, hsl(335, 100%, 65%) ${percentage}%, hsl(229, 57%, 11%) ${percentage}%, hsl(229, 57%, 11%) 100%)`);
};
