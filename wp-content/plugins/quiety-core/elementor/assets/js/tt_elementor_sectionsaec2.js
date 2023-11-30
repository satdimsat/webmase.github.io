;( function( $, window ) {
    'use strict';
    $(window).on('elementor/frontend/init', function (){

        function dtSectionParallax( $scope ){
            $scope.dtSectionParallaxInit();
            $scope.dtSectionShapeDividerInit();
            $scope.quietySliderInit();
            $scope.quietyTestimonials_6();
            $scope.quietyTestimonials_7();
            $scope.quietyTestimonials_8();
            $scope.quietyTestimonials_9();
        }

        window.elementorFrontend.hooks.addAction( 'frontend/element_ready/section', dtSectionParallax);

    });

    // Add dt Parallax Section
    $.fn.dtSectionParallaxInit = function( options ){
        var defaults = {};
        
        return this.each(function( ) {

            var self = $(this),
            dtParallax = {
                editorMode: window.elementorFrontend.isEditMode(),
                itemId: $(this).data('id'),
                options: false,
                globalVars: 'add_background_animation',
                backEndVars: null,
                items: [],
            };

            var init = function() {
                setParallaxItem();
            },
            setParallaxItem = function(){
                var settings;

                var checkEnabledParallax = parallaxEffectEnabled();

                if(!checkEnabledParallax){
                    return;
                }

                if ( ! dtParallax.editorMode ) {
                    settings = buildFrontParallax();
                } else {
                    settings = buildBackendParallax();
                }

                if ( ! settings ) {
                    return;
                }

                build( settings );
                hideMobile();

            },
            parallaxEffectEnabled = function(){
                var settings = {};

                if ( ! dtParallax.editorMode ) {
                    settings = tt_parallax_settings[0][dtParallax.itemId];
                    
                    if(!settings){
                        return;
                    }
                    
                    if(!settings.hasOwnProperty(dtParallax.globalVars) || !settings[dtParallax.globalVars]){
                        return;
                    }
                }else{      
                    if(!window.elementor.elements){
                        return;
                    }

                    if(!window.elementor.elements.models){
                        return;
                    }
 
                    window.elementor.elements.models.forEach(function( value ){
                        if ( dtParallax.itemId == value.id ) {
                            dtParallax.backEndVars = value.attributes.settings.attributes;
                        }
                    });

                    if(!dtParallax.backEndVars){
                        return;
                    }

                    if(!dtParallax.backEndVars.hasOwnProperty(dtParallax.globalVars) || !dtParallax.backEndVars[dtParallax.globalVars]){
                        return;
                    } 

                    settings = dtParallax.backEndVars;
                }

                return settings;
            },
            buildFrontParallax = function() {
                var settings = tt_parallax_settings[0][dtParallax.itemId];
                settings = settings['items_parallax']; 
                return settings;
            },
            buildBackendParallax = function() {

                if(!window.elementor.elements.models){
                    return;
                }

                var arr = [];

                if ( ! dtParallax.backEndVars.hasOwnProperty( 'items_parallax' ) ) {
                    return false;
                }

                dtParallax.backEndVars[ 'items_parallax' ].models.forEach(function( value ){
                    arr.push( value.attributes );
                });

                return arr;
            },
            appendElement = function( settings ) {
                var node_str = '';

                if(settings.image_bg.url){
                    node_str  = '<div data-item-id="' + settings._id + '" class="extended-parallax elementor-repeater-item-' + settings._id + '">'; 
                    node_str += '<img  src="' + settings.image_bg.url + '"/>';
                    node_str += '</div>';                    
                }

                if( !$(self).find( '.elementor-repeater-item-'+settings._id ).length > 0 ){
                    $(self).append(node_str);                  
                }

                dtParallax.items.push(settings);
    
                var item = jQuery(self).find('.extended-parallax');
                if (item.length !== 0 ) {
                    item.each( function() {
                        if(settings._id == jQuery(this).data('itemId')){
                            if(settings.image_effect == 'mouse'){
                                if(!jQuery(this).closest('.elementor-section').hasClass('tt-parallax-mouse')){
                                    jQuery(this).closest('.elementor-section').addClass('tt-parallax-mouse');
                                }
                                
                                jQuery(this).wrapInner('<div class="tt-parallax-layer layer" data-depth="' + settings.parallax_factor + '"></div>');
                            }else if( settings.image_effect == 'scroll' ){
                                if( dtParallax.editorMode ){
                                    jQuery(this).paroller({  
                                        factor: settings.parallax_factor,       
                                        type: 'foreground',     // background, foreground  
                                        direction: settings.parallax_dir, // vertical, horizontal  
                                            
                                    });  
                                    jQuery(this).css({'transform' : 'unset'});
                                }else{
                                    jQuery(this).paroller({  
                                        factor: settings.parallax_factor,         
                                        type: 'foreground',     // background, foreground  
                                        direction: settings.parallax_dir, // vertical, horizontal  
                                        
                                    });  
                                }                                
                            }else if( settings.image_effect == 'css_animation' ){
                                var self = $(this);
                                
                                if(self.is_visible()){
                                     self.addClass( settings.animation_name );
                                }
                                jQuery(window).on('resize scroll', function() {
                                    if(self.is_visible()){
                                      self.addClass( settings.animation_name );
                                    }
                                });
                            }
                        }
                    });

                    if(settings.image_effect == 'mouse'){
                        jQuery('.tt-parallax-mouse').each(function(){
                            var scene = jQuery(this).get(0);
                            var parallaxInstance = new Parallax(scene, { hoverOnly: true, selector: '.tt-parallax-layer', pointerEvents: true });
                        });                          
                    }
                }
            },
            hideMobile = function(){
                if(dtParallax.items){
                    $.each( dtParallax.items, function( index, value ) {
                        if(value.hide_on_mobile){
                            if (jQuery(window).width() <= value.hide_mobile_resolution) {
                                jQuery('.extended-parallax[data-item-id="'+ value._id +'"]').css({ 'opacity' : '0', 'visibility' : 'hidden' });
                            }else{
                                jQuery('.extended-parallax[data-item-id="'+ value._id +'"]').css({ 'opacity' : '1',  'visibility' : 'visible' });
                            }                            
                        }
                    });  
                }
            },
            build = function( settings ) {
                $.each( settings, function( index, value ) {
                    appendElement(value);
                });


            };

            /*Init*/
            init();

            jQuery( window ).resize(
                function() {
                    hideMobile();
                }
            );
        });   
    };

    // Add dt Shape Divider
    $.fn.dtSectionShapeDividerInit = function( options ){
        var defaults = {};
        
        return this.each(function( ) {

            var self = $(this),
            dtShapeDivider = {
                editorMode: window.elementorFrontend.isEditMode(),
                itemId: $(this).data('id'),
                options: false,
                globalVars: 'add_shape_divider',
                backEndVars: [],
                items: [],
            };

            var init = function() {
                setShapeDividerItem();
            },
            setShapeDividerItem = function(){
                var settings;

                var checkEnabledParallax = ShapeDividerEnabled();

                if(!checkEnabledParallax){
                    return;
                }

                if ( ! dtShapeDivider.editorMode ) {
                    settings = buildFrontShapeDivider();
                } else {
                    settings = buildBackendShapeDivider();
                }

                if ( ! settings ) {
                    return;
                }

                build( settings );

            },
            ShapeDividerEnabled = function(){
                var settings = {};

                if ( ! dtShapeDivider.editorMode ) {
                    settings = tt_parallax_settings[0][dtShapeDivider.itemId];
                    
                    if(!settings){
                        return;
                    }
                    
                }else{      
                    if(!window.elementor.elements){
                        return;
                    }

                    if(!window.elementor.elements.models){
                        return;
                    }

                    window.elementor.elements.models.forEach(function( value ){
                        if ( dtShapeDivider.itemId == value.id ) {
                            dtShapeDivider.backEndVars[dtShapeDivider.itemId] = value.attributes.settings.attributes;
                            settings = value.attributes.settings.attributes;
                        }
                    } );
                }

                return settings;
            },
            buildFrontShapeDivider = function() {
                var settings = tt_parallax_settings[0];
                return settings;
            },
            
            buildBackendShapeDivider = function() {

                if(!window.elementor.elements.models){
                    return;
                }

                var arr = [];

                arr = dtShapeDivider.backEndVars;

                return arr;
            },
            
            getSvgURL = function(fileName) {
                var svgURL = tt_parallax_settings.svgURL + fileName + '.svg';

                return svgURL;
            },

            appendElement = function(settings ) {

                var $item = settings[$(self).data('id')];

                if(!$item){
                    return;
                }

                var node_str = '',
                svgURL = '';
                
                if( $item.tt_shape_divider_top !== '' ){
                    
                    svgURL = getSvgURL( $item.tt_shape_divider_top );


                    
                    node_str  = '<div class="tt-divider tt-elementor-shape tt-elementor-shape-top"></div>';
                    $(self).prepend(node_str);

                    console.log(svgURL)
                    
                    jQuery.get(svgURL, function (data) {
                        $(self).find('.tt-divider.tt-elementor-shape-top').empty().append(data.childNodes[0]);
                    });                 
                }



                if( $item.tt_shape_divider_bottom  !== ''  ){

                    svgURL = getSvgURL( $item.tt_shape_divider_bottom );

                    node_str  = '<div class="tt-divider tt-elementor-shape tt-elementor-shape-bottom"></div>';
                    $(self).prepend(node_str); 

                    jQuery.get(svgURL, function (data) {
                        $(self).find('.tt-divider.tt-elementor-shape-bottom').empty().append(data.childNodes[0]);
                    });  
                }                        
            },
            
            build = function( settings ) {
                appendElement(settings);
            };

            /*Init*/
            init();

        });   
    };

    
    // Swiper Slider JS
    $.fn.quietySliderInit = function (options) {
        var swiper_container = $(".hero-slider");
        if (swiper_container.length) {
            swiper_container.each(function () {
                var t = $(this),
                    i = ($(this).attr("id"), $(this).data("perpage") || 1),
                    a = $(this).data("loop"),
                    e = $(this).data("speed") || 1000,
                    o = $(this).data("space") || 0,
                    l = $(this).data("effect"),
                    c = $(this).data("center"),
                    pl = $(this).data("autoplay"),
                    nex = $(this).data("next"),
                    pre = $(this).data("prev"),
                    pag = $(this).data("pagination"),
                    pagtype = $(this).data("paginationtype"),
                    d = $(this).data("direction") || "horizontal",
                    r = $(this).data("breakpoints");
                new Swiper(t, {
                    slidesPerView: i,
                    direction: d,
                    spaceBetween: o,
                    loop: a,
                    speed: e,
                    effect: l,
                    breakpoints: r,
                    centeredSlides: c,
                    autoplay: pl,
                    pagination: {
                        el: pag,
                        type: pagtype,
                        clickable: !0
                    },
                    navigation: {
                        nextEl: nex,
                        prevEl: pre
                    }
                })
            })
            swiper_container.hover(function () {
                (this).swiper.autoplay.stop();
            }, function () {
                (this).swiper.autoplay.start();
            });

        }
    }


    $.fn.quietyTestimonials_6 = function (options) {
        var swiper = new Swiper(".payment-testimonial-slider", {
            slidesPerView: 2,
            spaceBetween: 24,
            speed: 1000,
            autoplay: {
                delay: 3000
            },
            slidesPerGroup: 1,
            loop: true,
            breakpoints: {
                320: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 2
                },
                991: {
                    slidesPerView: 3
                }
            }
        });
    }

    $.fn.quietyTestimonials_7 = function () {
        var swiper = new Swiper(".digi-testimonial-wrapper", {
            slidesPerView: 1,
            loop: true,
            speed: 800,
            navigation: {
                nextEl: ".digi-nav-control .swiper-button-next",
                prevEl: ".digi-nav-control .swiper-button-prev"
            }
        }); //digital marketing testimonial
    }

    $.fn.quietyTestimonials_8 = function () {
        var swiper = new Swiper(".ins-feedback-slider", {
            slidesPerView: 1,
            loop: true,
            speed: 800,
            autoplay: true,
            navigation: {
                nextEl: '.swiper-btn-next',
                prevEl: '.swiper-btn-prev'
            },
            breakpoints: {
                0: {
                    spaceBetween: 40
                },
                1200: {
                    spaceBetween: 90
                }
            }
        }); //insurance brand slider
    }

    $.fn.quietyTestimonials_9 = function () {
        var mkCarousel = $("#mkCarousel");
        $("#mkCarouselControl button").each(function () {
            $(this).on("click", function () {
                $(this).parent().find('button.active').removeClass("active");
                $(this).addClass("active");
            });
        });
        mkCarousel.on("slide.bs.carousel", function () {
            var findNumber = mkCarousel.find(".active").index();
            findNumber = findNumber + 2;
            var totalSlides = $('#mkCarousel .carousel-item').length;

            if (findNumber > totalSlides) {
                findNumber = 1;
            }

            $('#mkCarouselControl').find('button.active').removeClass("active");
            $('#mkCarouselControl button:nth-child(' + findNumber + ')').addClass("active");
        });
    }



}( jQuery, window ) );

