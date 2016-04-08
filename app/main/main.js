/* global angular, Firebase*/
(function () {
    'use strict';

    angular
    	.module('myApp')
    	.controller('mainController', mainController);

    // create the controller and inject Angular's $scope
    function mainController($scope, ModalService) {
        // create a message to display in our view
        //$scope.message = 'Everyone come and see how good I look!';

        //FIREBASE - GO AND LOAD THE USERS INFO




        //OPEN MODAL 
        $scope.showModal = function(){
            ModalService.showModal({
                templateUrl: 'app/main/modalShop/modalShop.html',
                controller: 'ModalShopController'
              }).then(function(modal) {
                  modal.close.then(function() {
                    //$scope.customResult = 'All good!';
                  });
            });
        };
    }

})();