(function() {
    'use strict';

    angular
        .module('starter')
        .controller('coreController', coreController);
    /* @ngInject */
    function coreController($state) { 

        var vm = this;
        vm.message = "I am from the branch called 'ac-test-1' and this is a change in develop"


    }
    coreController.$inject = ['$state']; 

})();
