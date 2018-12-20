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

  // FADE IN FLASH CARDS ON HOME PAGE
   $('.flash-card-array').hide().removeClass('hidden').slideDown(200);

  $('.flash-card').hide().delay(100).fadeIn(400);

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

  // BACK BUTTON FUNCTION

  $('.back-button').on('click', function(e) {
    window.history.back();
  });

});
