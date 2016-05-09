'use strict';

define(['angular', '../modules/sample-module/sample-module'], function(angular, controllers){
	controllers.controller('CatalogCtrl', ['$http','$scope', function($http,$scope){
		$http.get('api/predix-analytics-catalog-new-ui/catalog/analytics')
			.then(function(response){
				$scope.catalog = response.data;
			},
			function(failureCallback){
				console.log('You are ' + failureCallback.statusText);
			});
	}]);
});