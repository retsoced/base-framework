/* jslint browser: true*/
/* global $, jQuery */
/*
 * ========================================================================
 * ╔═╗┌─┐┌─┐┬  ┬┌─┐┌─┐┌┬┐┬┌─┐┌┐┌
 * ╠═╣├─┘├─┘│  ││  ├─┤ │ ││ ││││
 * ╩ ╩┴  ┴  ┴─┘┴└─┘┴ ┴ ┴ ┴└─┘┘└┘  : Application.js v1.0
 * ========================================================================
 *
 * variable declarations ------------
 *
 * functions ------------------------
 *
 * ========================================================================
*/

var Application = ( function() {
  'use strict';

  return {

    initApp: function() {
			$('.hero-slider').lightSlider({
	      item:1,
	      slideMargin: 15,
				currentPagerPosition: 'middle',
	      speed:1000,
	      pause: 4000,
	      auto:true,
	      loop:true,
	      onSliderLoad: function() {
	          $('.hero-slider').removeClass('cS-hidden');
	      }
	    });
    }

  };

})();

window.onload = function() {

	// kickoff your javascripts
	Application.initApp();

}