'use strict';

define(['angular', '../modules/sample-module/sample-module'], function(angular, controllers){
	controllers.controller('CatalogCtrl', ['$scope', function($scope){
		$scope.catalog = [
		    {
		    	id: 1,
		    	name: "Hello World",
		    	value: "This is my value"
		    },
		    {
		    	id: 2,
		    	name: "World Hello",
		    	value: "This is my other value"
		    }
		];
	}]);
});