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

 //EXPERIMENTAL APLAYER code

 $('.expand').hide().removeClass('hidden');

 $('.hover-expand').on('mouseover', function(e){
   $('.expand').slideDown(300).addClass('expanded');
   $('.fa-play').hide(300);

 });

 const ap = new APlayer({
   container: document.querySelector('#aplayer'),
   audio: [{
     name: document.querySelector('#playerTitle').innerHTML,
     artist: document.querySelector('#playerArtist').innerHTML,
     url: document.querySelector('.sample-track').innerHTML,
     //cover: document.querySelector('#playerCover').src
   }]
 });

  // BACK BUTTON FUNCTION


  $('.back-button').on('click', function(e) {
    window.history.back();
  });

});
