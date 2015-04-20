'use strict';
//creating module, without [] looking for module 'alpha'
angular.module('alpha',[])
.controller('beta',['$scope', function($scope){
  console.info('beta controller works mo-fucka');
  $scope.x = 3;
  $scope.y = 2;
}])
.controller('gamma',['$scope', function($scope){
  console.info('gamma controller works mo-fucka');
  $scope.x = 5;
  $scope.y = 7;
}])
.controller('listfun',['$scope', function($scope){
  console.info('listfun controller works mo-fucka');
  $scope.computeNumbers = function(){
    if (typeof $scope.numbers === 'string'){
      $scope.numbers = $scope.numbers.split(',');
    }
    $scope.sum = $scope.numbers.reduce(function(a,b){return (a*1) + (b*1);});
    $scope.product = $scope.numbers.reduce(function(a,b){return a * b;});
  };
  $scope.addNumber = function(){
    $scope.numbers.push(($scope.newNumber * 1));
    $scope.computeNumbers();
  };
  $scope.setColor = function(number){
    if (number % 2){return 'red';}
    else {return 'blue';}
  };
  $scope.removeNumber = function(index){
    $scope.numbers.splice(index,1);
    $scope.computeNumbers();
  };
}])
.controller('rainbow',['$scope', function($scope){
  console.info('rainbow controller works mo-fucka');
  $scope.colors = ['blue','green','yellow'];

  $scope.removeColor = function(index){
    console.warn('you clicked remove', index);
    $scope.colors.splice(index, 1);
  };

  $scope.newcolor = '#cccccc';
  $scope.addColor = function(){
    console.warn('you just clicked add color!!');
    var color = $scope.newcolor;
    console.info('you want to add the color', color);
    $scope.colors.push(color);
  };
}])
.run(['$rootScope', function($rootScope){
  console.info('run function much running, very wow!');
  $rootScope.z = 12;
}])
.controller('calculator',['$scope', function($scope){
  console.info('calculator controller');
  $scope.compute = function(){
    console.warn('we just clicked compute');
    var result;
    var x = $scope.x;
    var y = $scope.y;

    switch($scope.op){
      case '+':
        result = x + y;
        break;
      case '-':
        result = x - y;
        break;
      case '*':
        result = x * y;
        break;
      case '/':
        result = x / y;
        break;
    }
    $scope.result = result;
  };
}]);
