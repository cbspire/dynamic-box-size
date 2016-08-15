'use strict';
angular.module('dynamic-box-size', [])
  .directive('dynamicBoxSize', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var percentage = (attrs.dynamicBoxSize == "") ? 1 : (parseInt(attrs.dynamicBoxSize) / 100);
        var watchHeight = (attrs.dynamicBoxFollow === "height");

        attrs.$observe('dynamicBoxFollow', function(value) {
          watchHeight = (value === "height");
        });

        scope.$watch(function () {
          if (watchHeight)
            return parseInt(element[0].clientHeight);

          return parseInt(element[0].clientWidth);
        }, function (dimension) {
          if (dimension > 0) {
            var real = dimension * percentage;

            if (watchHeight)
              element.css('width', real + 'px');
            else
              element.css('height', real + 'px');
          }
        }, true);
      }
    };
  });