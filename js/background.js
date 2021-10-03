const imgs = ['0.jpg', '1.jpg', '2.jpg'];

const chosenImg = imgs[Math.floor(Math.random()*imgs.length)];

const bgImg = document.createElement("img");
bgImg.src = `img/${chosenImg}`;
document.body.style.background = "url('img/0.jpg') no-repeat 0 0";

// bgImg.src = `img/${chosenImg}`;
// bgImg.width = 2000;
// bgImg.height = 2000;
// document.body.appendChild(bgImg);

