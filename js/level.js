//jQuery time

let number1 = 0;
let number2 = 0;
let number3 = 0;
let number4 = 0;
let number5 = 0;
let number6 = 0;
let level = 0;
let age = 0;

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

let counterVal = 0;
let timeout=0;
let countdownTimer;
let plate = document.getElementById("plate");

function next0(){
  document.getElementById('fieldset1').style.display = 'none';
  document.getElementById('fieldset2').style.display = 'block';
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

function selectCheckOne(obj){
  if(obj.checked){
    for( var i=0;i<checks.length;i++){
      checks[i].checked=false;
    }
    obj.checked=true;
  }else{
    for( var i=0;i<checks.length;i++){
      checks[i].checked=false;
    }
  }
  var button = document.getElementById("next")
  button.style.display = "block";
}


function incrementClick0() {

    updateDisplay0(++counterVal);

}

function resetCounter() {
  counterVal = 0;
  updateDisplay0(counterVal);
}

function updateDisplay0(val) {
  document.getElementById("counter-label").innerHTML = "Score : " + val;
}

function countdown0(){
  document.getElementById('fieldset2').style.display = 'none';
  document.getElementById('fieldset3').style.display = 'block';
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

function destroy0(){
  if (level <= 2 || level === 5 || level === 6){
    alert("daily training finished");
    alert("try again");
    window.location.href = "start.html";
    timeout=0;
    clearInterval(countdownTimer);
    refreshTime0();
    resetCounter();
  }
  else if (level === 3 || level === 4){
    if (age <= 40){
      alert("daily training finished");
      alert("try again");
      window.location.href = "start.html";
      timeout=0;
      clearInterval(countdownTimer);
      refreshTime0();
      resetCounter();
    }
    if (age >=41){
      alert("daily training finished");
      alert("time is over");
      alert("do you want to jump to the level 5")
      timeout=0;
      clearInterval(countdownTimer);
      refreshTime0();
      resetCounter();
      level = 0;
      document.getElementById('level').innerHTML = 'Level : ' + level;
      document.getElementById('fieldset3').style.display = 'none';
      document.getElementById('fieldset2').style.display = 'block';
      document.getElementById('jump').style.display = 'inline-flex';
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
  counterVal =
  countdown();
}

function refreshTime0(){
  document.getElementById('time').innerHTML="Time : "+timeout;
}

  function plus0(){
   if (timeout<300){
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

function countdownForFlippers(time){
  plate.style.display = "inline";
  document.getElementById('fieldset3').style.display = 'none';
  let timerForFlippers = setInterval(function () {
    if (time>0){
      plate.innerHTML="Level "+level+" will be "+time+" seconds to show";
      time--;
    }
    else if (time<=0){
      clearInterval(timerForFlippers);
      if (level < 2){
        document.getElementById('fieldset3').style.display = 'block';
      }
      change();
      plate.style.display="none";
    }
  },1000);
}


function change(){
  if (level === 0){
    symbol1="Number of flips : + 1.00";
    document.getElementById('fieldset3-symbol').innerHTML=symbol1;
  }
  if (level === 1){
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
}

window.onload= function (){
  document.getElementById('fieldset3-symbol').innerHTML = symbol1;


  let oPtxt=document.getElementById("title");

  let oPtxt1 = document.getElementById('title1');

  let oBtn1=document.getElementById("Btn1");

  let oBtn2=document.getElementById("Btn2");

  let num = 14; /*定义一个初始变量*/

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
  if (number6 === 0){
    if (checks[0].checked){
      incrementClick0();
    }
  }
   else if (number6 === 1){
if (checks[1].checked){
  incrementClick0();
}
  }
   else if (number6 === 2){
    if (checks[2].checked){
      incrementClick0();
    }
   }
   else  if (number6 === 3){
    if (checks[3].checked){
      incrementClick0();
    }
   }
   else  if (number6 === 4){
    if (checks[4].checked){
      incrementClick0();
    }
   }
   words();
   if (counterVal === 1 && level === 0){
     level = 1;
     alert("congratulations, you passed level 0")
     countdownForFlippers(3);
     document.getElementById('level').innerHTML = 'Level : ' + level;
   }
     if (counterVal === 2 && level === 1){
       level = 2;
       alert("congratulations, you passed level 1")
       countdownForFlippers(3);
       document.getElementById('level').innerHTML = 'Level : ' + level;
     }
     if (counterVal === 4 && level === 2 && age <= 30){
       level = 3;
       alert("congratulations, you passed level 2")
       countdownForFlippers(3);
       document.getElementById('level').innerHTML = 'Level : ' + level;
     }
     if (counterVal === 3 && level === 2 && age >= 31){
       level = 3;
       alert("congratulations, you passed level 2")
       countdownForFlippers(3);
       document.getElementById('level').innerHTML = 'Level : ' + level;
     }
  if (counterVal === 7 && level === 3 && age <= 20){
    level = 4;
    alert("congratulations, you passed level 3")
    countdownForFlippers(3);
    document.getElementById('level').innerHTML = 'Level : ' + level;
  }
  if (counterVal === 6 && level === 3 && 21 <= age <= 40){
    level = 4;
    alert("congratulations, you passed level 3")
    countdownForFlippers(3);
    document.getElementById('level').innerHTML = 'Level : ' + level;
  }
  if (counterVal === 5 && level === 3 && age >= 41){
    level = 4;
    alert("congratulations, you passed level 3")
    countdownForFlippers(3);
    document.getElementById('level').innerHTML = 'Level : ' + level;
  }
  if (counterVal === 11 && level === 4 && age <= 20){
    level = 5;
    alert("congratulations, you passed level 4")
    countdownForFlippers(3);
    document.getElementById('level').innerHTML = 'Level : ' + level;
  }
  if (counterVal === 10 && level === 4 && 21 <= age <= 30){
    level = 5;
    alert("congratulations, you passed level 4")
    countdownForFlippers(3);
    document.getElementById('level').innerHTML = 'Level : ' + level;
  }
  if (counterVal === 9 && level === 4 && 31 <= age <= 40){
    level = 5;
    alert("congratulations, you passed level 4")
    countdownForFlippers(3);
    document.getElementById('level').innerHTML = 'Level : ' + level;
  }
  if (counterVal === 8 && level === 4 && age >= 41){
    level = 5;
    alert("congratulations, you passed level 4")
    countdownForFlippers(3);
    document.getElementById('level').innerHTML = 'Level : ' + level;
  }
  if (counterVal === 12 && level === 5){
    level = 6;
    alert("congratulations, you passed level 5")
    countdownForFlippers(3);
    document.getElementById('level').innerHTML = 'Level : ' + level;
  }
  if (counterVal === 13 && level === 6){
    level = 7;
    alert("congratulations, you passed level 6")
    countdownForFlippers(3);
    document.getElementById('level').innerHTML = 'Level : ' + level;
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
      eye1 = "Which eye : left eye"
      fieldset3symbol.innerHTML = symbol1;
      fieldset3eye.innerHTML = eye1;
    }else if (symbol1 === "Number of flips : + 1.00" && eye1 === "Which eye : left eye") {
      symbol1 = "Number of flips : - 1.00"
      eye1 = "Which eye : left eye"
      fieldset3symbol.innerHTML = symbol1;
      fieldset3eye.innerHTML = eye1;
    }else if (symbol1 === "Number of flips : - 1.00" && eye1 === "Which eye : left eye") {
      symbol1 = "Number of flips : + 1.00"
      eye1 = "Which eye : right eye"
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
      eye1 = "Which eye : left eye"
      fieldset3symbol.innerHTML = symbol1;
      fieldset3eye.innerHTML = eye1;
    } else if (symbol1 === "Number of flips : + 1.50" && eye1 === "Which eye : left eye") {
      symbol1 = "Number of flips : - 1.50"
      eye1 = "Which eye : left eye"
      fieldset3symbol.innerHTML = symbol1;
      fieldset3eye.innerHTML = eye1;
    } else if (symbol1 === "Number of flips : - 1.50" && eye1 === "Which eye : left eye") {
      symbol1 = "Number of flips : + 1.50"
      eye1 = "Which eye : right eye"
      fieldset3symbol.innerHTML = symbol1;
      fieldset3eye.innerHTML = eye1;
    }
  }
}
