/* *********************************************************************************************** *
 * LIBRARY MODULE
 * =============================================================================================== *
 *
 * This module is designed to:
 * 	- provide stations data,
 * 	- sort and filtering stations,
 * 	- provide favorite list
 *
 * *********************************************************************************************** */

(function(){
'use strict';

angular
.module ('InternetRadio.Library', [])
.config (config)
.run (run);


//--------------------------------------------------------------------------------------------------
config.$inject = [];
function config() {}


//--------------------------------------------------------------------------------------------------
run.$inject = ['Library'];
function run(Library) {
	window.L = Library;
	//Library.loadData();
}
})();