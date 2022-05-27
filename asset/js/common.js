$(function(){
    // 헤더 푸터

    //상단헤더 스크롤 시
    $(window).scroll(function(){

        curr = $(this).scrollTop();

        if (curr >= 10) {
            $('.hd-topfixed').addClass('down')
        } else {
            $('.hd-topfixed').removeClass('down')
        }
    })
    $(window).trigger('scroll');



    //티켓버튼
    $('.link-ticket').click(function(e){
        e.preventDefault();
        alert('로그인 후 사용가능합니다.\n로그인 하시겠습니까?');
    })

    //gnb버튼
    $('.btn-gnb').click(function(e){
        e.preventDefault();
        $('.gnb-wrap').addClass('on');
        $('.movie-rank').addClass('zdown');
        $('body').addClass('noscroll');
    })
    $('.gnb-wrap .btn-close').click(function(e){
        e.preventDefault();
        $(this).parent().parent('.gnb-wrap').removeClass('on');
        $('.movie-rank').removeClass('zdown');
        $('body').removeClass('noscroll');
    })
    //gnb내부 allmenu버튼
    $('.btn-more').click(function(e){
        e.preventDefault();
        $(this).toggleClass('on');
        $('.allmenu-list').toggleClass('down');
    });

}) //지우지마세요