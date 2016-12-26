/**
 * Created by SoRa on 2016/9/21 0021.
 */
define(['app'], function(app){
    app.filter('trustHtml', function ($sce) {
        return function (input) {
            return $sce.trustAsHtml(input);
        }
    });
});