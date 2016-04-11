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
        $scope.hrefFacebook = "http://www.facebook.com/share.php?u=http://artips.fr/?f=" + $rootScope.userid;
        $scope.hrefTwitter ="https://twitter.com/intent/tweet?text=Découvrez+Artips,+une+dose+d'art+au+quotidien+!&url=http://artips.fr/?f="+ $rootScope.userid;


        


    }

})();
