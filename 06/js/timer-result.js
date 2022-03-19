let startBtn = document.querySelector(".start-btn");
let resetBtn = document.querySelector(".reset-btn");

var min, sec; // 전역 변수 선언
var timer; // timer 변수 선언

startBtn.onclick = startTimer;
resetBtn.onclick = resetTimer;

function startTimer() {
  min = document.querySelector("#startMin").value; // '분'값 가져옴
  if (min == "") min = 0;
  sec = document.querySelector("#startSec").value; // '초'값 가져옴
  if (sec == "") sec = 0;
  timer = setInterval(counterTimer, 1000); // 1초(1000밀리초)마다 counterTimer() 함수 실행
}

function counterTimer() {
  if (sec != 0) {
    sec--;
    document.querySelector("#display").innerHTML =
      min + "분" + sec + "초 남았습니다.";
  } else {
    // '초' 값이 0일 경우 처리할 부분.
    // 분에서 1분을 줄이고 초를 59로 지정 + 분이 0이면 끝
    if (min != 0) {
      min--;
      sec = 59;
    } else {
      // 타이머 끝낼 명령
      document.querySelector("#display").innerHTML = "타이머 종료";
      clearTimer(timer);
    }
  }
}

function resetTimer() {
  document.getElementById("display").innerText = "";
  clearTimer(timer);
}

function clearTimer(t) {
  clearInterval(t);
  document.querySelector("#startMin").value = "";
  document.querySelector("#startSec").value = "";
}
