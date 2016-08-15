angular.module('demo-app', [
     'bgDirectives',
     'dynamic-box-size'
])
.controller('DemoController', ['$scope', '$log', function($scope, $log) {

  angular.element(document).bind('mouseup, mousemove', function (ev) {
      $scope.$digest();
  });

}]);