let imgViewer = document.getElementById("image");
function upDate(previewPic) {
  // console.log(imgViewer);
  imgViewer.style.backgroundImage = `url(${previewPic.src})`;
  imgViewer.innerHTML = previewPic.alt;
}

function unDo() {
  imgViewer.style.backgroundImage = `url("")`;
  imgViewer.innerHTML = "Hover over an image below to display here.";
}
