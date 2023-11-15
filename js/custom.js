$(function(){

    $('.MainVisual .Visual_Slide').on('init', function(){
        const current = $('.MainVisual .Visual_Slide .slick-current');
        current.addClass('on').siblings().removeClass('on')
    });    

    // $('h1').hide();
    $('.MainVisual .Visual_Slide').slick({
        pauseOnHover: false,
        autoplaySpeed: 2000,
    
    });
    // e = EVENT , s = Slick , c = currentSlide
    $('.MainVisual .Visual_Slide').on('afterChange', function(e,s, c) {
        console.log(e, s ,c); // c=0,1
        $('.MainVisual .right_dots li').removeClass('on');
        $('.MainVisual .right_dots li').eq(c).addClass('on');
        $('.MainVisual .num span').text('0' + (c + 1));

        const current = $('.MainVisual .Visual_Slide .slick-current');
        current.addClass('on').siblings().removeClass('on')
    })

    $('.MainVisual .right_dots li a').on('click'),function(e){
        e.preventDefault();
        let idx = $(this).parent().index();
        $('.MainVisual .Visual_Slide').slick('slickGoTo', idx);
    }

    let st = true;
$('.MainVisual .play').on('click', function() {
    $(this).toggleClass('on');

    if(st) {
        $('.MainVisual .Visual_Slide').slick('slickPlay');
    }  else {
        $('.MainVisual .Visual_Slide').slick('slickPause');
    }

    st = !st;
    
    });

});
