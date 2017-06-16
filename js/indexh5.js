/**
 * Created by 79807 on 2017-04-12.
 */
var myswiper = new Swiper(".swiper-container",{
    direction:"vertical"/*轮播方向垂直,默认水平*/,
    loop:"true",
    onTransitionEnd:function (swiper) {
        //回调函数 onslideChangeEnd 从一个slide结束到另一个slide执行,
        var curIndex = swiper.activeIndex;//获取当前滑块的索引值
        var slideary = swiper.slides;
        var targetId = 'page';
        switch(curIndex){
            case 0:
                targetId += slideary.length-2;
                break;
            case slideary.length-1:
                targetId += 1;
                break;
            default:
                targetId += curIndex;
        }
        [].forEach.call(slideary,function (item,index) {
            if(curIndex === index){ //让当前屏加上id,其他没有id
                item.id = targetId;
            }else{
                item.id=null;
            }
        })
    }
});
//music
var musicBox = document.querySelector('#musicBox');
var musicAudio = document.querySelector('#musicAudio');
window.setTimeout(function () {
    musicAudio.play();
    musicAudio.addEventListener('canplay',function () {
        //能播放就执行函数
        can = true;
        musicBox.className = 'music musicMove';
    });
},1000);
musicBox.onclick = function () {
    if(!musicAudio.paused){
        musicAudio.pause();
        musicAudio.addEventListener('pause',function () {
            //能播放就执行函数
            musicBox.className = ' music';
        });
    }else{
        musicAudio.play();
        musicAudio.addEventListener('play',function () {
            //能播放就执行函数
            musicBox.className = 'music musicMove';
        });
    }
};
FastClick(document.body);