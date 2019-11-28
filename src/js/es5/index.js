"use strict";

//轮播
function slide() {
  $(function () {
    var timer = null; //声明一个全局定时器

    var index = 0;

    function next() {
      index++;

      if (index > 5) {
        /*
        当图片到最后一张时跳回第一张，本例中在最后一张中放入了第一张的图片，为实现无缝切换图片的效果。
        */
        $(".pic-list").animate({
          left: -index * 1080
        }, 500);
        index = 0;
        $(".pic-list").animate({
          left: 0
        }, 0); //
      }

      $(".pic-list").animate({
        left: -index * 1080
      }, 500);
      iconHover(index);
    }

    function auto() {
      timer = setInterval(function () {
        //设置自动播放的定时器
        next();
        iconHover(index);
      }, 4000);
    }

    auto();
    $("#slide").mouseover(function () {
      //鼠标移入 定时器取消
      clearInterval(timer);
    });
    $("#slide").mouseleave(function () {
      //鼠标离开 定时器开启
      auto();
    }); //点击圆点切换图片

    $('.icon-list').click(function (event) {
      index = $(event.target).index() - 1;
      next();
    });

    function iconHover(index) {
      $(".icon-list li").eq(index).addClass("active").siblings().removeClass("active");
    }
  });
}

function goTop() {
  $(function () {
    //scroll 事件适用于所有可滚动的元素和 window 对象（浏览器窗口）。
    $(window).scroll(function () {
      var scroHei = $(window).scrollTop(); //滚动的高度

      if (scroHei > 500) {
        $('.totop').fadeIn();
      } else {
        $('.totop').fadeOut();
      }
    });
    /*点击返回顶部*/

    $('.totop').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 600);
    });
  });
}