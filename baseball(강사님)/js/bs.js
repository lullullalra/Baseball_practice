let limitCount = 0;
let count = 0;
let num = new Array(4);
//난이도(상, 중, 하)에 따른 횟수제한
function setLevel(level) {
  alert("시도 횟수 제한 " + level + "회");
  limitCount = level;
  let start = document.getElementById("start");
  start.disabled = false;
}

//start btn(시작 버튼), stop btn(종료 버튼) 처리
function start(flag) {
  if (flag) {
    let play = document.getElementById("play");
    play.style.display = "block";
    registEvent();
    setAdminNum();
  } else {
    play.style.display = "none";
  }
}

//제출 횟수를 카운트 해서 난이도에 따른 횟수제한과 매치시켜서 제출 버튼 막기
function handOut(flag) {
  let strike = document.getElementById("strike");
  let ball = document.getElementById("ball");
  let result = strike.innerHTML + "-" + ball.innerHTML;
  let tried = document.getElementById("tried");
  tried.innerHTML = tried.innerHTML + "<br>" + result;
  if (count == limitCount - 1) {
    alert("Game Over😈");
    let btn = document.getElementById("btn_handout");
    btn.disabled = true;
  }
  if (flag) {
    deleteCard();
  }
  count = count + 1;
}

//선택 숫자 이미지에 클릭한 숫자 값 나오게 하는 로직
// function registEvent() {
//   let imgs = document.getElementsByClassName("selectNum");
//   for (let i = 0; i < imgs.length; i++) {
//     imgs[i].addEventListener("click", function (event) {
//       const tryNums = document.getElementsByName("tryNum");
//       if (tryNums[i].src == "../images/select.png") {
//         tryNums[i].src = "../images" + i + ".png";
//       }
//     });
//   }
//   return num;
// }
function registEvent() {
  let imgs = document.getElementsByClassName("selectNum");
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function (event) {
      let tryNum01 = document.getElementById("tryNum01").src;
      let tryNum02 = document.getElementById("tryNum02").src;
      let tryNum03 = document.getElementById("tryNum03").src;
      let tryNum04 = document.getElementById("tryNum04").src;

      if (tryNum01 == "http://127.0.0.1:5500/images/select.png") {
        document.getElementById("tryNum01").src = "../images/" + i + ".png";
      } else if (tryNum02 == "http://127.0.0.1:5500/images/select.png") {
        document.getElementById("tryNum02").src = "../images/" + i + ".png";
      } else if (tryNum03 == "http://127.0.0.1:5500/images/select.png") {
        document.getElementById("tryNum03").src = "../images/" + i + ".png";
      } else if (tryNum04 == "http://127.0.0.1:5500/images/select.png") {
        document.getElementById("tryNum04").src = "../images/" + i + ".png";
      }
    });
  }
}

function deleteCard() {
  let imgs = document.getElementsByName("try");
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function (event) {
      let tryNum01 = document.getElementById("tryNum01").src;
      let tryNum02 = document.getElementById("tryNum02").src;
      let tryNum03 = document.getElementById("tryNum03").src;
      let tryNum04 = document.getElementById("tryNum04").src;

      if (tryNum01 != "http://127.0.0.1:5500/images/select.png") {
        document.getElementById("tryNum01").src = "../images/select.png";
      } else if (tryNum02 != "http://127.0.0.1:5500/images/select.png") {
        document.getElementById("tryNum02").src = "../images/select.png";
      } else if (tryNum03 != "http://127.0.0.1:5500/images/select.png") {
        document.getElementById("tryNum03").src = "../images/select.png";
      } else if (tryNum04 != "http://127.0.0.1:5500/images/select.png") {
        document.getElementById("tryNum04").src = "../images/select.png";
      }
    });
  }
}

//선택한 숫자에 따라 시도 이미지 변경
function registImg() {
  let num = new registEvent();

  console.log(num[0] + "," + num[1] + "," + num[2] + "," + num[3]);
}

function setAdminNum() {
  const balls = new Array(4);
  for (i = 0; i < 4; i++) {
    balls[i] = Math.floor(Math.random() * 10);
  }
  return balls;
}
