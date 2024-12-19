$(function(){
    $('.gnb > li').mouseenter(function(){
        $(this).find('.depth02').slideDown();
    });//li.mouseenter()
    $('.gnb > li').mouseleave(function(){
        $('.depth02').slideUp()
    });//li.mouseleave()
});//script end