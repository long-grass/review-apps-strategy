(function() {
    'use strict';

    angular
        .module('starter')
        .controller('yorkshireController', yorkshireController);
    /* @ngInject */
    function yorkshireController(townsService,$uibModal) {

        console.log(townsService)
        // console.log($modal")

        var vm = this;

        vm.message = "I belong to the Yorkshire Controller"

        vm.serviceMessage = townsService.getTheMessageOfTheDay()
        
        vm.towns = townsService.getYorkshireTowns()

        vm.favourite_towns = []

        var addFavCtrl = function (favTowns,town,$uibModalInstance) {
            var innervm = this;           
            innervm.town = town;
            innervm.addToFavourites = function(town){
                if (favTowns.indexOf(town) == -1){
                    favTowns.push(town)
                    town.removeFromFavs
                }
                $uibModalInstance.close('ok');
            };
            innervm.removeFromFavs = function(town){
                console.log(town)
                console.log(removeFromFavs)
            };
            innervm.closeModal = function(){
                $uibModalInstance.close('ok');
            }

        };

        vm.removeModal = function(town){
            $uibModal.open({
                templateUrl: 'js/pages/counties/yorkshire/remove.modal.html',
                controller: ['favourite_towns','town', '$uibModalInstance',  addFavCtrl],
                controllerAs: 'yorksModal',
                resolve: {
                    favourite_towns: function () { 
                        return vm.favourite_towns 
                    },
                    town: function() { 
                        return town; 
                    }
                },
            });
        };

        vm.addModal = function(town){
            $uibModal.open({
              templateUrl: 'js/pages/counties/yorkshire/addFav.modal.html',
              controller: ['favourite_towns','town', '$uibModalInstance',  addFavCtrl],
              controllerAs: 'yorksModal',
              resolve: {
                favourite_towns: function () { 
                    return vm.favourite_towns 
                },
                town: function() { 
                    return town; 
                }
              },
            });
        };
    }
    yorkshireController.$inject = ['townsService','$uibModal'];

})();
