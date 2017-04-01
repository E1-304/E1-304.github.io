var isWait = true;
    console.log(1231);
    setTimeout(function(){
        console.log("添加上了")
        if(isWait){
            console.log('进来了')
            var d = dialog({
             title: '你怎么能不点屏幕呢？你不会真以为在加载吧？',
             content: '<img style="width:100px" src="./img/dialogImg.gif">',
             okValue: '刚才是我表弟在玩',
             ok: function okFunction() {
                 $("#gameMusic")[0].remove();
                 WindowsBegin();
             },
             cancelValue: '这歌不错啊，我听会',
             cancel: function () {
                alert('大兄弟你不点不就能听了吗？');
                 return false;
             }
            });
            d.show();
            $("#gameMusic")[0].play();
        }
    },4000);

$('.loading').one('click', function(e) {
    if(isWait){
        e.stopPropagation();
        WindowsBegin();
        isWait = false;
    }
	
 });
function WindowsBegin () {
	$("#windowsBegin")[0].play();
	$('.loading').fadeOut(3000, function() {
        $(".content").animate({opacity:1}, 3000,function(){
            $('.loading').remove();
        });
  
	});
}
