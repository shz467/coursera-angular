(function(){
  'use strict';

  angular.module('appModule', [])
  .controller('LunchCheckController', ControllerFunc)
  .filter('custom', customFilterFactory);



  function customFilterFactory(){
      return function(input){
          return input + '@';
    };

    // return function(input, option1){
    //     if(option1 === '#'){
    //       return input + '@' + '##';
    //     }
    //     else{
    //           return input + '@' + '**';
    //     }
    // };
  };



  ControllerFunc.$inject = ['$scope', '$filter', 'customFilter'];
  function ControllerFunc($scope, $filter, customFilter ){

    // custom filters
    $scope.filterVal = customFilter('val');
    $scope.filterVal2 = customFilter('val2', '#');

    $scope.text = "";
    $scope.outputMessage = "";
    $scope.txt1 = $filter('uppercase')("txt1");
    $scope.txt2 = "txt2";
    $scope.num1 = $filter('currency')("18",'#' , 3);

    // split string and validate
    $scope.validate = function(){
      var str =  $scope.text;
      var strArray = str.split(',');
      if(strArray.length <= 3){
          $scope.outputMessage = "Good Job!";
      }
      else{
            $scope.outputMessage = "Too much man...";
      }

      //$scope.outputMessage = strArray[1];


    }
  };
})();
