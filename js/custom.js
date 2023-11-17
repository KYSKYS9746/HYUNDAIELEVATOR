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

    // $('.stroy_slide').slick({
    //     slidesToShow: 4,
    //     // centerMode: true,
    // })

    $('.MainPortfolio .pf_left_slide').slick({
        arrows:false,
        fade: true,
        asNavFor:'.MainPortfolio .pf_right_slide',
    });

    $('.MainPortfolio .pf_right_slide').slick({
        arrows:false,
        slidesToShow: 4,
        asNavFor:'.MainPortfolio .pf_left_slide',
    });

    $('.MainPortfolio .bt_left').on('click', function(){
        $('.MainPortfolio .pf_left_slide').slick('slickPrev');
    })

    $('.MainPortfolio .bt_right').on('click', function(){
        $('.MainPortfolio .pf_left_slide').slick('slickNext');
    })

    $('.MainSolution .solution_slide').slick({
        dots: true,
        centerMode: true,
        variableWidth: true,
        

    })

    $('.MainSolution .solution_slide').on('afterChange', function(e,s,c){
        //c = 0,1,2....8
        $('.MainSolution .solusion_txt .txt_box li').removeClass('on');
        $('.MainSolution .solusion_txt .txt_box li').eq(c).addClass('on');
        // 숫자 넘기기
        $('.MainSolution .solution_idx strong').text('0' + (c + 1));

    });

    $('#promotion').YTPlayer({
        videoURL:'https://youtu.be/5nnsleIF6Yw',
        containment:'.mainPromotion .movie_case',
        showControls: false,
        autoPlay:false,
        optimizeDisplay: false,
        playOnlyIfVisible: true,
        
        

        // autoPlay:true, 
        // mute:true,
        //  startAt:0, 
        //  opacity:1,
    });

    let movie = true;


    $('.mainPromotion .movie_play').on('click', function(){
        if(movie) {
            $('#promotion').YTPPlay();
        }else {
            $('#promotion').YTPPause();
        }

        $(this).toggleClass('on');


        movie = !movie;

       
    });



});
