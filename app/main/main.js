/* global angular, Firebase*/
(function () {
    'use strict';

    angular
    	.module('myApp')
    	.controller('mainController', mainController);

    // create the controller and inject Angular's $scope
    function mainController($scope, $rootScope, $routeParams, ModalService, $timeout) {
        // create a message to display in our view
        //$scope.message = 'Everyone come and see how good I look!';

        //FIREBASE - GO AND LOAD THE USERS INFO (wiith the user id)
        //DEFINE THE LIST OF GROUPS FROM FIREBASE
        $scope.user = [];
        $scope.user.id = $routeParams.iduser;
        new Firebase($scope.firebaseUrl + $scope.user.id + '/')
            .on('value', function(data) {
                $timeout(function() {
                    var frbUser = data.val();
                    $scope.user.recos = frbUser.recos;
                    $scope.user.tipsous = frbUser.tipsous;
                    $scope.user.mail = frbUser.mail;
                    $scope.user.firstName = frbUser.firstName;
                    $scope.user.lastName = frbUser.lastName;
                    $scope.user.family = frbUser.family ;
                    $scope.backgroundUrl =$scope.user.family + '/background.jpg';

                    $scope.imageUrl = function(){
                        var i= $scope.user.recos;
                        if (0 <= i & i <= 4){
                            return 'evolution_1.png';
                        }
                        else if (5 <= i & i <= 9){
                            return 'evolution_2.png';
                        }
                        else if (10 <= i & i <= 14){
                            return 'evolution_3.png';
                        }
                        else if (15 <= i & i <= 19){
                            return 'evolution_4.png';
                        }
                        else{
                            return 'evolution_5.png';
                        }
                    };
                });
            });



        //OPEN MODAL 
        $scope.showModal = function(){
            $rootScope.tipsous = $scope.user.tipsous;
            ModalService.showModal({
                templateUrl: 'app/main/modalShop/modalShop.html',
                controller: 'ModalShopController'
              }).then(function(modal) {
                  modal.close.then(function() {
                    //$scope.customResult = 'All good!';
                  });
            });
        };

        //BACKGROUND IF FUNCTION OF FAMILY


        //EVOLUTION PICTURE IS FUNCTION OF RECOS


    }




})();