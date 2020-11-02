let targetedImage = document.getElementById("targetImages");
let altText = document.getElementById("altText");
// altText.innerHTML = "Text";

function ImageHandler(element) {
  // console.log(element.src);
  targetedImage.src = element.src;
  altText.innerHTML = element.alt;
}

function showImage(element) {
  // console.log(element.type);
  altText.innerHTML = "Button Clicked";
}
