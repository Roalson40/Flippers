//jQuery time

let number1 = 0;
let number2 = 0;
let number3 = 0;
let number4 = 0;
let number5 = 0;
let number6 = 0;
let level = 0;
let age = 0;
let num = 20;


let checkbox1 = document.getElementById("1");
let checkbox2 = document.getElementById("2");
let checkbox3 = document.getElementById("3");
let checkbox4 = document.getElementById("4");
let checkbox5 = document.getElementById("5");
let checks = [];
checks.push(checkbox1)
checks.push(checkbox2)
checks.push(checkbox3)
checks.push(checkbox4)
checks.push(checkbox5)

let symbol1 = "Number of flips : - 1.00";
let eye1 = 0;
let fieldset3symbol = document.getElementById('fieldset3-symbol');
let fieldset3eye = document.getElementById('fieldset3-eye');


document.getElementById('next').onclick = () => next();
document.getElementById('jump').onclick = () => jump();
document.getElementById('start').onclick = () => start1();
document.getElementById('stop1').onclick = () => stop1();
document.getElementById('continue1').onclick = () => continue1();
document.getElementById('continue2').onclick = () => continue2();
document.getElementById('flip').onclick = () => flip();
document.getElementById('exit').onclick = () => exit();


let counterVal = 0;
let timeout=300;
let countdownTimer;
let plate = document.getElementById("plate");
let plate1 = document.getElementById("plate1");
let plate2 = document.getElementById("plate2");
let plate3 = document.getElementById("plate3");
let plate4 = document.getElementById("plate4");
let plate5 = document.getElementById("plate5");

document.getElementById('nav').style.display = 'none';
document.getElementById('fieldset1').style.display = 'none';

function flip() {
  document.getElementById('head').style.display = 'none';
  document.getElementById('teach').style.display = 'block';
}

function exit() {
  document.getElementById('head').style.display = 'block';
  document.getElementById('teach').style.display = 'none';
}

function fieldsome(){
  document.getElementById("fieldset3").style.display = 'none';
  document.getElementById("fieldset4").style.display = 'none';
  document.getElementById("fieldset5").style.display = 'none';
  document.getElementById("fieldset6").style.display = 'none';
  document.getElementById("fieldset7").style.display = 'none';
  document.getElementById("fieldset8").style.display = 'none';
  document.getElementById("fieldset9").style.display = 'none';
  document.getElementById("fieldset10").style.display = 'none';
}

function start1(){
  if (localStorage.key(level) === null){
    document.getElementById('head').style.display = 'none';
    document.getElementById('nav').style.display = 'block';
    document.getElementById('fieldset1').style.display = 'block';
    document.getElementById('fieldset2').style.display = 'none';
    fieldsome();
    timeout = 300;
    level = 0;
    document.getElementById('level').innerHTML = 'Level : ' + level;
    resetCounter();
    clearInterval(countdownTimer);
    refreshTime0();
  }
  else{
    readLevel();
    document.getElementById('head').style.display = 'none';
    document.getElementById('nav').style.display = 'block';
    document.getElementById('fieldset2').style.display = 'block';
    document.getElementById('fieldset1').style.display = 'none';
    document.getElementById('jump').style.display = 'none';
    document.getElementById('continue2').style.display = 'none';
    fieldsome();
    timeout = 300;
    resetCounter();
    clearInterval(countdownTimer);
    refreshTime0();
  }
}

function restart0(){
  fieldsome();
  document.getElementById('fieldset2').style.display = 'none';
  document.getElementById('fieldset1').style.display = 'block';
  timeout = 300;
  level = 0;
  document.getElementById('level').innerHTML = 'Level : ' + level;
  resetCounter();
  clearInterval(countdownTimer);
  refreshTime0();
}

function quit(){
  fieldsome();
  document.getElementById('nav').style.display = 'none';
  document.getElementById('fieldset1').style.display = 'none';
  document.getElementById('fieldset2').style.display = 'none';
  document.getElementById('head').style.display = 'block';
  saveLevel();
}

function next0(){
  document.getElementById('fieldset1').style.display = 'none';
  document.getElementById('fieldset2').style.display = 'block';
  document.getElementById('jump').style.display = 'none';
  document.getElementById('continue2').style.display = 'none';
}

function next1(){
  document.getElementById('fieldset4').style.display = 'none';
  document.getElementById('fieldset3').style.display = 'block';
}

function next2(){
  document.getElementById('fieldset5').style.display = 'none';
  document.getElementById('fieldset3').style.display = 'block';
}

function next3(){
  document.getElementById('fieldset6').style.display = 'none';
  document.getElementById('fieldset3').style.display = 'block';
}

function next4(){
  document.getElementById('fieldset7').style.display = 'none';
  document.getElementById('fieldset3').style.display = 'block';
}

function next5(){
  document.getElementById('fieldset8').style.display = 'none';
  document.getElementById('fieldset3').style.display = 'block';
}

function next6(){
  document.getElementById('fieldset9').style.display = 'none';
  document.getElementById('fieldset3').style.display = 'block';
}

function selectCheckOne(obj){
  if(obj.checked){
    for( let i=0;i<checks.length;i++){
      checks[i].checked=false;
    }
    obj.checked=true;
  }else{
    for( let i=0;i<checks.length;i++){
      checks[i].checked=false;
    }
  }
  let button = document.getElementById("next")
  button.style.display = "block";
}

function uncheck(){
  let box = document.getElementById("1");
  let box2 = document.getElementById("2");
  let box3 = document.getElementById("3");
  let box4 = document.getElementById("4");
  let box5 = document.getElementById("5");
  box.checked = false;
  box2.checked = false;
  box3.checked = false;
  box4.checked = false;
  box5.checked = false;
}

function incrementClick0() {

  updateDisplay0(counterVal+=10);

}

function decrement(){

  updateDisplay0(counterVal-=10);

}

function resetCounter() {
  counterVal = 0;
  updateDisplay0(counterVal);
}

function updateDisplay0(val) {
  document.getElementById("counter-label").innerHTML = "Score : " + val;
}

function countdown0(){
  if (level === 2){
    document.getElementById('fieldset2').style.display = 'none';
    document.getElementById('fieldset4').style.display = 'block';
  }
  if (level === 3){
    document.getElementById('fieldset2').style.display = 'none';
    document.getElementById('fieldset5').style.display = 'block';
  }
  if (level === 4){
    document.getElementById('fieldset2').style.display = 'none';
    document.getElementById('fieldset6').style.display = 'block';
  }
  if (level === 7){
    document.getElementById('fieldset2').style.display = 'none';
    document.getElementById('fieldset7').style.display = 'block';
  }
  if (level === 8){
    document.getElementById('fieldset2').style.display = 'none';
    document.getElementById('fieldset8').style.display = 'block';
  }
  if (level === 9){
    document.getElementById('fieldset2').style.display = 'none';
    document.getElementById('fieldset9').style.display = 'block';
  }
  if (level ===0 || level === 1 || level === 5 || level === 6){
    document.getElementById('fieldset2').style.display = 'none';
    document.getElementById('fieldset3').style.display = 'block';
  }
  countdown();
  change();
}

function countdown(){
  countdownTimer = setInterval(function(){
    if (timeout>0){
      timeout--;
      refreshTime0();
    }
    else if (timeout<=0){
      destroy0();
    }
  }, 1000);
}

function stop(){
  clearTimeout(countdownTimer);
}

function destroy0(){
  if (level <= 2 || level === 5 || level === 6 || level === 7){
    countdownForFlippers2(3);
    timeout=0;
    clearInterval(countdownTimer);
    refreshTime0();
  }
  if (level === 3 || level === 4 || level === 8 || level === 9){
    if (age <= 40){
      countdownForFlippers2(3);
      timeout=0;
      clearInterval(countdownTimer);
      refreshTime0();
    }
    if (age >=41){
      countdownForFlippers3(5);
      timeout=300;
      clearInterval(countdownTimer);
      refreshTime0();
      resetCounter();
      document.getElementById('level').innerHTML = 'Level : ' + level;
      document.getElementById('jump').style.display = 'inline-flex';
      document.getElementById('continue2').style.display = 'inline-flex';
    }
  }
}

function jump(){
  level = 5;
  document.getElementById('fieldset2').style.display = 'none';
  document.getElementById('fieldset3').style.display = 'block';
  document.getElementById('level').innerHTML = 'Level : ' + level;
  symbol1="Number of flips : + 1.00";
  eye1 = "Which eye : right eye";
  document.getElementById('fieldset3-symbol').innerHTML=symbol1;
  document.getElementById('fieldset3-eye').innerHTML=eye1;
  countdown();
}

function continue2(){
  document.getElementById('fieldset2').style.display = 'none';
  countdown();
  if (level === 0){
    document.getElementById('fieldset3').style.display = 'block';
    symbol1="Number of flips : + 1.00";
    eye1 = "Which eye : both eyes";
    document.getElementById('fieldset3-symbol').innerHTML=symbol1;
    document.getElementById('fieldset3-eye').innerHTML=eye1;
  }
  else if (level === 1){
    document.getElementById('fieldset3').style.display = 'block';
    symbol1="Number of flips : + 1.50";
    eye1 = "Which eye : both eyes";
    document.getElementById('fieldset3-symbol').innerHTML=symbol1;
    document.getElementById('fieldset3-eye').innerHTML=eye1;
  }
  else if (level === 2){
    document.getElementById('fieldset4').style.display = 'block';
    symbol1="Number of flips : + 2.00";
    eye1 = "Which eye : both eyes";
    document.getElementById('fieldset3-symbol').innerHTML=symbol1;
    document.getElementById('fieldset3-eye').innerHTML=eye1;
  }
  else if (level === 3){
    document.getElementById('fieldset5').style.display = 'block';
    symbol1="Number of flips : + 2.50";
    eye1 = "Which eye : both eyes";
    document.getElementById('fieldset3-symbol').innerHTML=symbol1;
    document.getElementById('fieldset3-eye').innerHTML=eye1;
  }
  else if (level === 4){
    document.getElementById('fieldset6').style.display = 'block';
    symbol1="Number of flips : + 3.00";
    eye1 = "Which eye : both eyes";
    document.getElementById('fieldset3-symbol').innerHTML=symbol1;
    document.getElementById('fieldset3-eye').innerHTML=eye1;
  }
  else if (level === 5){
    document.getElementById('fieldset3').style.display = 'block';
    symbol1="Number of flips : + 1.00";
    eye1 = "Which eye : right eye";
    document.getElementById('fieldset3-symbol').innerHTML=symbol1;
    document.getElementById('fieldset3-eye').innerHTML=eye1;
  }
  else if (level === 6){
    document.getElementById('fieldset3').style.display = 'block';
    symbol1="Number of flips : + 1.50";
    eye1 = "Which eye : right eye";
    document.getElementById('fieldset3-symbol').innerHTML=symbol1;
    document.getElementById('fieldset3-eye').innerHTML=eye1;
  }
  else if (level === 7){
    document.getElementById('fieldset7').style.display = 'block';
    symbol1="Number of flips : + 2.00";
    eye1 = "Which eye : right eye";
    document.getElementById('fieldset3-symbol').innerHTML=symbol1;
    document.getElementById('fieldset3-eye').innerHTML=eye1;
  }
  else if (level === 8){
    document.getElementById('fieldset8').style.display = 'block';
    symbol1="Number of flips : + 2.50";
    eye1 = "Which eye : right eye";
    document.getElementById('fieldset3-symbol').innerHTML=symbol1;
    document.getElementById('fieldset3-eye').innerHTML=eye1;
  }
  else if (level === 9){
    document.getElementById('fieldset9').style.display = 'block';
    symbol1="Number of flips : + 3.00";
    eye1 = "Which eye : right eye";
    document.getElementById('fieldset3-symbol').innerHTML=symbol1;
    document.getElementById('fieldset3-eye').innerHTML=eye1;
  }
}

function refreshTime0(){
  document.getElementById('time').innerHTML="Time : "+timeout;
}

function plus0(){
  if (timeout<600){
    timeout+=60;
    refreshTime0();
  }
}

function minus0(){
  if (timeout>0){
    timeout-=60;
    refreshTime0();
  }
}

function fieldset4old(){
  age = 15;
  next1();
}

function fieldset4old2(){
  age = 38;
  next1();
}

function fieldset5old(){
  age = 15;
  next2();
}

function fieldset5old2(){
  age = 30;
  next2();
}

function fieldset5old3(){
  age = 60;
  next2();
}

function fieldset6old(){
  age = 11;
  next3();
}

function fieldset6old2(){
  age = 25;
  next3();
}

function fieldset6old3(){
  age = 35;
  next3();
}

function fieldset6old4(){
  age = 60;
  next3();
}

function fieldset7old(){
  age = 11;
  next4();
}

function fieldset7old2(){
  age = 50;
  next4();
}

function fieldset8old(){
  age = 14;
  next5();
}

function fieldset8old2(){
  age = 27;
  next5();
}

function fieldset8old3(){
  age = 70;
  next5();
}

function fieldset9old(){
  age = 14;
  next6();
}

function fieldset9old2(){
  age = 27;
  next6();
}

function fieldset9old3(){
  age = 39;
  next6();
}

function fieldset9old4(){
  age = 60;
  next6();
}

function stop1() {
  document.getElementById('fieldset10').style.display = 'none';
  document.getElementById('head').style.display = 'block';
  document.getElementById('nav').style.display = 'none';
  saveLevel();
}

function continue1(){
  if (age >= 41){
    document.getElementById('fieldset10').style.display = 'none';
    document.getElementById('continue2').style.display = 'inline-flex';
    document.getElementById('fieldset2').style.display = 'block';
  }
  else{
    document.getElementById('fieldset10').style.display = 'none';
    document.getElementById('continue2').style.display = 'inline-flex';
    document.getElementById('fieldset2').style.display = 'block';
    document.getElementById('jump').style.display = 'none';
  }
  timeout = 300;
  refreshTime0();
  resetCounter();
}

function countdownForFlippers(time){
  plate.style.display = "inline";
  document.getElementById('fieldset3').style.display = 'none';
  let timerForFlippers = setInterval(function () {
    if (time <= 3 && time > 1.5) {
      let code = level - 1;
      plate.innerHTML = "Congratulations, you passed level " + code;
      time--;
    } else if (time <= 1.5 && time > 0) {
      plate.innerHTML = "Level " + level + " will be " + time + " seconds to show";
      time--;
    } else if (time <= 0) {
      clearInterval(timerForFlippers);
      if (level < 2) {
        document.getElementById('fieldset3').style.display = 'block';
      }
      change();
      plate.innerHTML = "";
      plate.style.display = "none";
    }
  },1000)
}

function countdownForFlippers1(time){
  plate1.style.display = "inline";
  document.getElementById('fieldset3').style.display = 'none';
  let timerForFlippers1 = setInterval(function () {
    if (time<=6 && time>4){
      plate1.innerHTML="Congratulations, you passed level 9";
    }
    else if (time<=4 && time>2){
      plate1.innerHTML="You already finish all levels";
      time--;
    }
    else if (time<=2 && time>0){
      plate1.innerHTML="Good Job!!!!!!!!!!!";
      time--;
    }
    else if (time<=0){
      clearInterval(timerForFlippers1);
      plate1.style.display= "";
      plate1.style.display="none";
      fieldsome();
      document.getElementById('fieldset1').style.display = 'none';
      document.getElementById('fieldset2').style.display = 'none';
      document.getElementById('head').style.display = 'block';
      document.getElementById('nav').style.display = 'none';
    }
  },1000);
}

function countdownForFlippers2(time){
  plate2.style.display = "inline";
  let timerForFlippers2 = setInterval(function () {
    if (time<=3 && time>1.5){
      fieldsome();
      document.getElementById('fieldset1').style.display = 'none';
      document.getElementById('fieldset2').style.display = 'none';
      plate2.innerHTML="Daily training finished";
      time--;
    }
    else if (time<=1.5 && time>0){
      plate2.innerHTML="Try again";
      time--;
    }
    else if (time<=0){
      clearInterval(timerForFlippers2);
      plate2.innerHTML = "";
      plate2.style.display ="none";
      document.getElementById('fieldset10').style.display = 'block';
    }
  },1000);
}

function countdownForFlippers3(time){
  plate3.style.display = "inline";
  let timerForFlippers3 = setInterval(function () {
    if (time<=5 && time>3.5){
      fieldsome();
      document.getElementById('fieldset1').style.display = 'none';
      plate3.innerHTML="Daily training finished";
      time--;
    }
    else if (time<=3.5 && time>2){
      plate3.innerHTML="Time is over";
      time--;
    }
    else if (time<=2 && time>0){
      plate3.innerHTML="You can choose to level 5 or continue";
      time--;
    }
    else if (time<=0){
      clearInterval(timerForFlippers3);
      plate3.innerHTML = "";
      plate3.style.display="none";
      fieldsome();
      document.getElementById('fieldset10').style.display = 'block';
    }
  },1000);
}

function countdownForFlippers4(time){
  plate4.style.display = "inline";
  let timerForFlippers4 = setInterval(function () {
    if (time<=2 && time>0){
      plate4.innerHTML="You need choose one!";
      time--;
    }
    else if (time<=0){
      clearInterval(timerForFlippers4);
      plate4.style.display="none";
    }
  },1000);
}

function countdownForFlippers5(time){
  plate5.style.display = "inline";
  document.getElementById('fieldset3').style.display = 'none';
  let timerForFlippers5 = setInterval(function () {
    if (time<=2 && time>0){
      plate5.innerHTML="Change the eye!";
      time--;
    }
    else if (time<=0){
      clearInterval(timerForFlippers5);
      plate5.style.display="none";
      document.getElementById('fieldset3').style.display = 'block';
      eye1 = "Which eye : left eye";
      fieldset3eye.innerHTML = eye1;
    }
  },1000);
}

function change(){
  if (level === 0){
    symbol1="Number of flips : + 1.00";
    document.getElementById('fieldset3-symbol').innerHTML=symbol1;
  }
  else if (level === 1){
    symbol1="Number of flips : + 1.50";
    document.getElementById('fieldset3-symbol').innerHTML=symbol1;
  }
  else if (level === 2){
    symbol1="Number of flips : + 2.00";
    document.getElementById('fieldset3-symbol').innerHTML=symbol1;
    document.getElementById('fieldset4').style.display = 'block';
  }
  else if (level === 3){
    symbol1="Number of flips : + 2.50";
    document.getElementById('fieldset3-symbol').innerHTML=symbol1;
    document.getElementById('fieldset5').style.display = 'block';
  }
  else if (level === 4){
    symbol1="Number of flips : + 3.00";
    document.getElementById('fieldset3-symbol').innerHTML=symbol1;
    document.getElementById('fieldset6').style.display = 'block';
  }
  else if (level === 5){
    symbol1="Number of flips : + 1.00";
    eye1 = "Which eye : right eye";
    document.getElementById('fieldset3-symbol').innerHTML=symbol1;
    document.getElementById('fieldset3-eye').innerHTML=eye1;
    document.getElementById('fieldset3').style.display = 'block';
  }
  else if (level === 6){
    symbol1="Number of flips : + 1.50";
    eye1 = "Which eye : right eye";
    document.getElementById('fieldset3-symbol').innerHTML=symbol1;
    document.getElementById('fieldset3-eye').innerHTML=eye1;
    document.getElementById('fieldset3').style.display = 'block';
  }
  else if (level === 7){
    symbol1="Number of flips : + 2.00";
    eye1 = "Which eye : right eye";
    document.getElementById('fieldset3-symbol').innerHTML=symbol1;
    document.getElementById('fieldset3-eye').innerHTML=eye1;
    document.getElementById('fieldset7').style.display = 'block';
  }
  else if (level === 8){
    symbol1="Number of flips : + 2.50";
    eye1 = "Which eye : right eye";
    document.getElementById('fieldset3-symbol').innerHTML=symbol1;
    document.getElementById('fieldset3-eye').innerHTML=eye1;
    document.getElementById('fieldset8').style.display = 'block';
  }
  else if (level === 9){
    symbol1="Number of flips : + 3.00";
    eye1 = "Which eye : right eye";
    document.getElementById('fieldset3-symbol').innerHTML=symbol1;
    document.getElementById('fieldset3-eye').innerHTML=eye1;
    document.getElementById('fieldset9').style.display = 'block';
  }
}

window.onload= function (){
  document.getElementById('fieldset3-symbol').innerHTML = symbol1;

  let oPtxt = document.getElementById("title");

  let oPtxt1 = document.getElementById('title1');

  let oBtn1 = document.getElementById("Btn1");

  let oBtn2 = document.getElementById("Btn2");

  oBtn1.onclick = function(){

    num++;

    oPtxt.style.fontSize=num+'px';

    oPtxt1.style.fontSize=num+'px';

  };

  oBtn2.onclick = function(){

    num--;

    oPtxt.style.fontSize=num+'px';

    oPtxt1.style.fontSize=num+'px';
  };

  words();
}

let a="abcdefghijklmnopqrstuvwxyz"
let word;
let word1;
let word2;
let word3;
let word4;
let word5;


function recursion() {
  number1=Math.floor(Math.random() * 26);
  number2=Math.floor(Math.random() * 26);
  number3=Math.floor(Math.random() * 26);
  number4=Math.floor(Math.random() * 26);
  number5=Math.floor(Math.random() * 26);
  number6=Math.floor(Math.random() * 5);
  if (number1!==number2 && number1!== number3 && number1!== number4 && number1!== number5 &&
    number2!==number3 && number2!==number4 && number2!== number5 && number3!==number4 && number3!== number5 && number4!== number5){
    console.log(number1,number2,number3,number4,number5);
  }
  else {
    recursion();
  }
}

function next() {
  if (checkbox1.checked === false && checkbox2.checked === false && checkbox3.checked === false
    && checkbox4.checked === false && checkbox5.checked === false){
    countdownForFlippers4(2);
  }
  else {
    if (number6 === 0){
      if (checks[0].checked){
        incrementClick0();
      }
      else {
        decrement();
      }
    }
    else if (number6 === 1){
      if (checks[1].checked){
        incrementClick0();
      }
      else {
        decrement();
      }
    }
    else if (number6 === 2){
      if (checks[2].checked){
        incrementClick0();
      }
      else {
        decrement();
      }
    }
    else  if (number6 === 3){
      if (checks[3].checked){
        incrementClick0();
      }
      else {
        decrement();
      }
    }
    else  if (number6 === 4){
      if (checks[4].checked){
        incrementClick0();
      }
      else {
        decrement();
      }
    }
    uncheck();
    words();
    // level 0
    if (counterVal === 120 && level === 0){
      level = 1;
      countdownForFlippers(3);
      document.getElementById('level').innerHTML = 'Level : ' + level;
      resetCounter();
    }
    // level 1
    if (counterVal === 120 && level === 1){
      level = 2;
      countdownForFlippers(3);
      document.getElementById('level').innerHTML = 'Level : ' + level;
      resetCounter();
    }
    // level 2
    if (counterVal === 120 && level === 2 && age <= 30){
      level = 3;
      countdownForFlippers(3);
      document.getElementById('level').innerHTML = 'Level : ' + level;
      resetCounter();
    }
    if (counterVal === 100 && level === 2 && age >= 31){
      level = 3;
      countdownForFlippers(3);
      document.getElementById('level').innerHTML = 'Level : ' + level;
      resetCounter();
    }
    // level 3
    if (counterVal === 120 && level === 3 && age <= 20){
      level = 4;
      countdownForFlippers(3);
      document.getElementById('level').innerHTML = 'Level : ' + level;
      resetCounter();
    }
    if (counterVal === 100 && level === 3 && 21 <= age && age <= 40){
      level = 4;
      countdownForFlippers(3);
      document.getElementById('level').innerHTML = 'Level : ' + level;
      resetCounter();
    }
    if (counterVal === 60 && level === 3 && age >= 41){
      level = 4;
      countdownForFlippers(3);
      document.getElementById('level').innerHTML = 'Level : ' + level;
      resetCounter();
    }
    // level 4
    if (counterVal === 120 && level === 4 && age <= 20){
      level = 5;
      countdownForFlippers(3);
      document.getElementById('level').innerHTML = 'Level : ' + level;
      resetCounter();
    }
    if (counterVal === 100 && level === 4 && 21 <= age && age <= 30){
      level = 5;
      countdownForFlippers(3);
      document.getElementById('level').innerHTML = 'Level : ' + level;
      resetCounter();
    }
    if (counterVal === 80 && level === 4 && 31 <= age && age <= 40){
      level = 5;
      countdownForFlippers(3);
      document.getElementById('level').innerHTML = 'Level : ' + level;
      resetCounter();
    }
    if (counterVal === 60 && level === 4 && age >= 41){
      level = 5;
      countdownForFlippers(3);
      document.getElementById('level').innerHTML = 'Level : ' + level;
      resetCounter();
    }
    // level 5
    if (counterVal === 120 && level === 5 && eye1 === "Which eye : right eye"){
      symbol1="Number of flips : + 1.00";
      fieldset3symbol.innerHTML = symbol1;
      countdownForFlippers5(2);
      document.getElementById('level').innerHTML = 'Level : ' + level;
      resetCounter();
    }
    if (counterVal === 120 && level === 5 && eye1 === "Which eye : left eye"){
      level = 6;
      countdownForFlippers(3);
      document.getElementById('level').innerHTML = 'Level : ' + level;
      resetCounter();
    }
    // level 6
    if (counterVal === 120 && level === 6 && eye1 === "Which eye : right eye"){
      symbol1="Number of flips : + 1.50";
      fieldset3symbol.innerHTML = symbol1;
      countdownForFlippers5(2);
      document.getElementById('level').innerHTML = 'Level : ' + level;
      resetCounter();
    }
    if (counterVal === 120 && level === 6 && eye1 === "Which eye : left eye"){
      level = 7;
      countdownForFlippers(3);
      document.getElementById('level').innerHTML = 'Level : ' + level;
      resetCounter();
    }
    // level 7
    if (counterVal === 120 && level === 7 && age <= 30 && eye1 === "Which eye : right eye"){
      symbol1="Number of flips : + 2.00";
      fieldset3symbol.innerHTML = symbol1;
      countdownForFlippers5(2);
      document.getElementById('level').innerHTML = 'Level : ' + level;
      resetCounter();
    }
    if (counterVal === 120 && level === 7 && age <= 30 && eye1 === "Which eye : left eye"){
      level = 8;
      countdownForFlippers(3);
      document.getElementById('level').innerHTML = 'Level : ' + level;
      resetCounter();
    }
    if (counterVal === 100 && level === 7 && age >= 31 && eye1 === "Which eye : right eye"){
      symbol1="Number of flips : + 2.00";
      fieldset3symbol.innerHTML = symbol1;
      countdownForFlippers5(2);
      document.getElementById('level').innerHTML = 'Level : ' + level;
      resetCounter();
    }
    if (counterVal === 100 && level === 7 && age >= 31 && eye1 === "Which eye : left eye"){
      level = 8;
      countdownForFlippers(3);
      document.getElementById('level').innerHTML = 'Level : ' + level;
      resetCounter();
    }
    // level 8
    if (counterVal === 120 && level === 8 && age <= 20 && eye1 === "Which eye : right eye"){
      symbol1="Number of flips : + 2.50";
      fieldset3symbol.innerHTML = symbol1;
      countdownForFlippers5(2);
      document.getElementById('level').innerHTML = 'Level : ' + level;
      resetCounter();
    }
    if (counterVal === 120 && level === 8 && age <= 20 && eye1 === "Which eye : left eye") {
      level = 9;
      countdownForFlippers(3);
      document.getElementById('level').innerHTML = 'Level : ' + level;
      resetCounter();
    }
    if (counterVal === 100 && level === 8 && 21 <= age && age <= 40 && eye1 === "Which eye : right eye"){
      symbol1="Number of flips : + 2.50";
      fieldset3symbol.innerHTML = symbol1;
      countdownForFlippers5(2);
      document.getElementById('level').innerHTML = 'Level : ' + level;
      resetCounter();
    }
    if (counterVal === 100 && level === 8 && 21 <= age && age <= 40 && eye1 === "Which eye : left eye"){
      level = 9;
      countdownForFlippers(3);
      document.getElementById('level').innerHTML = 'Level : ' + level;
      resetCounter();
    }
    if (counterVal === 60 && level === 8 && age >= 41 && eye1 === "Which eye : right eye"){
      symbol1="Number of flips : + 2.50";
      fieldset3symbol.innerHTML = symbol1;
      countdownForFlippers5(2);
      document.getElementById('level').innerHTML = 'Level : ' + level;
      resetCounter();
    }
    if (counterVal === 60 && level === 8 && age >= 41 && eye1 === "Which eye : left eye"){
      level = 9;
      countdownForFlippers(3);
      document.getElementById('level').innerHTML = 'Level : ' + level;
      resetCounter();
    }
    // level 9
    if (counterVal === 120 && level === 9 && age <= 20 && eye1 === "Which eye : right eye"){
      symbol1="Number of flips : + 3.00";
      fieldset3symbol.innerHTML = symbol1;
      countdownForFlippers5(2);
      document.getElementById('level').innerHTML = 'Level : ' + level;
      resetCounter();
    }
    if (counterVal === 120 && level === 9 && age <= 20 && eye1 === "Which eye : left eye"){
      stop();
      countdownForFlippers1(6);
    }
    if (counterVal === 100 && level === 9 && 21 <= age && age <= 30 && eye1 === "Which eye : right eye"){
      symbol1="Number of flips : + 3.00";
      fieldset3symbol.innerHTML = symbol1;
      countdownForFlippers5(2);
      document.getElementById('level').innerHTML = 'Level : ' + level;
      resetCounter();
    }
    if (counterVal === 100 && level === 9 && 21 <= age && age <= 30 && eye1 === "Which eye : left eye"){
      stop();
      countdownForFlippers1(6);
    }
    if (counterVal === 80 && level === 9 && 31 <= age && age <= 40 && eye1 === "Which eye : right eye"){
      symbol1="Number of flips : + 3.00";
      fieldset3symbol.innerHTML = symbol1;
      countdownForFlippers5(2);
      document.getElementById('level').innerHTML = 'Level : ' + level;
      resetCounter();
    }
    if (counterVal === 80 && level === 9 && 31 <= age && age <= 40 && eye1 === "Which eye : left eye"){
      stop();
      countdownForFlippers1(6);
    }
    if (counterVal === 60 && level === 9 && age >= 41 && eye1 === "Which eye : right eye"){
      symbol1="Number of flips : + 3.00";
      fieldset3symbol.innerHTML = symbol1;
      countdownForFlippers5(2);
      document.getElementById('level').innerHTML = 'Level : ' + level;
      resetCounter();
    }
    if (counterVal === 60 && level === 9 && age >= 41 && eye1 === "Which eye : left eye"){
      stop();
      countdownForFlippers1(6);
    }
  }

}

function words() {
  symbol();
  document.getElementById('next').style.display = 'none';
  recursion();
  for (let i = 0; i < a.length; i++) {
    let b = a[number1];
    let c = a[number2];
    let d = a[number3];
    let e = a[number4];
    let f = a[number5];
    console.log(b,c,d,e,f);
    word = b+c+d+e+f;
    document.getElementById('title1').innerHTML = word;

    if (number6 === 0){
      word1 = word;
      word2 = c+b+f+e+d;
      word3 = f+e+d+b+c;
      word4 = e+d+b+c+f;
      word5 = d+f+b+c+e;
    }
    else if (number6 === 1){
      word2 = word;
      word1 = b+c+d+f+e;
      word3 = f+e+d+b+c;
      word4 = e+d+b+c+f;
      word5 = d+f+b+c+e;
    }else if (number6 === 2){
      word3 = word;
      word1 = b+c+d+f+e;
      word2 = c+b+f+e+d;
      word4 = e+d+b+c+f;
      word5 = d+f+b+c+e;
    }else if (number6 === 3){
      word4 = word;
      word1 = b+c+d+f+e;
      word2 = c+b+f+e+d;
      word3 = f+e+d+b+c;
      word5 = d+f+b+c+e;
    }else if (number6 === 4){
      word5 = word;
      word1 = b+c+d+f+e;
      word2 = c+b+f+e+d;
      word3 = f+e+d+b+c;
      word4 = e+d+b+c+f;
    }

    document.getElementById('word1').innerHTML = word1;
    document.getElementById('word2').innerHTML = word2;
    document.getElementById('word3').innerHTML = word3;
    document.getElementById('word4').innerHTML = word4;
    document.getElementById('word5').innerHTML = word5;
  }
}

function symbol() {
  if (level === 0) {
    if (symbol1 === "Number of flips : + 1.00") {
      symbol1 = "Number of flips : - 1.00"
      fieldset3symbol.innerHTML = symbol1;
    } else if (symbol1 === "Number of flips : - 1.00") {
      symbol1 = "Number of flips : + 1.00"
      fieldset3symbol.innerHTML = symbol1;
    }
  } else if (level === 1) {
    if (symbol1 === "Number of flips : - 1.50") {
      symbol1 = "Number of flips : + 1.50";
      fieldset3symbol.innerHTML = symbol1;
    } else if (symbol1 === "Number of flips : + 1.50") {
      symbol1 = "Number of flips : - 1.50"
      fieldset3symbol.innerHTML = symbol1;
    }else if (symbol1 === "Number of flips : - 1.50") {
      symbol1 = "Number of flips : + 1.50"
      fieldset3symbol.innerHTML = symbol1;
    }else if (symbol1 === "Number of flips : + 1.50") {
      symbol1 = "Number of flips : - 1.50"
      fieldset3symbol.innerHTML = symbol1;
    }
  } else if (level === 2) {
    if (symbol1 === "Number of flips : - 2.00" ) {
      symbol1 = "Number of flips : + 2.00";
      fieldset3symbol.innerHTML = symbol1;

    } else if (symbol1 === "Number of flips : + 2.00") {
      symbol1 = "Number of flips : - 2.00"
      fieldset3symbol.innerHTML = symbol1;
    }
  } else if (level === 3) {
    if (symbol1 === "Number of flips : - 2.50") {
      symbol1 = "Number of flips : + 2.50"
      fieldset3symbol.innerHTML = symbol1;
    } else if (symbol1 === "Number of flips : + 2.50") {
      symbol1 = "Number of flips : - 2.50"
      fieldset3symbol.innerHTML = symbol1;
    }
  } else if (level === 4) {
    if (symbol1 === "Number of flips : - 3.00") {
      symbol1 = "Number of flips : + 3.00"
      fieldset3symbol.innerHTML = symbol1;
    } else if (symbol1 === "Number of flips : + 3.00") {
      symbol1 = "Number of flips : - 3.00"
      fieldset3symbol.innerHTML = symbol1;
    }
  }
  else if (level === 5) {
    if (symbol1 === "Number of flips : + 1.00" && eye1 === "Which eye : right eye") {
      eye1 = "Which eye : right eye";
      symbol1 = "Number of flips : - 1.00"
      fieldset3symbol.innerHTML = symbol1;
      fieldset3eye.innerHTML = eye1;
    } else if (symbol1 === "Number of flips : - 1.00" && eye1 === "Which eye : right eye") {
      symbol1 = "Number of flips : + 1.00"
      eye1 = "Which eye : right eye"
      fieldset3symbol.innerHTML = symbol1;
      fieldset3eye.innerHTML = eye1;
    }if (symbol1 === "Number of flips : + 1.00" && eye1 === "Which eye : left eye") {
      symbol1 = "Number of flips : - 1.00"
      eye1 = "Which eye : left eye"
      fieldset3symbol.innerHTML = symbol1;
      fieldset3eye.innerHTML = eye1;
    }else if (symbol1 === "Number of flips : - 1.00" && eye1 === "Which eye : left eye") {
      symbol1 = "Number of flips : + 1.00"
      eye1 = "Which eye : left eye"
      fieldset3symbol.innerHTML = symbol1;
      fieldset3eye.innerHTML = eye1;
    }
  }
  else if (level === 6) {
    if (symbol1 === "Number of flips : + 1.50" && eye1 === "Which eye : right eye") {
      eye1 = "Which eye : right eye";
      symbol1 = "Number of flips : - 1.50"
      fieldset3symbol.innerHTML = symbol1;
      fieldset3eye.innerHTML = eye1;
    } else if (symbol1 === "Number of flips : - 1.50" && eye1 === "Which eye : right eye") {
      symbol1 = "Number of flips : + 1.50"
      eye1 = "Which eye : right eye"
      fieldset3symbol.innerHTML = symbol1;
      fieldset3eye.innerHTML = eye1;
    } if (symbol1 === "Number of flips : + 1.50" && eye1 === "Which eye : left eye") {
      symbol1 = "Number of flips : - 1.50"
      eye1 = "Which eye : left eye"
      fieldset3symbol.innerHTML = symbol1;
      fieldset3eye.innerHTML = eye1;
    } else if (symbol1 === "Number of flips : - 1.50" && eye1 === "Which eye : left eye") {
      symbol1 = "Number of flips : + 1.50"
      eye1 = "Which eye : left eye"
      fieldset3symbol.innerHTML = symbol1;
      fieldset3eye.innerHTML = eye1;
    }
  }
  else if (level === 7) {
    if (symbol1 === "Number of flips : + 2.00" && eye1 === "Which eye : right eye") {
      eye1 = "Which eye : right eye";
      symbol1 = "Number of flips : - 2.00"
      fieldset3symbol.innerHTML = symbol1;
      fieldset3eye.innerHTML = eye1;
    } else if (symbol1 === "Number of flips : - 2.00" && eye1 === "Which eye : right eye") {
      symbol1 = "Number of flips : + 2.00"
      eye1 = "Which eye : right eye"
      fieldset3symbol.innerHTML = symbol1;
      fieldset3eye.innerHTML = eye1;
    } if (symbol1 === "Number of flips : + 2.00" && eye1 === "Which eye : left eye") {
      symbol1 = "Number of flips : - 2.00"
      eye1 = "Which eye : left eye"
      fieldset3symbol.innerHTML = symbol1;
      fieldset3eye.innerHTML = eye1;
    } else if (symbol1 === "Number of flips : - 2.00" && eye1 === "Which eye : left eye") {
      symbol1 = "Number of flips : + 2.00"
      eye1 = "Which eye : left eye"
      fieldset3symbol.innerHTML = symbol1;
      fieldset3eye.innerHTML = eye1;
    }
  }
  else if (level === 8) {
    if (symbol1 === "Number of flips : + 2.50" && eye1 === "Which eye : right eye") {
      eye1 = "Which eye : right eye";
      symbol1 = "Number of flips : - 2.50"
      fieldset3symbol.innerHTML = symbol1;
      fieldset3eye.innerHTML = eye1;
    } else if (symbol1 === "Number of flips : - 2.50" && eye1 === "Which eye : right eye") {
      symbol1 = "Number of flips : + 2.50"
      eye1 = "Which eye : right eye"
      fieldset3symbol.innerHTML = symbol1;
      fieldset3eye.innerHTML = eye1;
    } if (symbol1 === "Number of flips : + 2.50" && eye1 === "Which eye : left eye") {
      symbol1 = "Number of flips : - 2.50"
      eye1 = "Which eye : left eye"
      fieldset3symbol.innerHTML = symbol1;
      fieldset3eye.innerHTML = eye1;
    } else if (symbol1 === "Number of flips : - 2.50" && eye1 === "Which eye : left eye") {
      symbol1 = "Number of flips : + 2.50"
      eye1 = "Which eye : left eye"
      fieldset3symbol.innerHTML = symbol1;
      fieldset3eye.innerHTML = eye1;
    }
  }
  else if (level === 9) {
    if (symbol1 === "Number of flips : + 3.00" && eye1 === "Which eye : right eye") {
      eye1 = "Which eye : right eye";
      symbol1 = "Number of flips : - 3.00"
      fieldset3symbol.innerHTML = symbol1;
      fieldset3eye.innerHTML = eye1;
    } else if (symbol1 === "Number of flips : - 3.00" && eye1 === "Which eye : right eye") {
      symbol1 = "Number of flips : + 3.00"
      eye1 = "Which eye : right eye"
      fieldset3symbol.innerHTML = symbol1;
      fieldset3eye.innerHTML = eye1;
    } if (symbol1 === "Number of flips : + 3.00" && eye1 === "Which eye : left eye") {
      symbol1 = "Number of flips : - 3.00"
      eye1 = "Which eye : left eye"
      fieldset3symbol.innerHTML = symbol1;
      fieldset3eye.innerHTML = eye1;
    } else if (symbol1 === "Number of flips : - 3.00" && eye1 === "Which eye : left eye") {
      symbol1 = "Number of flips : + 3.00"
      eye1 = "Which eye : left eye"
      fieldset3symbol.innerHTML = symbol1;
      fieldset3eye.innerHTML = eye1;
    }
  }
}

function saveLevel(){
  localStorage.setItem("level", level);
  localStorage.setItem("title1", num);
}

function readLevel(){
  document.getElementById("level").innerHTML = 'Level : ' + localStorage.getItem("level");
  num = localStorage.getItem("title1");
  document.getElementById('title1').style.fontSize = num + 'px';
}
