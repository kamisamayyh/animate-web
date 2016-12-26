/**
 * Created by SoRa on 2016/11/28 0028.
 */
angular.module('app')
    .directive('ngDisabled',function(){
    return {
        restrict: 'A',
        link: function(scope, elm, attrs){
            console.log(scope);
            console.log(scope.$eval(attrs.ngDisabled));
            setInterval(function(){
                console.log(scope.$eval(attrs.ngDisabled))
            },1000);
        }
    }
});