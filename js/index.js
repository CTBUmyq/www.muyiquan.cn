window.onload = function () {

    //对导航条的滚动监听
    window.addEventListener('scroll',winScroll);
    function  changeColor(index) {
        for(var i=0; i<aList.length;i++) {
            aList[i].style.color = '';
        }
        aList[index].style.color = '#4091ef';
    }
    function winScroll(e) {
        //拿到滚动条离顶部的长度
        var length = document.documentElement.scrollTop || document.body.scrollTop;
        //拿到e之后进行你需要的处理
        if (length>558){
            nav.style.color = '#000';
            nav.style.backgroundColor = '#fff';
            nav.style.borderBottom = '1px solid #e1e1e1';
        }
        if(length<558){
            nav.style.color = '#fff';
            changeColor(0);
            nav.style.backgroundColor = '';
            nav.style.borderBottom = '';
        }else if (length<946){
            // about
            changeColor(1)
        }else if(length<1614){
            //press
            changeColor(2);
        }else {
            //contact
            changeColor(3)
        }

    }

}
//图片的onchange事件
function imgChange(img){
    var className = img.className;//获取原来的className；
    className = className!=""?className+" ":className;//判断className是否为空
    className += 'img-rotate';
    img.className = className;
    var objDiv = img.parentNode.lastChild; //获得文字节点

    setTimeout(function(){
        objDiv.style.display = "block";
    },1000);

}
function removeClass(img){
    var className = img.className;
    var aStr = className.split(" ");
    className = "";
    for (var i = 0;i<aStr.length;i++) {
        if(aStr[i]=="img-rotate"){
            aStr[i] = "";
        }
        if (aStr[i]!="") {
            className =className+" "+aStr[i];
        }
    }
    console.log(className);
    img.className = className;

    var objDiv = img.parentNode.lastChild; //获得文字节点
    setTimeout(function(){
        objDiv.style.display = "none";
    },1000);
}
(function(){
    //控制元素位置模块开始
    var propertion = window.innerWidth/1920;
    var $perface = $("#perface");
    var $perfaceImg =$("#canvas");
    var perfaceHeight = $perface.height();
    var perfaceImgHeight = $perfaceImg.height();
    var $fontSizeAuto = $(".font-size-auto");   //设置join us连接文字的大小
    for(var i=0;i<$fontSizeAuto.length;i++){
        $fontSizeAuto[i].style.fontSize = 30*propertion+"px";
    }
    if(perfaceHeight-perfaceImgHeight>0){
        $perface.css("marginTop",-(perfaceHeight-(perfaceHeight-perfaceImgHeight)/2));
    }else {
        $perface.css("marginTop",-(perfaceImgHeight-(perfaceImgHeight-perfaceHeight)/2));
    }
    $perface.css("marginLeft",($perfaceImg.width()-$perface.width())/2);
    //控制元素位置模块结束
})();