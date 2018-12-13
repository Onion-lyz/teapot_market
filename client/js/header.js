//头部上层二维码显示
    var qrcode=document.getElementById("qrcode");
    qrcode.onmouseover=function(){
        qrcode.lastElementChild.style.display="block"
    }
    qrcode.onmouseout=function(){
        qrcode.lastElementChild.style.display="none"
    }
//头部广告点击消失
    var adv=document.getElementsByClassName("header_middle_top")[0];
    var advbtn=adv.lastElementChild
    advbtn.onclick=function(){
        adv.style.height=0;
        var timer=setInterval(function(){
        adv.style.height=150+"px";
        clearInterval(timer)
         },10000)
    }
//搜索框选项区悬停下拉
    var keyWord=document.getElementsByClassName("search")[0].firstElementChild
    var keyWordList=keyWord.lastElementChild
    keyWord.onmouseover=function(){keyWordList.style.display="block"}
    keyWord.onmouseout=function(){keyWordList.style.display="none"}
    var keyWordbtn=keyWordList.children;
    for(var i=0;i<keyWordbtn.length;i++){keyWordbtn[i].onclick=function(){var btn=this,text="";
    text=this.textContent;this.textContent=keyWord.firstElementChild.textContent;keyWord.firstElementChild.textContent=text;
 }}
//左侧悬浮框开关门效果
    var left=document.getElementsByClassName("body_leftside")[0]
    var leftBtn=left.lastElementChild
    var leftImg=leftBtn.previousElementSibling
    leftBtn.onclick=function(){
        if(leftBtn.innerHTML=="« 收起"){
            leftImg.style.display="none";
            left.style.width="34px";
            leftBtn.innerHTML="»";
            leftBtn.style.background="#fffdfa";
            leftBtn.style.color="#9e8a73";
            left.style.bottom="200px"
        }else{leftImg.style.display="block";
        left.style.width="";
        leftBtn.innerHTML="« 收起";
        leftBtn.style.background="";leftBtn.style.color="";
        left.style.bottom=""
        }
    }