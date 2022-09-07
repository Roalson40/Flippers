window.onload=function () {
  document.getElementById('time4').innerHTML = 'Time' + timeout1;
  window.open()
  countdown2();
}

function countdown2(){
  countdownTimer1 = setInterval(function(){
    if (timeout1>0){
      timeout1--;
      document.getElementById('time4').innerHTML = 'Time' + timeout1;
    }
    else if (timeout1<=0){

    }
  }, 1000);
}
