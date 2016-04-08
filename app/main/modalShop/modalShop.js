/* global angular*/
(function () {
    'use strict';

    angular
    	.module('myApp')
    	.controller('ModalShopController', ModalShopController);

    // create the controller and inject Angular's $scope
    function ModalShopController($scope, $rootScope, $routeParams, $location, close) {
 


        $scope.close = close;

        $scope.tipsou = 10;





    }

})();


