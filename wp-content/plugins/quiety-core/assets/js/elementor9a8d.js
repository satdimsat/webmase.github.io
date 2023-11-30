(function ($, elementor) {
    "use strict";

    var Quiety = {

        init: function () {

            var widgets = {
                'tt-hero-static.default': Quiety.Banner,
                'tt-portfolio-slider.default': Quiety.Slider,
                'tt-blog-slider.default': Quiety.BlogSlider,
                'tt-tab.default': Quiety.Tabs,
                'tt-tab-two.default': Quiety.Tabs,
                'tt-content-tabs.default': Quiety.TabsHistory,
                'tt-google-map.default': Quiety.GoogleMap,
                'tt-testimonial.default': Quiety.Testimonial,
                'tt-timeline.default': Quiety.Timeline,
                'tt-testimonial-two.default': Quiety.TestimonialTwo,
                'tt-logo-carousel.default': Quiety.Logo,
                'tt-pricing-table-two.default': Quiety.Pricing,
                'tt-coming-soon.default': Quiety.Counting,
                'tt-countdown.default': Quiety.Counting,
                'tt-button.default': Quiety.popupVideo,
                'tt-popup-video.default': Quiety.popupVideo,
                'quiety_client_logo.default': Quiety.clientLogo,
                'quiety_image_carousel.default': Quiety.imageCarousel,
                'tt-pricing-box-two.default': Quiety.pricingTableTabs,
                'quiety_about_slider.default': Quiety.aboutSlider,
                'quiety_thumbnail_testimonial.default': Quiety.ThumbnailTestimonials,
                'quiety_table_title.default': Quiety.TableTabsTitle,
                'quiety_team_slider.default': Quiety.TeamSlider,
                'quiety_portfolio_slider.default' : Quiety.PortfolioSlider,
                'quiety_goal_stages.default' : Quiety.GoalStage,

            };
            $.each(widgets, function (widget, callback) {
                elementor.hooks.addAction('frontend/element_ready/' + widget, callback);
            });
        },
          

        GoalStage: function($scope){
            // Goal Slider 
            const goalSlider = document.querySelector('.ca-goal-slider');
            if (goalSlider) {
                const goalSliderInit = new Swiper(goalSlider, {
                loop: true,
                slidesPerView: 1,
                spaceBetween: 24,
                breakpoints: {
                    768: {
                    slidesPerView: 2
                    },
                    1200: {
                    slidesPerView: 3
                    }
                },
                pagination: {
                    el: '.ca-goal-slider__pagination',
                    clickable: true
                }
                });
            }
        },

        //PortfolioSlider
        PortfolioSlider: function($scope) {
            
            var dgPortfolioSlider = new Swiper(".dg-portfolio-slider", {
                spaceBetween: 24,
                pagination: {
                  el: '.dg-portfolio-slider-control',
                  type: 'bullets',
                  clickable: true
                },
                breakpoints: {
                  0: {
                    slidesPerView: 1
                  },
                  768: {
                    slidesPerView: 2
                  },
                  1200: {
                    slidesPerView: 3
                  }
                }
            });

        },

        //Team Slider 
        TeamSlider: function ($scope) {
            var dgTeamSlider = new Swiper(".dg-team-slider", {
                spaceBetween: 24,
                loop: true,
                pagination: {
                  el: '.dg-team-slider-controls',
                  type: 'bullets',
                  clickable: true
                },
                breakpoints: {
                  0: {
                    slidesPerView: 1
                  },
                  425: {
                    slidesPerView: 2
                  },
                  768: {
                    slidesPerView: 3
                  },
                  992: {
                    slidesPerView: 2
                  },
                  1400: {
                    slidesPerView: 3
                  }
                }
            });
        },

        //Table Title
        TableTabsTitle: function ($scope) {
            $(".crm-monthly").each(function () {
                $(this).on("click", function () {
                    $(this).parents(".crm-pricing-switch-wrapper").find(".crm-checkbox-switch").prop("checked", false);
                });
            });
            $(".crm-yearly").each(function () {
                $(this).on("click", function () {
                    $(this).parents(".crm-pricing-switch-wrapper").find(".crm-checkbox-switch").prop("checked", true);
                });
            });
            $(".crm-pricing-switch").each(function () {
                $(this).on("click", function () {
                    var isBoxChecked = $(this).find(".crm-checkbox-switch").is(":checked");

                    if (isBoxChecked !== true) {
                        $(this).parents(".table").find(".crm_monthly_price").show();
                        $(this).parents(".table").find(".crm_yearly_price").hide();
                    } else {
                        $(this).parents(".table").find(".crm_monthly_price").hide();
                        $(this).parents(".table").find(".crm_yearly_price").show();
                    }
                });
            });

        },
        
        //feedback slider
        ThumbnailTestimonials:function($scope) {
            
            var crmFeedbackSlider = new Swiper('.crm-feedback-slider', {
                spaceBetween: 10,
                autoplay: true,
                speed: 800,
                navigation: {
                  nextEl: '.crm-next-control-outer',
                  prevEl: '.crm-prev-control-outer'
                },
                loop: true,
                loopedSlides: 4
            });
            var crmFeedbackThumbSlider = new Swiper('.crm-feedback-control-slider', {
                spaceBetween: 0,
                centeredSlides: true,
                slidesPerView: 5,
                touchRatio: 0.2,
                slideToClickedSlide: true,
                loop: true,
                speed: 800,
                loopedSlides: 4,
                effect: 'coverflow',
                coverflowEffect: {
                  rotate: 0,
                  slideShadows: false,
                  scale: 1,
                  stretch: 12,
                  depth: 185
                }
            });
            crmFeedbackSlider.controller.control = crmFeedbackThumbSlider;
            crmFeedbackThumbSlider.controller.control = crmFeedbackSlider;
        },

        // About Slider ===========================
        aboutSlider:function($scope){
            //crm htw slider
            var swiper = new Swiper(".crm-htw-slider", {
                slidesPerView: 2,
                loop: true,
                speed: 800,
                spaceBetween: 24,
                autoplay: true,
                pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
                clickable: true
                },
                breakpoints: {
                0: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 2
                },
                992: {
                    slidesPerView: 1
                },
                1200: {
                    slidesPerView: 2
                }
                }
            });

            var crmTotalSlide = $(".crm-htw-slider .swiper-wrapper .crm-htw-single").length;
            if (crmTotalSlide < 10) {
                $(".crm_total_value").text("0" + crmTotalSlide);
            } else {
                $(".crm_total_value").text(crmTotalSlide);
            }
            
        },

        //================= Image Carousel =================//
        pricingTableTabs:function ($scope) {

            $(".mk-pricing-control li a").each(function () {
                $(this).on("click", function () {
                    $(this).parents(".mk-pricing-control").find('a.active').removeClass("active");
                    $(this).addClass("active");
                });
            });
            $(".mk-pricing-control .mk_monthly_switch").on("click", function () {
                $(".mk_monthly_price").show();
                $(".mk_yearly_price").hide();
                return false;
            });
            $(".mk-pricing-control .mk_yearly_switch").on("click", function () {
                $(".mk_monthly_price").hide();
                $(".mk_yearly_price").show();
                return false;
            }); //mk feedback slider


            //sc pricing component
            if ($(".sc-pricing-switch").length) {
                var pricingSwitchBtn = $(".sc-pricing-switch");
                var dataActiveValue = pricingSwitchBtn.find("button.active").data("value");
                if (dataActiveValue == 'monthly') {
                $(".sc-pricing-column").find(".pricing-amount.yearly").hide();
                $(".sc-pricing-column").find(".pricing-amount.monthly").show();
                } else if (dataActiveValue == 'yearly') {
                $(".sc-pricing-column").find(".pricing-amount.yearly").show();
                $(".sc-pricing-column").find(".pricing-amount.monthly").hide();
                }
                $(".sc-pricing-switch button").each(function () {
                $(this).on("click", function () {
                    var dataActiveValue = $(this).data("value");
                    $(this).parents(".sc-pricing-switch").find("button.active").removeClass("active");
                    $(this).addClass("active");
                    if (dataActiveValue == 'monthly') {
                    $(".sc-pricing-column").find(".pricing-amount.yearly").hide();
                    $(".sc-pricing-column").find(".pricing-amount.monthly").show();
                    } else if (dataActiveValue == 'yearly') {
                    $(".sc-pricing-column").find(".pricing-amount.yearly").show();
                    $(".sc-pricing-column").find(".pricing-amount.monthly").hide();
                    }
                });
                });
            }
        },

        //================= Image Carousel =================//
        imageCarousel:function ($scope) {

            let gallerySlider = $scope.find('.ins-gallery-slider');

            if ( gallerySlider.length > 0 ) {
                var swiper = new Swiper(".ins-gallery-slider", {
                    slidesPerView: 3,
                    loop: true,
                    speed: 800,
                    spaceBetween: 24,
                    navigation: {
                        nextEl: '.swiper-btn-next',
                        prevEl: '.swiper-btn-prev'
                    },
                    breakpoints: {
                        0: {
                            slidesPerView: 1,
                            centeredSlides: false
                        },
                        768: {
                            slidesPerView: 3,
                            centeredSlides: true
                        }
                    }
                }); //insurance gallery slider
            }

        },


        //================= Client Logo =================//
        clientLogo: function ($scope) {

            var slideInit = $scope.find('[data-swiper]');

            slideInit.each(function () {
                var swps = document.querySelectorAll('[data-swiper]');

                if (swps.length > 0) {
                    swps.forEach(function (swp) {
                        var config = JSON.parse(swp.getAttribute('data-swiper'));
                        var mySwiper = new Swiper(swp, config);

                        $('.swiper-slide').on('mouseover', function () {
                            mySwiper.autoplay.stop();
                        });

                        $('.swiper-slide').on('mouseout', function () {
                            mySwiper.autoplay.start();
                        });
                    });
                }
            });

        },

        popupVideo: function ($scope) {

            let popupYoutube = $scope.find('.popup-youtube');
            if ( popupYoutube.length > 0 ) {
                popupYoutube.magnificPopup({
                    disableOn: 700,
                    type: "iframe",
                    mainClass: "mfp-fade",
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: false
                });
            }

        },


        Banner: function ($scope) {
            var element = $scope.find('.animate-element');

            var $scene = element.parallax({
                scalarX: 100,
                scalarY: 100,
            });

            let popupYoutube = $scope.find('.popup-youtube');
            if ( popupYoutube.length > 0 ) {
                popupYoutube.magnificPopup({
                    disableOn: 700,
                    type: "iframe",
                    mainClass: "mfp-fade",
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: false
                });
            }

        },


        Tabs: function ($scope) {
            var tabnav = $scope.find('#tt-tabs-nav li');

            $('#tt-tabs-nav li:nth-child(1)').addClass('active');
            $('#tt-tabs-content .content').hide();
            $('#tt-tabs-content .content:nth-child(1)').show();

            // Tab Click function
            tabnav.on('click', function () {
                $('#tt-tabs-nav li').removeClass('active');
                $(this).addClass('active');
                $('#tt-tabs-content .content').hide();

                var activeTab = $(this).find('a').attr('href');
                $(activeTab).fadeIn(600);
                return false;
            });
        },

        TabsHistory: function ($scope) {

            var tabnav = $scope.find('#content-tabs-nav li');

            $('#content-tabs-nav li:nth-child(1)').addClass('active');
            $('#tt-content-tabs-content .content').hide();
            $('#tt-content-tabs-content .content:nth-child(1)').show();

            // Tab Click function
            tabnav.on('click', function () {
                $('#content-tabs-nav li').removeClass('active');
                $(this).addClass('active');
                $('#tt-content-tabs-content .content').hide();

                var activeTab = $(this).find('a').attr('href');
                $(activeTab).fadeIn(400);
                return false;
            });
        },

        Pricing: function ($scope) {
            var pricing = $scope.find('.pricing_wrapper');

            if ($(".pricing_wrapper").length > 0) {
                pricing.each(function () {
                    if ($(window).width() < 991) {
                        return;
                    }

                    $(this).find(".row").append('<div class="indicator"></div>');

                    var leftPos = $(this)
                            .find(".grid")
                            .eq(1)
                            .position().left,
                        column = $(this).find(".grid"),
                        indicator = ".indicator";

                    column.siblings(indicator).css("width", column.outerWidth());
                    column.siblings(indicator).css("left", leftPos);

                    column.on("mouseenter mouseleave", function (event) {
                        if (event.type === "mouseenter") {
                            $(this)
                                .siblings(indicator)
                                .css("left", $(this).position().left);
                        }
                        if (event.type === "mouseleave") {
                            $(this)
                                .siblings(indicator)
                                .css("left", leftPos);
                        }
                    });
                });
            }
        },

        GoogleMap: function ($scope) {
            var map = $scope.find('.gmap3-area');


            map.each(function () {
                var $this = $(this),
                    key = $this.data('key'),
                    lat = $this.data('lat'),
                    lng = $this.data('lng'),
                    mrkr = $this.data('mrkr'),
                    zoom = $this.data('zoom'),
                    scrollwheel = $this.data('scrollwheel') || false;

                $this.gmap3({
                    center: [lat, lng],
                    zoom: zoom,
                    scrollwheel: scrollwheel,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    styles: [{
                        "featureType": "administrative.country",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "visibility": "on"
                        }]
                    }]
                })
                // .marker(function (map) {
                //     return {
                //         position: map.getCenter(),
                //         icon: mrkr
                //     };
                // })

            });

        },

        Counting: function ($scope) {

            var counting = $scope.find('.countdown');

            counting.each(function (index, value) {
                var count_year = $(this).attr("data-count-year");
                var count_month = $(this).attr("data-count-month");
                var count_day = $(this).attr("data-count-day");
                var count_date = count_year + '/' + count_month + '/' + count_day;
                $(this).countdown(count_date, function (event) {
                    $(this).html(
                        event.strftime('<div class="counting"><span class="CountdownContent">%D<span class="CountdownLabel">Days</span></span><span class="CountdownSeparator">:</span></div><div class="counting"><span class="CountdownContent">%H <span class="CountdownLabel">Hours</span></span><span class="CountdownSeparator">:</span></div><div class="counting"><span class="CountdownContent">%M <span class="CountdownLabel">Minutes</span></span><span class="CountdownSeparator">:</span></div><div class="counting"><span class="CountdownContent">%S <span class="CountdownLabel">Seconds</span></span></div>')
                    );
                });
            });

        },

        Slider: function ($scope) {
            var slideInit = $scope.find('[data-swiper]'); 

            slideInit.each(function () {
                var swps = document.querySelectorAll('[data-swiper]');

                if (swps.length > 0) {
                    swps.forEach(function (swp) {
                        var config = JSON.parse(swp.getAttribute('data-swiper'));
                        var mySwiper = new Swiper(swp, config);

                        $('.swiper-slide').on('mouseover', function () {
                            mySwiper.autoplay.stop();
                        });

                        $('.swiper-slide').on('mouseout', function () {
                            mySwiper.autoplay.start();
                        });
                    });

                }


            });
        },

        BlogSlider: function ($scope) {
            var slideInit = $scope.find('[data-blog]');

            slideInit.each(function () {
                var swps = document.querySelectorAll('[data-blog]');

                if (swps.length > 0) {
                    swps.forEach(function (swp) {
                        var config = JSON.parse(swp.getAttribute('data-blog'));
                        var mySwiper = new Swiper(swp, config);

                        $('.swiper-slide').on('mouseover', function () {
                            mySwiper.autoplay.stop();
                        });

                        $('.swiper-slide').on('mouseout', function () {
                            mySwiper.autoplay.start();
                        });
                    });
                }
            });
        },

        Testimonial: function ($scope) {

            var slideInit = $scope.find('[data-testi]');

            slideInit.each(function () {
                var swps = document.querySelectorAll('[data-testi]');

                if (swps.length > 0) {
                    swps.forEach(function (swp) {
                        var config = JSON.parse(swp.getAttribute('data-testi'));
                        var mySwiper = new Swiper(swp, config);

                        $('.swiper-slide').on('mouseover', function () {
                            mySwiper.autoplay.stop();
                        });

                        $('.swiper-slide').on('mouseout', function () {
                            mySwiper.autoplay.start();
                        });
                    });

                }
            });

            let dgFeedbSlider = $scope.find('.dg-feedback-slider');
            if(dgFeedbSlider.length > 0 ){
                var dgFeedbackSlider = new Swiper(".dg-feedback-slider", {
                    spaceBetween: 24,
                    autoplay: true,
                    speed: 700,
                    loop: true,
                    breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1200: {
                        slidesPerView: 3
                    }
                    }
                });
            }

            // Testimonial Slider 
            let caTestimonialSlider = $scope.find('.ca-testimonial-slider');
            if( caTestimonialSlider.length > 0 ){
                const testimonialSlider = document.querySelector('.ca-testimonial-slider');
                if (testimonialSlider) {
                    const testimonialSliderInit = new Swiper(testimonialSlider, {
                    loop: true,
                    slidesPerView: 1,
                    spaceBetween: 24,
                    breakpoints: {
                        768: {
                        slidesPerView: 2
                        },
                        1200: {
                        slidesPerView: 3
                        }
                    },
                    pagination: {
                        el: '.ca-testimonial-slider__pagination',
                        clickable: true
                    }
                    });
                }
            }

        },

        Timeline: function ($scope) {

            var slideInit = $scope.find('[data-timeline]');

            slideInit.each(function () {
                var swps = document.querySelectorAll('[data-timeline]');

                if (swps.length > 0) {
                    swps.forEach(function (swp) {
                        var config = JSON.parse(swp.getAttribute('data-timeline'));
                        var mySwiper = new Swiper(swp, config);

                        $('.swiper-slide').on('mouseover', function () {
                            mySwiper.autoplay.stop();
                        });

                        $('.swiper-slide').on('mouseout', function () {
                            mySwiper.autoplay.start();
                        });
                    });

                }
            });
        },

        TestimonialTwo: function ($scope) {

            var slideInit = $scope.find('.slider-thumbs');

            var swiper = new Swiper( slideInit, {
                spaceBetween: 20,
                slidesPerView: 3,
                freeMode: true,
                loop: true,
                speed: 700,
            });

            var swiper2 = new Swiper(".slider-top", {
                loop: true,
                speed: 700,
                spaceBetween: 0,
                navigation: {
                    nextEl: ".testi-button-next",
                },
                thumbs: {
                    swiper: swiper,
                },
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
            });

        },

        Logo: function ($scope) {

            var slideInit = $scope.find('[data-logo]');

            slideInit.each(function () {
                var swps = document.querySelectorAll('[data-logo]');

                if (swps.length > 0) {
                    swps.forEach(function (swp) {
                        var config = JSON.parse(swp.getAttribute('data-logo'));
                        var mySwiper = new Swiper(swp, config);

                        $('.swiper-slide').on('mouseover', function () {
                            mySwiper.autoplay.stop();
                        });

                        $('.swiper-slide').on('mouseout', function () {
                            mySwiper.autoplay.start();
                        });
                    });
                }

            });
        },
    };
    $(window).on('elementor/frontend/init', Quiety.init);
}(jQuery, window.elementorFrontend));