'use strict';

define(['angular', '../modules/sample-module/sample-module'], function(angular, controllers){
	controllers.controller('CatalogCtrl', ['$http','$scope', function($http,$scope){
//		Remove this comment to get the analytics service to make the calls.
//		
//		$http.get('api/predix-analytics-catalog-new-ui/catalog/analytics')
//			.then(function(response){
//				$scope.catalog = response.data;
//			},
//			function(failureCallback){
//				console.log('You are ' + failureCallback.statusText);
//			});
		$scope.catalog = [
		    {
				taxonomyLocation: '/predix-demo-analytics',
				name: 'anomalyDetector-py',
				author: 'DataScience+PredixAnalytics',
				description: 'Does something with data points',
				version: 'v1',
				language:'Python'
		    },
		    {
				taxonomyLocation: '/predix-demo-analytics',
				name: 'demoAdder',
				author: 'predix-analytics',
				description: 'given 2 long numbers it does something',
				version: 'v1',
				language:'Python'
		    },
		    {
				taxonomyLocation: '/predix-demo-analytics',
				name: 'demoAdder-py',
				author: 'predix-analytics',
				description: 'given 2 long numbers it does something else',
				version: 'v1',
				language:'Python'
		    }
		];
		$scope.analyticsForm = {};
		
		$scope.addAnalytic = function(){
			var analytic = {
					taxonomyLocation: $scope.analyticsForm.taxonomyLocation,
					name: $scope.analyticsForm.name,
					author: $scope.analyticsForm.author,
					description: $scope.analyticsForm.description,
					version: $scope.analyticsForm.version,
					language: $scope.analyticsForm.language
				};
			$rootScope.catalog.push(analytic);
			$scope.analyticsForm = {};
		};
	}]);
});