(function() {
'use strict';

angular
.module ('InternetRadio.Library')
.directive ('irList', irList);


//--------------------------------------------------------------------------------------------------
irList.$inject = ['Library', 'Player'];
function irList(Library, Player) {

	return {
		scope: {},
		replace: true,
		restrict: 'EAC',
		templateUrl: 'app/Library/irList.tpl.html',
		link: link
	};

	function link(scope) {
		scope.stations = Library.getAll();
		scope.select = function(s) { Player.setData(s); };
		scope.getFilter = function() { return Library.filter; }
	}
}

})();