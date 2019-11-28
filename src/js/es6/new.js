function pbl(select, children, space) {
    //1. 初始化参数
    if (!select) {
        return;
    }
    children = children || 'div';
    space = space || 10;
    //2. 获取大盒子
    let $bigBox = $(select);

    //3. 子节点
    let $childs = $bigBox.children();
    //4. 大盒子的宽
    let bigBoxWidth = $bigBox.width();

    //5. 子节点的宽
    let childWidth = $childs.eq(0).outerWidth();

    //6. 列数
    let colNum = Math.floor(bigBoxWidth / childWidth);
    //7. 左右间隙
    let paddin = Math.floor((bigBoxWidth - childWidth * colNum) / (colNum + 1));
    //8. 初始化第一行的坐标值
    let arr = [];
    for (let i = 0; i < colNum; i++) {
        let obj = new Object();
        obj.left = i * childWidth + (i + 1) * paddin;
        obj.top = space;
        arr.push(obj);
    }

    //9. 对号入座
    $childs.each((i, value) => {
        let index = minHeight(arr);
        $(value).css('position', 'absolute');
        $(value).animate({
            left: arr[index].left,
            top: arr[index].top
        }, 600);
        arr[index].top += $(value).outerHeight() + space;
        $bigBox.css('height', arr[index].top);
    })
}

function minHeight(arr) {
    let min = arr[0].top;
    let index = 0;
    for (let i = 0, len = arr.length; i < len; i++) {
        if (min > arr[i].top) {
            min = arr[i].top;
            index = i;
        }
    }
    return index;
}