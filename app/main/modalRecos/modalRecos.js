/* global angular*/
(function () {
    'use strict';

    angular
    	.module('myApp')
    	.controller('ModalRecosController', ModalRecosController);

    // create the controller and inject Angular's $scope
    function ModalRecosController($scope, $rootScope, $routeParams, $location, close) {
 


        $scope.close = close;

        //$scope.tipsou = 10;


        


    }

})();
