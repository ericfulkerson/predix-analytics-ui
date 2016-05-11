'use strict';

define(['angular', '../modules/sample-module/sample-module'], function(angular, controllers){
	controllers.controller('CatalogCtrl', ['$scope', function($scope){
		$scope.catalog = [
		    {
		    	taxomonyLocation: "/predix-demo-analytics",
		    	name: "anomalyDetector-py",
		    	author: "DataScience+PredixAnalytics",
		    	description: "Does something with data points",
		    	version: "v1",
		    	language:"Python"
		    },
		    {
		    	taxomonyLocation: "/predix-demo-analytics",
		    	name: "demoAdder",
		    	author: "predix-analytics",
		    	description: "given 2 long numbers it does something",
		    	version: "v1",
		    	language:"Python"
		    },
		    {
		    	taxomonyLocation: "/predix-demo-analytics",
		    	name: "demoAdder-py",
		    	author: "predix-analytics",
		    	description: "given 2 long numbers it does something else",
		    	version: "v1",
		    	language:"Python"
		    }
		];
	}]);
});