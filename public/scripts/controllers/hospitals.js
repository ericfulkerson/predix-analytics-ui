'use strict';

define(['angular', '../modules/sample-module/sample-module'], function(angular, controllers) {
    controllers.controller('HospitalsCtrl', ['$scope', function($scope) {
        $scope.hospitals = [
            {
                id: 1,
                name: 'Stanford Hospital and Clinics',
                address: '300 Pasteur Drive',
                city: 'Palo Alto',
                state: 'CA',
                zip: 94304,
                phone: 6507234000,
                email: 'mike@stanford.edu'
            },
            {
                id: 2,
                name: 'Sequoia Hospital',
                address: '170 Alameda De Las Pulgas',
                city: 'Redwood City',
                state: 'CA',
                zip: 94062,
                phone: 6503695811,
                email: 'joe@sequoia.com'
            }
        ];
        $scope.hospitalDetails = $scope.hospitals[0];
    }]);
});