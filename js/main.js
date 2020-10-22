let targetedImage = document.getElementById("targetImages");
let altText = document.getElementById("altText");
// altText.innerHTML = "Textt";

function ImageHandler() {
  targetedImage.src = "../images/images1.jpg";
}

function showImage() {
  altText.innerHTML = "Button Clicked";
  console.log(targetedImage, altText);
}
