

function myfunction(){
  var x = 'have fun!!!'
  document.getElementById('demo').innerHTML = x;
}




function hideImg(){
  var img = document.getElementById("img1");
  img.style.display = "none";
}

function showImg(){
  var img = document.getElementById("img1");
  img.style.display = "block";
}



function countdown(){
  countdownTimer = setInterval(function(){
    if (timeout>0){
      refreshTime();
      timeout--;
    }
    else if (timeout<=0){
      destroy();
    }
  }, 1000);
}

function destroy(){
  timeout=60;
  clearInterval(countdownTimer);
  refreshTime();
}

function plus(){
  if (timeout<600){
    timeout+=60;
    refreshTime();
  }
}

function minus(){
  if (timeout>0){
    timeout-=60;
    refreshTime()
  }
}

function refreshTime(){
  document.getElementById('time').innerHTML="Time: "+timeout;
}

