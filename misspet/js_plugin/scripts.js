//自動搜尋
$(function () {
        var terms = [
            "iphone14 pro max",
            "三星手機",
            "三星耳機",
            "三星平板",
            "三星手錶",
            "智能掃地機",
            "按摩椅",
            "無印良品",
            "無線耳機",
            "無線滑鼠",
            "無線充電",
            "無線網卡",
            "沙發",
            "床墊",
            "手機",
            "手錶",
            "手帕",
            "手環",
            "手電筒",
            "手套",
            "手推車",
            "手把",
            "折疊手機",
            "手機架",
            "手機殼",
            "手機背帶",
            "手機掛繩",
            "手機包",
            "平板",
            "平板電腦",
            "平板鍵盤",
            "平板保護膜",
            "平板收納包",
            "平底鍋",
            "apple",
            "apple watch",
            "apple iphone",
            "applepencil",
            "apple tv",
            "google pixel",
            "gopro",
            "google chromecast",
            "google pixel 7",
            "google pixel 6",
            "google pixel 7 pro",
        ]
        $('#tags').autocomplete({
            source: terms

        });

    });
//瘋殺特賣商品列表
var swiper = new Swiper(".dis-swiper-contianer", {
        spaceBetween: 30,
        loop: true, 
        centerslide:'true',
        fade:'true', 
        grabCursor:'true',
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints:{
          0:{
             slidesPerView: 1,
          },
          750:{
             slidesPerView: 2,
             slidesPerGroup: 1,
          },
          1100:{
             slidesPerView: 3,
             slidesPerGroup: 3,
          },
        },
        
      });

//暢銷排行商品列表
var swiper = new Swiper(".hot-swiper-contianer", {
        slidesPerGroup: 1,
        centeredSlides: true,
        loop: false, 
        slideToClickedSlide: true,
        centerslide:'true',
        fade:'true', 
        grabCursor:'true',
        mousewheel: {
          invert: false,
          forceToAxis: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        rewind:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        freeMode: {
          enable: true,
          momentumBounce: true,
          momentumBounceRatio: 4,
          sticky: true,
        },
        parallax : true,
        breakpoints:{
          0:{
             slidesPerView: 1.8,
             spaceBetween: 30,
          },
          750:{
             slidesPerView: 3,
             spaceBetween: 40,
          },
          1100:{
             slidesPerView: 4,
             spaceBetween: 50,
          },
        },
        
      });
//探索三區商品列表
var swiper = new Swiper(".ex-swiper-contianer", {
        spaceBetween: 50,
        slidesPerGroup: 5,
        loop: false, 
        fade:'true', 
        grabCursor:'true',
        mousewheel: {
          invert: false,
          forceToAxis: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        rewind:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        freeMode: {
          enable: true,
          momentumBounce: true,
          momentumBounceRatio: 4,
          sticky: true,
        },
        parallax : true,
        breakpoints:{
          600:{
             slidesPerView: 2,
          },
          900:{
             slidesPerView: 3,
          },
          1100:{
             slidesPerView: 4,
          },
          1350:{
             slidesPerView: 5,
          },
        },
        
      });
//隱藏nav頂條
$(function () {

    // show hide subnav depending on scroll direction
    var position = $(window).scrollTop();

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll > position) {

            //only piece that matters
            $('#top-nav')
            	.stop(true, false)
                .removeClass('nav-up')
                .addClass('nav-down');

        } else {
            //only piece that matters
            $('#top-nav')
                .stop(true, false)
                .removeClass('nav-down')
                .addClass('nav-up');
        }

        position = scroll;
    });

});

//自動搜尋框下滑時固定
$(function(){
    //记录顶部距离
    var windowTop=0;
    //触发页面滑动时会进入此方法
    $(window).scroll(function(){
        //获取当前可视区域距离页面顶端的距离
        var scrolls = $(this).scrollTop();
        //当scrolls>windowTop时，表示页面在向下滑动
        if(scrolls>=windowTop){
            //追加样式并记录新的距离
            $(".ui-widget").addClass("autosearch-down");
            windowTop=scrolls;
        }else{
            $(".ui-widget").removeClass("autosearch-down");
            windowTop=scrolls;
        }
    });
});

//訂單篩選器
(function() {
    ready(function() {
        var option_box = document.getElementsByClassName("custom-option-box")[0],
            select_box = document.getElementsByClassName("select-box")[0],
            width;
        option_box.style.display = "none"; //初始ul隱藏  
        width = select_box.offsetWidth; //select的寬度 預設 100%  
        option_box.style.width = width + "px"; //初始ul寬度   
        
        document.getElementById("fisrt").addEventListener("click", function() {
            var isShow = this.dataset.show;
            if(isShow == 0) {
                this.dataset.show = 1;
                this.classList.add("active");
                this.nextElementSibling.style.display = "block"; //找到ul.son_ul顯示  
            } else {
                this.dataset.show = 0;
                this.classList.remove("active");
                this.nextElementSibling.style.display = "none"; //找到ul.son_ul顯示  
            }
        },false);
        var option = option_box.getElementsByTagName("li");
        for(var i = 0; i < option.length; i++){  
            option[i].onclick = function(){  
                var fisrt = this.parentNode.previousElementSibling;
                var siblings = getSiblings(this);
                fisrt.innerHTML = this.childNodes[0].innerText;
                fisrt.dataset.val = this.dataset.val;
                this.classList.add("active");
                for(var i = 0;i<siblings.length;i++){
                    siblings[i].classList.remove("active");
                }
                this.parentNode.style.display = "none";
                fisrt.dataset.show = 0;
                fisrt.classList.remove("active");
            }     
          } 
        
    });

    function ready (fn) {
        if(document.addEventListener){        //標準瀏覽器
            document.addEventListener('DOMContentLoaded',function(){
                //註銷時間，避免重覆觸發
                document.removeEventListener('DOMContentLoaded',arguments.callee,false);
                fn();        //運行函數
            },false);
        }else if(document.attachEvent){        //IE瀏覽器
            document.attachEvent('onreadystatechange',function(){
                if(document.readyState=='complete'){
                    document.detachEvent('onreadystatechange',arguments.callee);
                    fn();        //函數運行
                }
            });
        }
    }
    function getSiblings (elm) {
        var a = [];
        var p = elm.parentNode.children;
        for(var i = 0, pl = p.length; i < pl; i++) {
            if(p[i] !== elm) a.push(p[i]);
        }
        return a;
    }
})();
(function() {
    ready(function() {
        var doption_box = document.getElementsByClassName("d-option-box")[0],
            dselect_box = document.getElementsByClassName("dselect-box")[0],
            width;
        doption_box.style.display = "none"; //初始ul隱藏  
        width = dselect_box.offsetWidth; //select的寬度 預設 100%  
        doption_box.style.width = width + "px"; //初始ul寬度   
        
        document.getElementById("dfisrt").addEventListener("click", function() {
            var isShow = this.dataset.show;
            if(isShow == 0) {
                this.dataset.show = 1;
                this.classList.add("dactive");
                this.nextElementSibling.style.display = "block"; //找到ul.son_ul顯示  
            } else {
                this.dataset.show = 0;
                this.classList.remove("dactive");
                this.nextElementSibling.style.display = "none"; //找到ul.son_ul顯示  
            }
        },false);
        var doption = doption_box.getElementsByTagName("li");
        for(var i = 0; i < doption.length; i++){  
            doption[i].onclick = function(){  
                var dfisrt = this.parentNode.previousElementSibling;
                var siblings = getSiblings(this);
                dfisrt.innerHTML = this.childNodes[0].innerText;
                dfisrt.dataset.val = this.dataset.val;
                this.classList.add("dactive");
                for(var i = 0;i<siblings.length;i++){
                    siblings[i].classList.remove("dactive");
                }
                this.parentNode.style.display = "none";
                dfisrt.dataset.show = 0;
                dfisrt.classList.remove("dactive");
            }     
          } 
        
    });

    function ready (fn) {
        if(document.addEventListener){        //標準瀏覽器
            document.addEventListener('DOMContentLoaded',function(){
                //註銷時間，避免重覆觸發
                document.removeEventListener('DOMContentLoaded',arguments.callee,false);
                fn();        //運行函數
            },false);
        }else if(document.attachEvent){        //IE瀏覽器
            document.attachEvent('onreadystatechange',function(){
                if(document.readyState=='complete'){
                    document.detachEvent('onreadystatechange',arguments.callee);
                    fn();        //函數運行
                }
            });
        }
    }
    function getSiblings (elm) {
        var a = [];
        var p = elm.parentNode.children;
        for(var i = 0, pl = p.length; i < pl; i++) {
            if(p[i] !== elm) a.push(p[i]);
        }
        return a;
    }
})();
(function() {
    ready(function() {
        var coption_box = document.getElementsByClassName("c-option-box")[0],
            cselect_box = document.getElementsByClassName("cselect-box")[0],
            width;
        coption_box.style.display = "none"; //初始ul隱藏  
        width = cselect_box.offsetWidth; //select的寬度 預設 100%  
        coption_box.style.width = width + "px"; //初始ul寬度   
        
        document.getElementById("cfisrt").addEventListener("click", function() {
            var isShow = this.dataset.show;
            if(isShow == 0) {
                this.dataset.show = 1;
                this.classList.add("cactive");
                this.nextElementSibling.style.display = "block"; //找到ul.son_ul顯示  
            } else {
                this.dataset.show = 0;
                this.classList.remove("dactive");
                this.nextElementSibling.style.display = "none"; //找到ul.son_ul顯示  
            }
        },false);
        var coption = coption_box.getElementsByTagName("li");
        for(var i = 0; i < coption.length; i++){  
            coption[i].onclick = function(){  
                var cfisrt = this.parentNode.previousElementSibling;
                var siblings = getSiblings(this);
                cfisrt.innerHTML = this.childNodes[0].innerText;
                cfisrt.dataset.val = this.dataset.val;
                this.classList.add("cactive");
                for(var i = 0;i<siblings.length;i++){
                    siblings[i].classList.remove("cactive");
                }
                this.parentNode.style.display = "none";
                cfisrt.dataset.show = 0;
                cfisrt.classList.remove("cactive");
            }     
          } 
        
    });

    function ready (fn) {
        if(document.addEventListener){        //標準瀏覽器
            document.addEventListener('DOMContentLoaded',function(){
                //註銷時間，避免重覆觸發
                document.removeEventListener('DOMContentLoaded',arguments.callee,false);
                fn();        //運行函數
            },false);
        }else if(document.attachEvent){        //IE瀏覽器
            document.attachEvent('onreadystatechange',function(){
                if(document.readyState=='complete'){
                    document.detachEvent('onreadystatechange',arguments.callee);
                    fn();        //函數運行
                }
            });
        }
    }
    function getSiblings (elm) {
        var a = [];
        var p = elm.parentNode.children;
        for(var i = 0, pl = p.length; i < pl; i++) {
            if(p[i] !== elm) a.push(p[i]);
        }
        return a;
    }
})();
