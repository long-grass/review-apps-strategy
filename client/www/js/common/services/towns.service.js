(function() {
    'use strict';

    angular
        .module('starter')
        .factory('townsService', townsService);
    /* @ngInject */
    function townsService($q,$timeout) {

      var date = new Date

      var cumbriaTowns = [{
        name:'penrith',
        population: 16000
      },{
        name:'kendal',
        population: 11000
      },{
        name:'appleby',
        population:15000
      }]

      var yorkshireTowns = [{
          name:"barnsley",
          population: 76002,            
      },{
          name:"huddersfield",
          population: 176001, 
      },{
          name:"batley",
          population: 22007, 
      },{
          name:"meltham",
          population: 11000, 
      },{
          name:"selby",
          population: 29000, 
      },{
          name:"sheffield",
          population: 450000, 
      },{
          name:"leeds",
          population: 650000, 
      },{
          name:"skipton",
          population: 36000, 
      },{
          name:"todmorden",
          population: 16000, 
      },{
          name:"denby dale",
          population: 6000, 
      },{
          name:"york",
          population: 126000, 
      }
      ]

      var lancashireTowns = [
        {
          Title:"colne",
          Popn: {
            Urban:3000,
            District:11000 
          }
        },{
          Title:"morecambe",
          Popn: {
            Urban:25000,
            District:43000 
          }
        },{
          Title:"bacup",
          Popn: {
            Urban:2000,
            District:8000 
          }
        },{
          Title:"darwen",
          Popn: {
            Urban:3500,
            District:18000 
          }
        }

      ]

      return {
         getTheMessageOfTheDay: function(){
          return "im still from the towns servce and its " + date
         },
         getYorkshireTowns: function(){
          return yorkshireTowns
         },
         getCumbriaTowns: function(){
          return cumbriaTowns
         },
         getLancashireTowns: function(){
          var defer = $q.defer()
          $timeout(function() { //pretending this is a http call
            defer.resolve(lancashireTowns)
          }, 5000);
          return defer.promise
         }
      }

    }
    townsService.$inject = ['$q','$timeout'];

})();
