const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `images/${chosenImage}`;

bgImage.classList.add('bgImage');

document.body.appendChild(bgImage);