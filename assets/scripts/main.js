'use strict';

const skrollr = require('./skrollr.min.js');

skrollr.init({
	edgeStrategy: 'set',
	easing: {
		WTF: Math.random,
		inverted: function(p) {
			return 1-p;
		}
	}
});

// let resizeTimer;
//
let hideAssets = () => {
  // $('#winter-carnival-img').css('display', 'none');
  $('#winter-carnival-img').css('visibility', 'hidden');
  $('#cocoa-img').css('visibility', 'hidden');
  $('#tubing-img').css('visibility', 'hidden');
  $('#skating-img').css('visibility', 'hidden');
  $('#sledding-img').css('visibility', 'hidden');
  // $('.easing').html('')
};
//
let showAssets = () => {
  $('#winter-carnival-img').css('visibility', 'visible');
  $('#cocoa-img').css('visibility', 'visible');
  $('#tubing-img').css('visibility', 'visible');
  $('#skating-img').css('visibility', 'visible');
  $('#sledding-img').css('visibility', 'visible');


  // $('#winter-carnival-img').html('<div id="winter-carnival-img" class="easing_wrapper" data-0="display:none;" data-8500="display:block;" data-10200="top:0%;" data-10400="top:-100%;display:none;">');
};
//
// $(window).on('resize', function() {
//   clearTimeout(resizeTimer);
//   resizeTimer = setTimeout(function() {
//     if ($(window).width() < 1050) {
//       hideAssets();
//     } else if ($(window).width() >= 1050) {
//       showAssets();
//     }
//
//   }, 250);
//
// });
let resizeTimer;
let width = $(window).width();


// On Document Ready
$(() => {

  if (width < 1050) {
    hideAssets();
  }

  $(window).on('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      if ($(window).width() < 1050) {
        hideAssets();
      } else {
        showAssets();
      }

    }, 250);

  });
});
