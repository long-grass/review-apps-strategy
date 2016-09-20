(function() {
    'use strict';

    angular
        .module('starter')
        .controller('coreController', coreController);
    /* @ngInject */
    function coreController($state) { 

        var vm = this;
        vm.message = "I am from the branch called 'i-like-pipelines'"


    }
    coreController.$inject = ['$state']; 

})();
