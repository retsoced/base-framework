/* ========================================================================
 * ╦ ╦┌┬┐┬┬  ┬┌┬┐┬┌─┐┌─┐┬
 * ║ ║ │ ││  │ │ │├┤ └─┐│
 * ╚═╝ ┴ ┴┴─┘┴ ┴ ┴└─┘└─┘o : Utilities.js v1.0
 * ========================================================================
 * This is a resuable set of functions designed to be added into any prototyping project
 * providing the following list of functions
 *
 * ========================================================================
*/

var Utilities = ( function() {
	'use strict';

	return {

		// generate a random number from a range ---------------------
		returnRandomInt: function(min,max){
	    	return Math.floor(Math.random() * (max - min + 1)) + min;
		},

		// pull the querystring value from the URL based on the key ---------------------
		getQuerystring: function(key, defaultVal) {
			if (defaultVal === null) { defaultVal = ''; }

			key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
			var regex = new RegExp("[\\?&]"+key+"=([^&#]*)"),
				qs = regex.exec(window.location.href);
			if(qs === null) {
				return defaultVal;
			}
			return qs[1];
		},

		// Capitalize the first letter of the string -------------------------
		capitaliseFirstLetter: function(tehStr) {
			if (tehStr) {
				return tehStr.charAt(0).toUpperCase() + tehStr.slice(1);
			}
		},

		countChars: function (str, value) {
			var holder = str.split(value);
			return holder.length - 1;
		},

		compareToArray: function (str, strArray) {
			var j = 0;
			for (j = 0; j < strArray.length; j ++) {
		        if (strArray[j].match(str)) { return j; }
		    }
		    return -1;
		},

		isFunction: function (testSubject) {
		  return ( typeof( testSubject ) === typeof( Function ) );
		},

		encodeStr: function ( strToEncode ) {
			var newStr = escape(strToEncode);
			return newStr;
		},

		// Returns a function, that, as long as it continues to be invoked, will not be triggered. The function will be called after it stops being called for
		// N milliseconds. If `immediate` is passed, trigger the function on the leading edge, instead of the trailing.
		/*
		var myEfficientFn = debounce(function() {
			// All the taxing stuff you do
		}, 250);

		window.addEventListener('resize', myEfficientFn);
		*/

		debounce: function (func, wait, immediate) {
			var timeout;
			return function() {
				var context = this, args = arguments;
				clearTimeout(timeout);
				timeout = setTimeout(function() {
					timeout = null;
					if (!immediate) { func.apply(context, args); }
				}, wait);
				if (immediate && !timeout) { func.apply(context, args); }
			};
		}

	};

})();
