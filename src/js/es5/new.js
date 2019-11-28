"use strict";

function pbl(select, children, space) {
  //1. 初始化参数
  if (!select) {
    return;
  }

  children = children || 'div';
  space = space || 10; //2. 获取大盒子

  var $bigBox = $(select); //3. 子节点

  var $childs = $bigBox.children(); //4. 大盒子的宽

  var bigBoxWidth = $bigBox.width(); //5. 子节点的宽

  var childWidth = $childs.eq(0).outerWidth(); //6. 列数

  var colNum = Math.floor(bigBoxWidth / childWidth); //7. 左右间隙

  var paddin = Math.floor((bigBoxWidth - childWidth * colNum) / (colNum + 1)); //8. 初始化第一行的坐标值

  var arr = [];

  for (var i = 0; i < colNum; i++) {
    var obj = new Object();
    obj.left = i * childWidth + (i + 1) * paddin;
    obj.top = space;
    arr.push(obj);
  } //9. 对号入座


  $childs.each(function (i, value) {
    var index = minHeight(arr);
    $(value).css('position', 'absolute');
    $(value).animate({
      left: arr[index].left,
      top: arr[index].top
    }, 600);
    arr[index].top += $(value).outerHeight() + space;
    $bigBox.css('height', arr[index].top);
  });
}

function minHeight(arr) {
  var min = arr[0].top;
  var index = 0;

  for (var i = 0, len = arr.length; i < len; i++) {
    if (min > arr[i].top) {
      min = arr[i].top;
      index = i;
    }
  }

  return index;
}