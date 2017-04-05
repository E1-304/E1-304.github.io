$(document).ready(function(){
  //视频前的加载动画
  var myVid=$("#beginVideo")[0];
  myVid.oncanplaythrough=function(){
    $(".loading_BG").fadeOut(1500, function() {
        $(".BeginAnimation").animate({opacity:1}, 1000,function(){
            myVid.play();
        });
    });
  }
  myVid.onended = function(){
    $(".BeginAnimation").fadeOut(1500, function() {
        $(".content").animate({opacity:1}, 1000,function(){
            $('.BeginAnimation').remove();
            document.getElementById("jia").classList.add("jia_flyin");
            document.getElementById("chuan").classList.add("chuan_flyin");
            document.getElementById("gang").classList.add("gang_flyin");
            document.getElementById("fei").classList.add("fei_flyin");
            document.getElementById("yu").classList.add("yu_flyin");
        });
    });
  }
});

