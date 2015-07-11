(function(){
'use strict';

angular
.module('InternetRadio', [
	'InternetRadio.Player',
	'InternetRadio.Library'
])
.config(appConfig)
.run(appRun);


//--------------------------------------------------------------------------------------------------
appConfig.$inject = [];
function appConfig() {}


//--------------------------------------------------------------------------------------------------
appRun.$inject = [];
function appRun() {}

})();