!function(i){var a={};function n(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=i,n.c=a,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({"./src/js/app.js":function(e,t){var i={};!function(r){"use strict";window.TT={init:function(){this.header=r(".site-header"),this.body=r("body"),this.wpadminbar=r("#wpadminbar"),this.headerFixed={initialOffset:parseInt(this.header.attr("data-fixed-initial-offset"))||100,enabled:r("[data-header-fixed]").length,value:!1,mobileEnabled:r("[data-mobile-header-fixed]").length,mobileValue:!1},this.siteTitle=this.header.find(".site-title"),this.logo=this.header.find(".main-logo"),this.logoForOnepage=this.header.find(".for-onepage"),this.logoForOnepageLight=this.logoForOnepage.find(".light"),this.megaMenu=this.header.find("#mega-menu-wrap"),this.mobileMenu=r("[data-mobile-menu-resolution]").data("mobile-menu-resolution"),this.resize()},resize:function(){this.isDesktop=991<=r(window).width(),this.isMobile=r(window).width()<=991,this.isPad=r(window).width()<=1024,this.isMobileMenu=r(window).width()<=TT.mobileMenu}},i.initialize={init:function(){i.initialize.general(),i.initialize.swiperSlider(),i.initialize.countUp(),i.initialize.portfolio(),i.initialize.sectionSwitch(),i.initialize.contactFrom(),i.initialize.googleMap(),i.initialize.handleMobileHeader()},general:function(){r(".animated-element").parallax({scalarX:100,scalarY:100});r(".tt-content-filter li a").on("click",function(){var e=r(this).attr("data-filter");r(this).addClass("active").siblings().removeClass("active"),"*"==e?r(".tt-support-item").fadeIn("1000"):(r(".tt-support-item").not("."+e).hide(),r(".tt-support-item").filter("."+e).fadeIn("1000"))}),r("#search-menu-wrapper").removeClass("toggled"),r("#search-icon").on("click",function(e){e.stopPropagation(),r("#search-menu-wrapper").toggleClass("toggled"),r("#popup-search").focus()}),r("#search-menu-wrapper input").on("click",function(e){e.stopPropagation()}),r("#search-menu-wrapper, body").on("click",function(){r("#search-menu-wrapper").removeClass("toggled")}),r("body").hasClass("admin-bar")&&r("body").addClass("header-position");var t=r("body"),i=r(".canvas-menu-wrapper");r("#page-open-main-menu").on("click",function(e){e.preventDefault();r('<div class="mask-overlay">').hide().appendTo("body").fadeIn("fast"),i.addClass("open"),r(".tt-hamburger").addClass("active"),t.addClass("page-popup-open"),r("html").addClass("no-scroll sidebar-open").height(window.innerHeight+"px")}),r("#page-close-main-menu, .mask-overlay").on("click",function(e){e.preventDefault(),r(".mask-overlay").remove(),t.removeClass("page-popup-open"),i.removeClass("open"),r(".sub-menu, .sub-menu-wide").removeAttr("style"),r("html").removeClass("no-scroll sidebar-open").height("auto"),r(".tt-hamburger").removeClass("active"),r(".sub-menu, .sub-menu-wide").removeAttr("style"),r(".has-submenu .menu-link").removeClass("active")});new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!1,live:!0,scrollContainer:null}).init(),r("#wpadminbar").length&&r(window).width()<768&&r("#wpadminbar").css({position:"fixed",top:"0"}),r(".play-button, .popup-play-btn").each(function(){r(".play-button, .popup-play-btn").magnificPopup({type:"iframe"})}),r(".sticky-sidebar").length&&(r("body").addClass("sticky-sidebar_init"),r(".sticky-sidebar").each(function(){r(this).theiaStickySidebar({additionalMarginTop:140,additionalMarginBottom:30})})),r(".sticky_layout .info-wrapper").length&&r(".sticky_layout .info-wrapper").each(function(){r(this).theiaStickySidebar({additionalMarginTop:120,additionalMarginBottom:120})}),r(".quantity .input-text").keyup(function(){var e=r(this).parent().next().next(),t=parseInt(r(this).attr("max")),i=parseInt(r(this).val());i<=t&&e.attr("data-quantity",i)}),r("body").on("click",".quantity .plus-button",function(e){var t=r(this).parent().parent().find("input.input-text"),i=parseInt(t.attr("max")),a=parseInt(t.attr("step")),n=parseInt(t.val()),o=r(this).parent().parent().next().next();""!==i&&i<=n+a&&r(".quantity .plus-button").css("pointer-events","none"),i<n+a||(t.val(n+a),t.trigger("change"),r(".btn-atc").hasClass("atc-popup")&&o.attr("data-quantity",n+a))}),r("body").on("click",".quantity .minus-button",function(e){var t=r(this).parent().parent().find("input.input-text"),i=parseInt(t.attr("step")),a=parseInt(t.val())-i,n=r(this).parent().parent().next().next();t.val(a=a<i?i:a),r(".quantity .plus-button").removeAttr("style"),t.trigger("change"),r(".btn-atc").hasClass("atc-popup")&&n.attr("data-quantity",a)});var e=r(".blog-posts-grid");e.masonry({itemSelector:".blog-grid-item",percentPosition:!0}),r(window).resize(function(){e.masonry()}),r(".quiety-accordion .accordion-item").each(function(){var i=r(this);i.on("click",function(e){var t=i.hasClass("active");r(".quiety-accordion .accordion-item").removeClass("active"),t?i.removeClass("active"):i.addClass("active")})})},handleMobileHeader:function(){TT.header&&TT.header.length&&(TT.isMobileMenu?(TT.header.addClass("mobile-header"),TT.body.addClass("is-mobile-menu"),setTimeout(function(){r(".main-nav").addClass("unhidden")},300)):(TT.header.removeClass("mobile-header"),TT.body.removeClass("is-mobile-menu"),r(".main-nav").addClass("visible")))},handleFixedHeader:function(){TT.init();var e=TT.headerFixed;r(document).scrollTop()>e.initialOffset?(!TT.isMobileMenu&&e.enabled&&!e.value||TT.isMobileMenu&&e.mobileEnabled&&!e.mobileValue)&&(TT.isMobileMenu?e.mobileValue=!0:e.value=!0,TT.header.addClass("header-fixed no-transition")):(e.value||e.mobileValue)&&(e.value=!1,e.mobileValue=!1,TT.header.removeClass("header-fixed")),r(document).scrollTop()>e.initialOffset+50?TT.header.removeClass("no-transition").addClass("showed"):TT.header.removeClass("showed").addClass("no-transition")},progressBar:function(){r(".skill-wrapper").length&&r(".skills").not(".active").each(function(){r(window).scrollTop()>=r(this).offset().top-+r(window).height()&&(r(this).addClass("active"),r(this).find(".skill").each(function(){var e=r(this).attr("data-value");r(this).find(".active-line").css("width",e+"%")}))})},portfolio:function(){void 0!==r.fn.imagesLoaded&&void 0!==r.fn.isotope&&r(".portfolio-items").imagesLoaded(function(){var t=r(".portfolio-items");t.isotope({itemSelector:".quiety-portfolio-item",layoutMode:"masonry"}),r(".portfolio-filter a").on("click",function(){r(".portfolio-filter").find(".current").removeClass("current"),r(this).parent().addClass("current");var e=r(this).attr("data-filter");return t.isotope({filter:e}),!1})})},swiperSlider:function(){r(".tt-portfolio-related").each(function(){new Swiper(".tt-portfolio-related",{slidesPerView:3,spaceBetween:30,loop:!0,speed:800,autoplay:{delay:2e3},pagination:{el:".portfolio-pagination",clickable:!0}})})},sectionSwitch:function(){r(".page-scroll, .site-header .menu li a").on("click",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=r(this.hash);if(0<e.length)return e=e.length?e:r("[name="+this.hash.slice(1)+"]"),r("html,body").animate({scrollTop:e.offset().top-130},1e3),!1}})},countUp:function(){var i={useEasing:!0,useGrouping:!0,separator:",",decimal:".",prefix:"",suffix:""},e=r("[data-counter]");e&&e.each(function(){var e=r(this).data("counter"),t=new CountUp(this,0,e,0,2.5,i);r(this).appear(function(){t.start()},{accX:0,accY:0})})},googleMap:function(){r(".gmap3-area").each(function(){var e=r(this),t=(e.data("key"),e.data("lat")),i=e.data("lng"),a=e.data("mrkr"),n=e.data("zoom"),o=e.data("scrollwheel")||!1;e.gmap3({center:[t,i],zoom:n,scrollwheel:o,mapTypeId:google.maps.MapTypeId.ROADMAP,styles:[{featureType:"water",elementType:"geometry",stylers:[{color:"#e9e9e9"},{lightness:17}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:20}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#ffffff"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:16}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:21}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#dedede"},{lightness:21}]},{elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#ffffff"},{lightness:16}]},{elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#333333"},{lightness:40}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#f2f2f2"},{lightness:19}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#fefefe"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#fefefe"},{lightness:17},{weight:1.2}]}]}).marker(function(e){return{position:e.getCenter(),icon:a}})})},contactFrom:function(){r("[data-tt-form]").each(function(){var t=r(this);r(".form-result",t).css("display","none"),t.submit(function(){r('button[type="submit"]',t).addClass("clicked");var i={};return r("[name]",t).each(function(){var e=r(this),t=e.attr("name"),e=e.val();i[t]=e}),r.ajax({url:t.attr("action"),type:"POST",data:i,success:function(e){(1==e.error?r(".form-result",t).addClass("alert-warning").removeClass("alert-success alert-danger"):r(".form-result",t).addClass("alert-success").removeClass("alert-warning alert-danger")).css("display","block"),r(".form-result > .content",t).html(e.message),r('button[type="submit"]',t).removeClass("clicked")},error:function(){r(".form-result",t).addClass("alert-danger").removeClass("alert-warning alert-success").css("display","block"),r(".form-result > .content",t).html("Sorry, an error occurred."),r('button[type="submit"]',t).removeClass("clicked")}}),!1})})}},i.documentOnReady={init:function(){i.initialize.init()}},i.documentOnLoad={init:function(){TT.init(),i.initialize.handleMobileHeader(),r("#preloader").fadeOut("slow")}},i.documentOnResize={init:function(){r("#wpadminbar").length&&r(window).width()<768&&r("#wpadminbar").css({position:"fixed",top:"0"}),TT.resize(),i.initialize.handleMobileHeader(),i.initialize.handleFixedHeader()}},i.documentOnScroll={init:function(){i.initialize.handleFixedHeader()}},r(document).ready(i.documentOnReady.init),r(window).on("load",i.documentOnLoad.init),r(window).on("resize",i.documentOnResize.init),r(window).on("scroll",i.documentOnScroll.init)}(jQuery)},0:function(e,t,i){e.exports=i("./src/js/app.js")}});


//start ----
"use strict";
document.addEventListener("DOMContentLoaded", function () {
	/**
	 * Brand Slider
	 */
	const brandSlider = document.querySelector(".qty-brand-slider");
	if (brandSlider) {
		const brandSliderInit = new Swiper(brandSlider, {
			loop: true,
			slidesPerView: 2,
			centeredSlides: true,
			centeredSlidesBounds: true,
			speed: 5000,
			spaceBetween: 16,
			autoplay: {
				delay: 1,
				disableOnInteraction: false,
			},
			breakpoints: {
				576: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 4,
				},
				992: {
					slidesPerView: 5,
				},
				1200: {
					slidesPerView: 6,
				},
				1400: {
					slidesPerView: 7,
				},
				1600: {
					slidesPerView: 8,
				},
				1920: {
					slidesPerView: 9,
				},
			},
		});
	}
	/**
	 * Circle Button Text
	 */
	const circleText = document.querySelectorAll(".circle-btn__text");
	circleText.forEach((e) => {
		e.innerHTML = e.textContent.replace(/\S/g, "<span>$&</span>");
	});
	const circleTextElement = document.querySelectorAll(".circle-btn__text span");
	for (let i = 0; i < circleTextElement.length; i++) {
		circleTextElement[i].style.transform = "rotate(" + i * 18 + "deg)";
	}
	/**
	 * Selected Pricing Button
	 */
	var selectedBtn = document.querySelectorAll(".select-pricing-btn");

	selectedBtn.forEach(function(item) {
	  item.addEventListener("click", function() {
		// Add "active" class to the clicked item
		item.classList.add("active");
  
		// Remove "active" class from sibling items
		selectedBtn.forEach(function(sibling) {
		  if (sibling !== item) {
			sibling.classList.remove("active");
		  }
		});
	  });
	});
});
