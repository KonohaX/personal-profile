$(function(){
    $(window).resize();
    $("#nav").navFixed();
    //设置滑动效果
    $(".arrow a,#logo,.nav-list a").click(function(){
        $this=$(this);
        var a=$($this.attr('href')).offset().top-50;
        $("html,body").stop().animate({
            "scrollTop":a
        },600);
        //阻止a属性跳转
        event.preventDefault();
    })
})
$(window).resize(function(){
    //设置第一部分高度
    var firstH=$(window).height();
    $("#first-part").css("height",firstH);
    //设置标题移动效果
    var title_height=$(".part1-title").outerHeight();
    var scroll_height=($(window).height()-title_height)/2;
    $(".part1-title").stop().fadeIn("normal").animate({
        "top" : scroll_height
    },800);
})