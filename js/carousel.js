$(document).ready(function(){

  console.log('carousel js is working');



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
