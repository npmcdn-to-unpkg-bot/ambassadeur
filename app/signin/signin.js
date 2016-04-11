/* global angular, Firebase */
(function () {
    'use strict';

    angular
    	.module('myApp')
    	.controller('SignInController', SignInController);

    // create the controller and inject Angular's $scope
    function SignInController($scope, $rootScope, $routeParams, ModalService) {

    	//PUT URL PARAMETER INTO SCOPE
        $scope.mail = $routeParams.mail;
        $scope.family = $routeParams.family;
        $scope.iduser = $routeParams.newiduser;

        $scope.signin = [];
        $scope.signin.sex = 'F';
        $scope.signin.firstName = '';
        $scope.signin.lastName = '';
        $scope.signin.livingPlace ='';

        $scope.backgroundUrl = $scope.family + '/background.jpg';

        $scope.saveAccount = function(){
            $scope.showModal();

            //var mailWithoutDut = $scope.emailToKey($scope.newMail);
            var ref = new Firebase($scope.firebaseUrl + $scope.iduser);
                ref.child('recos').set(0);
                ref.child('tipsous').set(0);
                ref.child('mail').set($scope.mail);
                ref.child('firstName').set($scope.signin.firstName);
                ref.child('lastName').set($scope.signin.lastName);
                ref.child('family').set($scope.family);
                ref.child('sex').set($scope.signin.sex);
                ref.child('livingPlace').set($scope.signin.livingPlace);
            ref = null;
            
        };
        

        //OPEN MODAL 
        $scope.showModal = function(){
            $rootScope.familyWelcome = $scope.family;
            $rootScope.firstNameWelcome = $scope.signin.firstName;
            $rootScope.iduser = $scope.iduser;
            ModalService.showModal({
                templateUrl: 'app/signin/modalSignin/modalSignin.html',
                controller: 'ModalSignInController'
              }).then(function(modal) {
                  modal.close.then(function() {
                    //$scope.customResult = 'All good!';
                  });
            });
        };





    }

})();

 