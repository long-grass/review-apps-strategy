(function() {
    'use strict';

    angular
        .module('starter')
        .controller('coreController', coreController);
    /* @ngInject */
    function coreController($state) { 

        var vm = this;
        vm.message = "I am the master branch"


    }
    coreController.$inject = ['$state']; 

})();
