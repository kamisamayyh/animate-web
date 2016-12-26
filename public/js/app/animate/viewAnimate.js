/**
 * Created by SoRa on 2016/9/21 0021.
 */
define(['app','jquery'],function(app){
    return app.animation('.view',function(){
        return {
            enter: function(element, done) {
                element.css({
                    opacity: 0.5
                }).animate({
                    opacity: 1
                }, 1000, done);
            }
        };

    });
})