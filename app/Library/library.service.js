(function() {
'use strict';

angular
.module ('InternetRadio.Library')
.factory ('Library', library);


//--------------------------------------------------------------------------------------------------
library.$inject = ['$http'];
function library($http) {
	var url = 'data/data.json',
		stations = [],
		results = [],
		genres = [];

	loadData();


	// methods
	return {
		loadData:loadData,
		zxc:function(){ Array.prototype.push.apply(results, stations); },
		results:function(){ return results; },
		getAll:function(){ return stations; },
		getGenres:function(){ return genres; }
	};

//--------------------------------------------------------------------------------------------------

	function loadData() {
		$http.get(url)
			.success (onLoad)
			.error (onError)
	}

	function onLoad (r) {
		if (r instanceof Array) {
			stations.length = 0;
			Array.prototype.push.apply(stations, r);
			collectGenres();
		} else {
			console.log('Bad format');
		}
	}

	function onError () {
		console.log('ERROR!!!');
	}

//--------------------------------------------------------------------------------------------------

	function collectGenres() {
		stations.forEach(function(s) {
			s.tags.forEach(function(t){ genres.indexOf(t) === -1 ? genres.push(t) : 0; });
		});
		genres.sort();
	}
}

})();