var pics = document.querySelectorAll(".pic");
var lightbox = document.querySelector("#lightbox");
var lightboxImage = document.querySelector("#lightboxImage");

for (var i = 0; i < pics.length; i++) {
  pics[i].onclick = showLightbox; // 이미지 누르면 showLight 함수 실행
}

function showLightbox() {
  var bigLocation = this.getAttribute("data-src"); // 받은 객체의 "data-src" 속성을 가져와
  lightboxImage.setAttribute("src", bigLocation);
  lightbox.style.display = "block";
}

lightbox.onclick = function () {
  lightbox.style.display = "none";
};
