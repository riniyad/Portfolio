$(document).ready(function(){
//    ===== My preloader sugnature =======
    var svg = new Walkway({
        selector:"#Layer_1",
        duration: 3000,
        easing: 'easeInOutCubic'
    }).draw();
    $('.svg-img').fadeIn(100);
    $('.preloader').delay(3000).fadeOut(400);
    
 var typed3 = new Typed('.typejs', {
    strings: [' <span class="tp_color">A designer</span>^1000', '<span class="tp_color">A developer</span>^1000', '<span class="tp_color">A coder</span>^1000'],
    typeSpeed: 40,
    backSpeed: 0,
    smartBackspace: false, // this is a default
    loop: true
  });

});