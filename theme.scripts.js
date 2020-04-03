(function ($) {
    "use strict";

    /**!-------------------------------------------
        01. PRELOADER
    --------------------------------------------**/
    var $mainwindow = $(window);
    $mainwindow.on('load', function() {

        $("#loader").fadeOut(1000);
    });
    
    /**!-------------------------------------------
        04. WOW JS INIT
    --------------------------------------------**/
    new WOW().init();

    /**!-------------------------------------------
        04. PROGRESS BAR LEVEL
    --------------------------------------------**/
    if( $('.progress-levels .progress-box .bar-fill').length){
        $('.progress-box .bar-fill').each(function() {
            var progressWidth = $(this).attr('data-percent');
            $(this).css('width',progressWidth+'%');
            $(this).children('.percent').html(progressWidth+'%');
        });
    }
    
})(jQuery);