//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches



$(".next").click(function(){
  if(animating) return false;
  animating = true;
  //var checkOne = false;                    //判断是否被选择条件
  // var chboxVal = [];                       //存入被选中项的值
  //var checkBox = $('input[name = statement]'); //获得得到所的复选框

  //for (var i = 0; i < checkBox.length; i++) {

  //如果有1个被选中时（jquery1.6以上还可以用if(checkBox[i].prop('checked')) 去判断checkbox是否被选中）
  //if (checkBox[i].checked) {
  // checkOne = true;
  //   chboxVal.push(checkBox[i].value)//将被选择的值追加到
  // };
  // };

  // if (checkOne) {
  //  alert("您选择爱好对应的value是：" + chboxVal);
  // } else {
  //  alert("对不起：至少要选择一项爱好哦!");
  //}


  next_fs = $(this).parent().next();
  current_fs = $(this).parent();



  //activate next step on progressbar using the index of next_fs
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

  //show the next fieldset
  next_fs.show();
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
    step: function(now, mx) {
      //as the opacity of current_fs reduces to 0 - stored in "now"
      //1. scale current_fs down to 80%
      scale = 1 - (1 - now) * 0.2;
      //2. bring next_fs from the right(50%)
      left = (now * 50)+"%";
      //3. increase opacity of next_fs to 1 as it moves in
      opacity = 1 - now;
      current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
      next_fs.css({'left': left, 'opacity': opacity});
    },
    duration: 800,
    complete: function(){
      current_fs.hide();
      animating = false;
    },
    //this comes from the custom easing plugin
    easing: 'easeInOutBack'
  });
});

$(".previous").click(function(){
  if(animating) return false;
  animating = true;

  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();

  //de-activate current step on progressbar
  $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

  //show the previous fieldset
  previous_fs.show();
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
    step: function(now, mx) {
      //as the opacity of current_fs reduces to 0 - stored in "now"
      //1. scale previous_fs from 80% to 100%
      scale = 0.8 + (1 - now) * 0.2;
      //2. take current_fs to the right(50%) - from 0%
      left = ((1-now) * 50)+"%";
      //3. increase opacity of previous_fs to 1 as it moves in
      opacity = 1 - now;
      current_fs.css({'left': left});
      previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
    },
    duration: 800,
    complete: function(){
      current_fs.hide();
      animating = false;
    },
    //this comes from the custom easing plugin
    easing: 'easeInOutBack'
  });
});

$(".submit").click(function(){
  return false;
})

function next(){
  var button = document.getElementById("next")
  button.style.display = "block";
}
function next2(){
  var button = document.getElementById("next2")
  button.style.display = "block";
}

function selectCheckOne(obj){
  var checks = document.getElementsByName("statement");
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
  next2();

}

//function selectCheckTwo(obj){
// var checks = document.getElementsByName("statement1");
// if(obj.checked){
//   for( var i=0;i<checks.length;i++){
//     checks[i].checked=false;
//   }
//   obj.checked=true;
// }else{
//   for( var i=0;i<checks.length;i++){
//     checks[i].checked=false;
//   }
// }
// next2();
// }

function selectCheckThree(obj){
  var checks = document.getElementsByName("statement2");
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
}


var str = document.getElementsByClassName("font_small");
Array.prototype.forEach.call(str, function(item){
  var l = item.innerHTML;
  if(l.length == 6){
    pe_static.style.fontSize = ".26rem";
  } else if(l.length > 6){
    item.style.fontSize = ".26rem";
  }
});
