$(function() {
"use strict";

	var $flowers = $('#flower-items');
	
//    the tutorial exercise file already had a 3 second fade transition with opacity
	$flowers
    	.find('a')
    	.colorbox({
    		'rel' : 'gallery',
    		'maxWidth' : '80%',
			'transition' : 'fade',
			'speed' : 150,
			'opacity' : 0.5,
			'slideshow' : true,
			'slideshowSpeed' : 3000,
			'current' : 'arrangement {current} of {total}'
    	});
});