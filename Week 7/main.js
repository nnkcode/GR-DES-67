$(document).ready(function(){ 
    
    $('#myCarousel').carousel({
        interval: 200
    })

    $('#myCarousel').on('slide.bs.carousel', function (e) {
        console.log(e);
    })

    $('#myModal').modal({
        backdrop: false,
        keyboard: false
    })


    $('.js-modal').click(function() {
        if($('#form').is(':valid')) {
            $('myModal').modal('hide');
        }
      // if(true) { $("#myModal").modal('hide); }
    
    })
});

$(window).on('load', function() {
    $('#myCarousel').carousel ({
        interval: 200
    });

    $('#myModal').modal({
        backdrop: false,
        keyboard: false
      });
});