/* global angular*/
(function () {
    'use strict';

    angular
    	.module('myApp')
    	.controller('ModalSignInController', ModalSignInController);

    // create the controller and inject Angular's $scope
    function ModalSignInController($scope, $rootScope, $routeParams, $location, close) {
 
        //$scope.close = close;
        $scope.srcMentor = 'images/familles/' + $rootScope.familyWelcome + '/mentor.png';
        $scope.mentor = 'Votre Mentor';

        $scope.previousNext = function (i){
            if (i===$scope.current){
                return false;
            }
            else{
                return true;
            }
        };

        $scope.current = 0;
        $scope.next = function(){
            var i = $scope.getIndex($scope.current, 1);
            $scope.current = i;
        };

        $scope.previous = function(){
            var i = $scope.getIndex($scope.current, -1);
            $scope.current = i;
        };

        $scope.getIndex = function(currentIndex, shift){
            var len = 3;//number of subpages
            return (((currentIndex + shift) + len) % len);
        };

        $scope.hidePrevious = function(){
            if ($scope.current===0){
                return true;
            }
            else{
                return false;
            }
        };

        $scope.hideNext = function(){
            if ($scope.current===2){
                return true;
            }
            else{
                return false;
            }
        };

        $scope.close = close;


    }

})();


