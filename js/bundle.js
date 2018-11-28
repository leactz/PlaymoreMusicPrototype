//featured playlists carousel

$(document).ready(function(){

  $('.carousel-next').on('click', function(e) {

    let $leftPos = $('.carousel-array').scrollLeft();

      $('.carousel-array').animate({

        scrollLeft: $leftPos + 320

      } ,800);
  });

  $('.carousel-prev').on('click', function(e) {

    let $leftPos = $('.carousel-array').scrollLeft();

    $('.carousel-array').animate({

      scrollLeft: $leftPos - 320

    } ,800);


  });

});
// confirm that javascript has loaded

$(document).ready(function() {

  console.log("js is working");

  // SHOW BURGER MENU ON 1023PX AND SMALLER
  if (window.innerWidth <= 1023) {
      $('#navToggle').removeClass('hidden');
      console.log('window is now 1023px or smaller');
    }

  // TOGGLE NAVIGATION LIST AND NAVIGATION TOGGLE
  $('#navToggle').on('click', function(e) {

    if ( $(this).hasClass('fa-bars')) {

      $('#navExpand').removeClass('hide-small').fadeIn();
      $(this).removeClass('fa-bars').addClass('fa-times');
    } else {
      $('#navExpand').fadeOut();
      $(this).removeClass('fa-times').addClass('fa-bars');
    }
  });

  // PLAY-BUTTON FUNCTIONS FOR SINGLE PLAYLISTS. KEEP HIDDEN ON PAGE LOAD

  $('.sample').hide().removeClass('hidden');

      // show text on mouseover

  $('.play').on('mouseover', function(e){
    $('.sample').slideDown(300);
  });

      //hide text on mouseout

  $('.play').on('mouseout', function(e){
    $('.sample').slideUp(300);
  });

  // BACK BUTTON FUNCTION

  $('.back-button').on('click', function(e) {
    window.history.back();
  });

});
