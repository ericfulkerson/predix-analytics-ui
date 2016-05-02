'use strict';
define(['angular', '../modules/sample-module/sample-module'], function(angular, controllers){
	controllers.controller('PatientsCtrl', ['$rootScope', '$scope', function($rootScope, $scope){
		$scope.form = {};
		$scope.addPatient = function() {
			var patient = {
				id: $scope.patients.length + 1,
				firstName: $scope.form.firstName,
				lastName: $scope.form.lastName
			};
			$rootScope.patients.push(patient);
			$scope.form = {};
		};
	}]);
});