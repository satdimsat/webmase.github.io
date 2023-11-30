;(function($) {
    // Strict Mode
    'use strict';

    $(document).ready(function () {



        //Back to Top Button
        let backToTopBtn = $('#back-to-top')

        $(window).scroll(function () {
            if ($(window).scrollTop() > 300) {
                backToTopBtn.addClass("show");
            } else {
                backToTopBtn.removeClass("show");
            }
        });

        backToTopBtn.on("click", function (e) {
            e.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, "300");
        });


    })

})(jQuery);