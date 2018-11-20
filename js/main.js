// confirm that javascript has loaded

$(document).ready(function() {

  console.log("js is working");

  //show burger menu on smaller than 1023px
  if (window.innerWidth <= 1023) {
      $('#navToggle').removeClass('hidden');
      console.log('window is now 1023px or smaller');
    }

  // toggle navigation list and navigation toggle
  $('#navToggle').on('click', function(e) {

    if ( $(this).hasClass('fa-bars')) {

      $('#navExpand').removeClass('hide-small').fadeIn();
      $(this).removeClass('fa-bars').addClass('fa-times');
    } else {
      $('#navExpand').fadeOut();
      $(this).removeClass('fa-times').addClass('fa-bars');
    }


  });


//featured playlists carousel


});
