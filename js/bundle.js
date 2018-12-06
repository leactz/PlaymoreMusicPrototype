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

  // toggle between play and pause buttons on click
  $('.play').on('click', function(e) {
    $(this).toggleClass('fa-pause fa-play');

  });
  // PLAY AND PAUSE MUSIC - EXPERIMENTAL, NOT WORKING YET
  let sampleTrack =  document.querySelector('.sample-track');
  //play
  $('.fa-play').on('click', function(e) {
    sampleTrack.play();
  });
  //pause
  $('#audioToggle .fa-pause').on('click', function(e) {
   sampleTrack.pause();
   console.log('audio paused');
 });

  // BACK BUTTON FUNCTION

  $('.back-button').on('click', function(e) {
    window.history.back();
  });

});
