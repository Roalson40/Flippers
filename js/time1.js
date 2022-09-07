let timeout1=0;
let countdownTimer1;

function countdown1(){
  countdownTimer1 = setInterval(function(){
    if (timeout1>0){
      timeout1--;
      refreshTime1();
    }
    else if (timeout1<=0){
      destroy1();
    }
  }, 1000);
}

function destroy1(){

  timeout1=0;
  clearInterval(countdownTimer1);
  refreshTime1();


}

function refreshTime1(){
  document.getElementById('time3').innerHTML="Time : "+timeout1;
}

function plus2(){
  if (timeout1<300){
    timeout1+=60;
    refreshTime1();
  }
}

function minus2(){
  if (timeout1>0){
    timeout1-=60;
    refreshTime1();
  }
}
