(function() {
    'use strict';

    angular
        .module('starter')
        .controller('lancashireController', lancashireController);
    /* @ngInject */
    function lancashireController($scope,townsService) {

        var vm = this;
        console.log("this is ")
        console.log(vm)

        vm.message = "Im now using a very slow api and its going to take 6 seconds to show the data, this illustrates a promise"

        townsService.getLancashireTowns().then(function(response){
            vm.towns = response.map(function(town){
                return {
                    name:town.Title,
                    population: town.Popn.Urban + town.Popn.District
                }
            })
        });


    }
    lancashireController.$inject = ['$scope','townsService'];

})();
