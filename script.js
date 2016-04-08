/*global angular */
(function () {
    'use strict';

    angular
        .module('myApp', ['ngRoute', 'ngMaterial', 'ngMessages', 'angularModalService'])
        .config(config)
        .controller('GlobalController', GlobalController);


    // configure our routes
    function config( $routeProvider) {
        $routeProvider

            // route for the home page
            .when('/main', {
                templateUrl : 'app/main/main.html',
                controller  : 'mainController'
            })
            .when('/signin/:mail/:iduser/:family', {
                templateUrl: 'app/signin/signin.html',
                controller: 'SignInController'
            })
            .otherwise({
                redirect: '/main'
            });

        // enable HTML5mode to disable hashbang urls
        //$locationProvider.html5Mode(true);
        // });

    }

    //Global Controller
    function GlobalController($scope) {
        //$scope.message = 'Look! I am the global controller.';
        $scope.gohome = function (){

        };



    }


})();
