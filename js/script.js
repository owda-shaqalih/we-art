$(window).on("load",function(){ 
    // setTimeout(function () {
    //     $(".main-loader").fadeOut(600);
    //     AOS.init({
    //         easing: 'ease-out-back',
    //         duration: 1000,
    //         once: true,
    //     });
    // },600);
     AOS.init({
        easing: 'ease-out-back',
        duration: 1000,
        once: true,
    });
     // WOW ANIMATION 
    wow = new WOW(
    {
        animateClass: 'animated',
        offset:       50
    }
    );
    wow.init();

    $(document).settings();

});

var back;

$.fn.settings = function () {
    var time = 1;

    $(".show_animate").each(function( k , v ) {
        time = k/10;
        $(this).addClass('animated').css({'visibility':'visible','animation-delay': k/10 +'s'});
    });


    $(".content_sc_offer .show_animate").each(function( k , v ) {

        tt = k/5;
        $(this).addClass('animated fadeOutDown').css({'animation-delay': tt +'s'});

    });
}

$(document).ready(function(){
	var body = $('body');

	/*open_menu*/
    $('body').on('click','.menu-trigger',function(e){
        var thisclick = $('.menu-trigger')
        if(thisclick.hasClass('active') != true){
            thisclick.addClass('active');
            body.addClass('nav-active');
            
        }
        setTimeout(function(){
            $('.menu_social_group').fadeIn();
        },500);
        setTimeout(function(){
            $('.menu_social_group').addClass('m_show');
            $('.colum_block_info').addClass('m_show');
        },550);
    });

    /*close_menu*/
    $('body').on('click','.close_menu',function(e){
        if(body.hasClass('nav-active') == true){
            body.removeClass('nav-active');
            $('.menu-trigger').removeClass('active');
            
        }
        setTimeout(function(){
            $('.menu_social_group').fadeOut();
            $('.services_menu_box').fadeOut();
            $('.mm_contact_box').fadeOut();
        },500);
        setTimeout(function(){
            $('.menu_social_group').removeClass('m_show');
            $('.services_menu_box').removeClass('m_show');
            $('.mm_contact_box').removeClass('m_show');
            $('.colum_block_info').removeClass('m_show');
        },550);
    });

     /*open_contact*/
    $('body').on('click','.contact__open',function(e){
        var menu_btn = $('.menu-trigger')
        if(menu_btn.hasClass('active') != true){
            menu_btn.addClass('active');
            body.addClass('nav-active');
            
        }
        setTimeout(function(){
            $('.mm_contact_box').fadeIn();
        },500);
        setTimeout(function(){
            $('.mm_contact_box').addClass('m_show');
            $('.colum_block_info').addClass('m_show');
        },550);
    });


    var owl = $('#team_slider');
    owl.owlCarousel({
            loop: true,
            margin: 20,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    stagePadding: 40,
                    margin: 15,
                },
                575:{
                    items:2,
                    stagePadding: 0,
                },
                768:{
                    items:1,
                },
                992:{
                    items:2,
                },
                1200:{
                    items:3,
                }

            },
            nav: true,
            dots: true,
            smartSpeed: 500,
            autoplay: false,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            navText:['<i class="fal fa-long-arrow-left"></i>',
                '<i class="fal fa-long-arrow-right"></i>'],
    });


    var owl = $('#services_slider');
    owl.owlCarousel({
            loop: true,
            margin: 20,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    stagePadding: 40,
                },
                575:{
                    items:1,
                },
                768:{
                    items:1,
                },
                992:{
                    items:1,
                },
                1200:{
                    items:2,
                }

            },
            nav: true,
            dots: true,
            smartSpeed: 500,
            autoplay: false,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            navText:['<i class="fal fa-long-arrow-left"></i>',
                '<i class="fal fa-long-arrow-right"></i>'],
    });


    var $input;

    function onInputFocus(event) {
      var $target = $(event.target);
      var $parent = $target.parent();
          $parent.addClass('focus-input');
    };

    function onInputBlur(event) {
      var $target = $(event.target);
      var $parent = $target.parent();

      if (event.target.value.trim() === '') {
        $parent.removeClass('focus-input');
      }
    };

    $input = $('.form_st2 .form-control');
      
      $input.each(function(){
        if ($input.val().trim() !== '') {
          var $parent = $input.parent();
          $parent.addClass('focus-input');
        }
    });
          
    $input.on('focus', onInputFocus);
    $input.on('blur', onInputBlur);
})