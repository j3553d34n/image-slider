const slider = document.querySelector(".slider");
const before = document.querySelector(".image-before");
const after = document.querySelector(".image-after");
const container = document.querySelector(".slider-container");

const drag = (e) => { // use e as argument to use the mousemove event propertie (layerX)
    let xPos = e.layerX;
    let size = container.offsetWidth;
    before.style.width = xPos + "px";
    slider.style.left = xPos + "px";

    if (xPos < 50) {
        before.style.width = 0;
        slider.style.left = 0;
    }
    if (xPos + 50 > size) {
        before.style.width = size + "px";
        slider.style.left = size + "px";
    }
};

container.addEventListener('mousemove', drag); // for mobile use touchmove