function Rotate3D(className, options) {

	var elements = document.getElementsByClassName(className);
	var intensity = (options && options.intensity) || 10;
	var normalize = {};
	var applyCSS = setCSS('Safari');
	var applyBack = backCSS('Safari');
	var counter = 0;

	function mobile() {
		window.addEventListener('deviceorientation', function(event) {

			if (elements[0].triggerCounter == 10) {
				elements[0].triggerCounter = 0
				var xTilt = Math.round((-event.beta + 90) * (40/180) - 40);
				// 	// var yTilt = Math.round(-event.gamma * (20/180) - 20);
				var xTilt = -1* map(event.beta).fromRange(0,90).toRange(-1 * intensity, 2 * intensity);
				var yTilt = 1 * map(event.gamma).fromRange(-90,90).toRange(-2 * intensity, 2 * intensity);

				for (var i = 0; i < elements.length; i++) {
					var element = elements[i];
					applyCSS(element, xTilt, yTilt);
				}
			}

			elements[0].triggerCounter++;
		});
	}
	function desktop() {
		function DesktopPL(element) {

			applyBack(element);
			// MOUSE MOVE
			element.addEventListener('mousemove', function(event) {

				if (element.triggerCounter == 5) {
					var width 	= element.offsetWidth / 2;
					var height 	= element.offsetHeight / 2;
					var inX = (event.pageX - element.offsetLeft) - width; //get position in page
					var inY = (event.pageY - element.offsetTop) - height;
					var rX = map(-inY).fromRange(0,height).toRange(0,intensity);
					var rY = map(inX).fromRange(0,width).toRange(0,intensity);
					element.triggerCounter = 0;
					applyCSS(element, rX,rY);
				}
				element.triggerCounter++;
			}, false);

			// MOUSE LEAVE
			element.addEventListener('mouseleave', function(event) {
				applyBack(element);
			}, false);
		}

		for (var i = 0; i < elements.length; i++) {
			var element = elements[i];
			element.triggerCounter = 0;
			new DesktopPL(element);
		}
	}

	mobile();
	desktop();
}

function backCSS(browser) {
	if (browser == 'Chrome') {
		return function (element) {
			element.style.transform = 'rotateX(0) rotateY(0)'
		}
	} else if (browser == 'Safari') {
		return function (element) {
			element.style.webkitTransform = 'rotateX(0) rotateY(0)'
		}
	} else if (browser == 'FireFox') {
		return function (element) {
			element.style.mozTransform = 'rotateX(0) rotateY(0)'
		}
	}
}


 function setCSS(browser) {
	if (browser == 'Chrome') {
		return function (element, xTilt, yTilt) {
			element.style.animation = '';
			element.style.transform = 'rotateX(' + xTilt + 'deg) rotateY(' + yTilt +'deg)';
		}
	} else if (browser == 'Safari') {
		return function (element, xTilt, yTilt) {
			element.style.webkitAnimation = '';
			element.style.webkitTransform = 'rotateX(' + xTilt + 'deg) rotateY(' + yTilt +'deg)';
		}
	} else if (browser == 'FireFox') {
		return function (element, xTilt,yTilt) {
			element.style.mozAnimation = '';
			element.style.mozTransform = 'rotateX(' + xTilt + 'deg) rotateY(' + yTilt +'deg)';
		}
	}
}
