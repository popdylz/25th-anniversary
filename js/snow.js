$(function() {
	snow({minSize:15,moreSize:15,newSnow:300,flakeColor:"#fff"});
	function snow(options) {
		var documentHeight = $(document).height(),
			documentWidth = $(document).width(),
			$flake = $('<div id="snowbox"/>').css({
				'position': 'absolute',
				'top': '-50px',
				'z-index': '100',
				'color': options.flakeColor
			}).html('&#10052;');
		var interval = setInterval(function() {
			var startLeft = Math.random() * documentWidth,
				startOpacity = 0.7 + Math.random(),
				flakeSize = options.minSize + Math.random() * options.moreSize,
				endTop = documentHeight,
				endLeft = startLeft + Math.random() * 400 - 200,
				fallingTimes = documentHeight * 15 + Math.random() * 5; /*雪花下落时间，单位毫秒*/
			$flake.clone().appendTo('body').css({
				left: startLeft,
				opacity: startOpacity,
				fontSize: flakeSize,
			}).animate({
				top: endTop,
				left: endLeft,
				opacity: 0.1,
			}, fallingTimes, 'linear', function() {
				$(this).remove();
			});
		}, options.newSnow);
	};
});
