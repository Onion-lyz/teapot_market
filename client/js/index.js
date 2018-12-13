window.onload=function(){
    var header=document.getElementById("header"),
        footer=document.getElementById("footer"),
        body=document.querySelector("body");
    /* 头部引入 */
    ajax({
      url:"http://localhost:3000/header.html",
      type:"get",
      dataType:"string"
     }).then(function(res){
        header.innerHTML=res;
        var script=document.createElement("script")
        script.src="./js/header.js"
        body.appendChild(script)
     })
    /* 尾部引入 */
    ajax({
        url:"http://localhost:3000/footer.html",
        type:"get",
        dataType:"string"
     }).then(function(res){
          footer.innerHTML=res;
     })
    /* 主体头部滑动轮播 */
    var topSlide=document.getElementsByClassName("top_slide")[0]
    var swiper=document.getElementsByClassName("swiper")[0]
    var topSlidePointers=document.querySelectorAll("ul.top_slide_pointer li")
    var left=0;
    for(var key=0;key<topSlidePointers.length;key++){
        topSlidePointers[key].onclick=function(e){
           topSlidePointers.forEach((elem,i)=>{
               if(elem==e.target){
                 var l=left*(-1)/1000
                 if(i-l==2){topSlidePointers[left*(-1)/1000].style.background="";left=-1000;}
                 if((i-l==-1)&&(l==1)){topSlidePointers[left*(-1)/1000].style.background="";left=-2000}
                 if((i-l==-1)&&(l==2)){topSlidePointers[left*(-1)/1000].style.background="";left=0}
                 clearInterval(timer1);
                 slide1()
                }
           }) 
        }
           
     }
    topSlidePointers[left*(-1)/1000].style.background="#dd801a"
    function slide1(){
        topSlidePointers[left*(-1)/1000].style.background=""
        left-=1000;
        if(left==-3000){left=0}
        topSlide.style.marginLeft=left+"px";
        topSlidePointers[left*(-1)/1000].style.background="#dd801a"
     }
    var timer1=setInterval(slide1,2000)
    swiper.onmouseover=function(){
        clearInterval(timer1);
        timer1=null;
     }
    swiper.onmouseout=function(){
        timer1=setInterval(slide1,2000)
     }
    /*主体头部右侧导航*/
    var trTitle=document.querySelectorAll("ul.section_tr_top>li")
    for(var key in trTitle){
        if(trTitle[key].className=="alive"){
            trTitle[key].firstElementChild.setAttribute("style","display:block")
        }
        trTitle[key].onmouseover=function(){
            if(this.nextElementSibling==null){this.className="alive";
            this.firstElementChild.setAttribute("style","display:block");this.previousElementSibling.className=""
            this.previousElementSibling.firstElementChild.setAttribute("style","display:none");}else{this.className="alive";this.firstElementChild.setAttribute("style","display:block");this.nextElementSibling.className="";this.nextElementSibling.firstElementChild.setAttribute("style","display:none");}
        }
    }
    /* 主体底部门店信息 */
    var stores=document.querySelectorAll("div.store>ul>li")
    for(var key in stores){
        if(stores[key].className=="alive"){
            stores[key].firstElementChild.setAttribute("style","display:block")
        }
        stores[key].onmouseover=function(){
            if(this.nextElementSibling==null){this.className="alive";
            this.firstElementChild.setAttribute("style","display:block");this.previousElementSibling.className=""
            this.previousElementSibling.firstElementChild.setAttribute("style","display:none");}else{this.className="alive";this.firstElementChild.setAttribute("style","display:block");this.nextElementSibling.className="";this.nextElementSibling.firstElementChild.setAttribute("style","display:none");}
        }
    }
    

    function slide2(){
        var storeSwiperImg1=document.getElementsByClassName("store_active")[0]
        var storeSwiperImg2=document.getElementsByClassName("store_active")[1]
        var shstorePointer=document.getElementsByClassName("shstorePointer")[0]
        var yxstorePointer=document.getElementsByClassName("yxstorePointer")[0]
        var shImgs=document.querySelectorAll("div.store_sh>div>img")
        var yxImgs=document.querySelectorAll("div.store_yx>div>img")
        for(var i=0;i<shImgs.length;i++){
            shstorePointer.children[i].style.background=""
        }
        for(var i=0;i<yxImgs.length;i++){
            yxstorePointer.children[i].style.background=""
        }
        storeSwiperImg1.setAttribute("class","")
        if(storeSwiperImg1.nextElementSibling!=null){
            storeSwiperImg1.nextElementSibling.className="store_active"
        }else{
            storeSwiperImg1.parentElement.children[0].className="store_active"
        }
        shImgs.forEach((elem,i)=>{
            if(i>=4){i = -1;}
            if(elem==storeSwiperImg1){
                shstorePointer.children[i+1].style.background="#dd801a"
            }
        })
        storeSwiperImg2.setAttribute("class","")
        if(storeSwiperImg2.nextElementSibling!=null){
            storeSwiperImg2.nextElementSibling.className="store_active"
        }else{
            storeSwiperImg2.parentElement.children[0].className="store_active"
        }
        yxImgs.forEach((elem,i)=>{
            if(i>=1){i = -1;}
            if(elem==storeSwiperImg2){
                yxstorePointer.children[i+1].style.background="#dd801a"
            }
        })
    }
    var timer2=setInterval(slide2,3000)
    var storeSwiper=document.getElementsByClassName("store_swiper")
    for(var key in storeSwiper){
        storeSwiper[key].onmouseover=()=>(clearInterval(timer2))
        storeSwiper[key].onmouseout=function(){timer2=setInterval(slide2,3000)}
    }
 }
