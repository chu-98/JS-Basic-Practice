let slides = document.querySelectorAll("#container > img"); // 이미지들을 저장한 배열
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");

let current = 0;
showSlide(current); // showSlide() 함수를 실행해 current 위치의 이미지 표시

prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlide(n) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // 모든 이미지를 화면에서 감춤
  }
  slides[n].style.display = "block"; // n번째 이미지를 화면에 표시
}

function prevSlide() {
  if (current > 0) current -= 1;
  else current = slides.length - 1;

  showSlide(current);
}

function nextSlide() {
  if (current < slides.length - 1) current += 1;
  else current = 0;

  showSlide(current);
}
