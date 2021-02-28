const images = [
  "https://takuro-1200.github.io/slide-show/image/image1.jpg",
  "https://takuro-1200.github.io/slide-show/image/image2.jpg",
  "https://takuro-1200.github.io/slide-show/image/image3.jpg",
  "https://takuro-1200.github.io/slide-show/image/image4.jpg",
  "https://takuro-1200.github.io/slide-show/image/image5.jpg",
];
let current = 0;

function changeImage(num) {
  if (current + num > -1 && current + num < images.length) {
    current += num;
    document.getElementById("main-image").src = images[current];
    pageNum();
  }
}
function pageNum() {
  document.getElementById("page").textContent = `${current + 1} / ${
    images.length
  }`;
}
pageNum();

document.getElementById("prev").onclick = function () {
  changeImage(-1);
};
document.getElementById("next").onclick = function () {
  changeImage(1);
};
