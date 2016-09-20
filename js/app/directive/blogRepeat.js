/**
 * Created by SoRa on 2016/8/31 0031.
 */
myModule.directive('blogRepeat', [function () {
    return {
        restrict: 'A',

        link: function ($scope, $element, $attr, ctrl, $transclude) {

            console.log($element.find("div").text()+"::::"+$attr.class);
        }
    }
}])