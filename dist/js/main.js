(function() {
  let imgBlur = document.querySelector(".blur");
  let sliderBlur = document.querySelector("input[type=range]");

  sliderBlur.addEventListener("input", function() {
    imgBlur.style.webkitFilter = `blur(${this.value}px)`;
    sliderFillColor(this);
  });

  function sliderFillColor(fill) {
    let val = (fill.value - fill.min) / (fill.max - fill.min);
    let percent = val * 100;
    fill.style.background = `linear-gradient(to right, #64cae4 ${percent}%, #eeeeee 0%)`;
  }
})();
