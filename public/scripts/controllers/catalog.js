'use strict';

define(['angular', '../modules/sample-module/sample-module'], function(angular, controllers){
	controllers.controller('CatalogCtrl', ['$http','$scope', function($http,$scope){
		$http.get("https://predix-analytics-catalog-release.run.aws-usw02-pr.ice.predix.io/api/v1/catalog/analytics")
			.then(function(response){
				$scope.catalog = response.data;
			},
			function(failureCallback){
				console.log("You are " + failureCallback.statusText)
			});
	}]);
});