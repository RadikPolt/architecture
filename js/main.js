"use strict";

const mainSlider = $('.ba-sliders');

mainSlider.slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	variableWidth: true,
	autoplay:true,
	autoplaySpeed: 0,
	cssEase: 'linear',
	speed: 6000,
	pauseOnFocus: false,
	pauseOnHover: false,
	nextArrow: '.ba-slider-btn__next',
	prevArrow: '.ba-slider-btn__prev',
	
});
