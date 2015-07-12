(function() {
'use strict';

angular
.module ('InternetRadio.Library')
.directive ('irList', irList);


//--------------------------------------------------------------------------------------------------
irList.$inject = ['Library'];
function irList(Library) {

	return {
		scope: {},
		replace: true,
		restrict: 'EAC',
		templateUrl: 'app/Library/irList.tpl.html',
		link: link
	};

	function link(scope) {
		scope.stations = Library.getAll();
	}
}

})();