(function() {
    'use strict';

    angular
        .module('starter')
        .config(routesConfig);

    routesConfig.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
    function routesConfig($locationProvider, $stateProvider, $urlRouterProvider) {
      console.log($stateProvider.state)
      //use the HTML5 History API
      $locationProvider.html5Mode(false);

      // Default route
      $urlRouterProvider.otherwise('/intro');

      // Application Routes States
      $stateProvider
        .state('intro', {
          url: '/intro',
          templateUrl: 'www/js/core/core.html',
        })      
    }

})();
