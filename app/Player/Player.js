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
.value('Player', {})
.directive ('irPlayer', irPlayer);


//--------------------------------------------------------------------------------------------------
config.$inject = [];
function config() {}


//--------------------------------------------------------------------------------------------------
run.$inject = [];
function run() {}


//--------------------------------------------------------------------------------------------------
irPlayer.$inject = ['Player', '$timeout'];
function irPlayer(Player, $timeout) {

	return {
		scope: {},
		replace: true,
		restrict: 'EAC',
		templateUrl: 'app/Player/irPlayer.tpl.html',
		link: link
	};


	function link(scope, ele) {
		var audio = ele.find('audio')[0],
			onLine = navigator.onLine,
			vm = {};

		scope.vm = vm;
		vm.paused = false;
		Player.setData = setData;
		vm.selected = {};
		vm.toggleClass = 'pause';
		vm.volume = audio.volume * 100;
		vm.toggle = toggle;
//		vm.getCurrentTime = function() { return audio.currentTime; };

		scope.$watch('vm.volume', function(n) {
			audio.volume = n / 100;
		});
		
		$timeout(
			function() {
				console.log(navigator.onLine, onLine);
				if (navigator.onLine != onLine) {
					onLine = navigator.onLine;
					if (onLine) { play(); }
					else { stop(); }
				}
			}, 1000 );

		function toggle() {
			if (audio.paused) { play(); }
			else { stop(); }
		}

		function play() {
		//	audio.play();
			audio.load();
			vm.paused = false;
			vm.toggleClass = 'pause';
		}

		function stop() { 
			audio.pause();
			vm.paused = true;
			vm.toggleClass = 'play';
		}

		function setData(s) {
			vm.selected = s || {};
			audio.src = s.src;
			toggle();

		}
	}
}

})();
