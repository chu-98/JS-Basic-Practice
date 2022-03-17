let sUnit = document.querySelector("#s-unit");
let tUnit = document.querySelector("#t-unit");
let cToF = true; // 섭씨에서 화씨로 변환 || 초깃값

let source = document.querySelector("#s-value");
let target = document.querySelector("#t-value");

let exchange = document.querySelector("#exchange");
exchange.onclick = exUnit;

source.onkeyup = converter; // 'onkeyup'은 키보드의 키에서 손을 떼자마자 입력하는 이벤트

function exUnit() {
  // s-unit과 t-unit의 위치를 바꾼다
  source.value = "";
  target.value = "";

  if (cToF) {
    cToF = false;
    sUnit.innerHTML = "&#8457;";
    tUnit.innerHTML = "&#8451;";
  } else {
    cToF = true;
    sUnit.innerHTML = "&#8451;";
    tUnit.innerHTML = "&#8457;";
  }
}

function converter() {
  // cToF = true -> 섭씨를 화씨로
  if (cToF) {
    target.value = (source.value * 1.8 + 32).toFixed(2); // 섭씨 -> 화씨
  } else {
    target.value = ((source.value - 32) / 1.8).toFixed(2); // 섭씨 -> 화씨
  }
}
