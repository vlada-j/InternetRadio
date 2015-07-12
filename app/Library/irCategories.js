(function() {
'use strict';

angular
.module ('InternetRadio.Library')
.directive ('irCategories', irCategories);


//--------------------------------------------------------------------------------------------------
irCategories.$inject = ['Library'];
function irCategories(Library) {

	return {
		scope: {},
		replace: true,
		restrict: 'EAC',
		templateUrl: 'app/Library/irCategories.tpl.html',
		link: link
	};

	function link(scope) {
		scope.tags = Library.getGenres();
		scope.select = select;
	}

	function select(s) {
		Library.filter = s;
	}
}

})();