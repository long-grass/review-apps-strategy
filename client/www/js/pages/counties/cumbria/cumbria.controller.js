(function() {
    'use strict';

    angular
        .module('starter')
        .controller('cumbriaController', cumbriaController);
    /* @ngInject */
    function cumbriaController(townsService) {

        var vm = this;
        vm.message = "I am the  Cumbria Controller"


        vm.cumbria_towns = townsService.getCumbriaTowns()

        console.log("ok so the next thing is we want to list all the cumbria towns but only some of the yorkshire towns, just the big ones, because this is the cumbria controller we dont need to know about all the little towns in yorkshire too, just the big ones")

        vm.yorkshire_towns = townsService.getYorkshireTowns().map(function(town){
            var city
            if (town.population > 80000){
                city = "yes"
            }
            return {
                name:town.name, //we keep the same format as the json we receive
                population:town.population,
                city:city
            }
        })


    }
    cumbriaController.$inject = ['townsService'];

})();
