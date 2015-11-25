$(document).ready(function() {

    $('#header div').click(function() {
        if (! $(this).hasClass('active')) {

            var id = '#s-' + $(this).attr('id');
            var $lefty = $(id);

            $('.circles').removeClass('active');
            $(this).addClass('active');

            $('#slider-container > div.slider').animate({
                left: -1000
            });
            $('#slider-container').height(parseInt($lefty.css('height'),10));
            $lefty.animate({
                left: parseInt($lefty.css('left'),10) == 0 ?
                -$lefty.outerWidth() :
                0
            });
        }
    });
});
