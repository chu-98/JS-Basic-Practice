let count = 0;
let randomNumber = Math.floor(Math.random() * 100 + 1);

function finding() {
  var userNumber = document.querySelector("#try").value;
  if (userNumber >= 1 && userNumber <= 100) {
    if (randomNumber > userNumber) {
      // "Up!!!"
      document.querySelector("#display").innerHTML = "Up!!!";
    } else if (randomNumber < userNumber) {
      // "Down!!!"
      document.querySelector("#display").innerHTML = "Down!!!";
    } else {
      document.querySelector("#display").innerHTML =
        "<span style='color:red'>맞혔습니다!</span>";
    }

    document.querySelector("#try").value = "";
    count++;
    document.querySelector("#counter").innerHTML = "시도 횟수: " + count + "회";
  } else {
    alert("1과 100 사이의 숫자를 입력하세요.");
  }
}
