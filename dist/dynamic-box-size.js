'use strict';
angular.module('dynamic-box-size', [])
  .directive('dynamicBoxSize', function() {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var percentage = (attrs.dynamicBoxSize == "") ? 1 : (parseInt(attrs.dynamicBoxSize) / 100);

        scope.getWidth = function () {
          return parseInt(element[0].clientWidth);
        };

        scope.$watch(scope.getWidth, function (width) {
          if (width > 0) {
            var real = width * percentage;
            element.css('height', real + 'px');
          }
        }, true);
      }
    };
  });
