/**
 * Created by SoRa on 2016/9/20 0020.
 */
define(['app','jquery','scroll-trigger'], function(app){
     app.directive("slideInto",function(){
        return {
            restrict: 'A',
            scope: true,
            link: function(scope, elem) {
                scope.slideIntoDo = function(direction,time) {
                    var Time = time?time:2000;
                    var json = {};
                    json[direction] = 0;
                    json['opacity'] = 1;
                    jQuery(elem).css(direction ,(direction=='left'||direction=='right')?jQuery(elem).width()*0.3*-1:jQuery(elem).height()*0.3*-1).
                        css({position:"relative",opacity:0}).
                        animate(json,Time);
                };
            }
        };
    })
})
