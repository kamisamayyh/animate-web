/**
 * Created by SoRa on 2016/9/20 0020.
 */
define(['app','jquery'], function(app){
    return app.animation('.nav-change',function(){
        return {
            beforeAddClass : function(element, className, done) {
                element.css({
                    opacity: 0
                }).animate({
                    opacity: 1
                },500, done);
            },
            removeClass : function(element, className, done) {
                element.css({
                    opacity: 0
                }).animate({
                    opacity: 0.7
                },500, done);
            }
        }
    });

})

