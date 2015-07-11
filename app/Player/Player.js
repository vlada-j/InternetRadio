/* *********************************************************************************************** *
 * PLAYER MODULE
 * =============================================================================================== *
 *
 * This module is designed to:
 * 	- maintained audio streaming,
 * 	- provide controlled over streaming,
 * 	- show some information
 *
 * *********************************************************************************************** */

(function(){
'use strict';

angular
.module ('InternetRadio.Player', [])
.config (config)
.run (run)
.directive ('irPlayer', irPlayer);


//--------------------------------------------------------------------------------------------------
config.$inject = [];
function config() {}


//--------------------------------------------------------------------------------------------------
run.$inject = [];
function run() {}


//--------------------------------------------------------------------------------------------------
irPlayer.$inject = [];
function irPlayer() {

	return {
		scope: {},
		replace: true,
		restrict: 'EAC',
		templateUrl: 'app/Player/irPlayer.tpl.html',
		link: link
	};


	function link(scope, ele) {
		var audio = ele.find('audio'),
			paused;

		paused = false;
		scope.toggleClass = 'zxc';
		scope.volume = audio[0].volume * 100;
		scope.toggle = toggle;
		scope.$watch('volume', function(n) {
			audio[0].volume = n / 100;
		});

		scope.title = 'zxc';
		scope.tags = [];

		function toggle() {
			if (audio[0].paused) {
				audio[0].play();
				paused = false;
				scope.toggleClass = 'pause-state';
			} else {
				audio[0].pause();
				paused = true;
				scope.toggleClass = 'play-state';
			}
		}
	}
}

})();