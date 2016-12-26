/**
 * Created by SoRa on 2016/9/19 0019.
 */
/**
 * 入口文件
 */
require.config({
//    baseUrl: "js/",
    paths: {
        "jquery": "lib/jquery-2.1.4",

        "bootstrap":"lib/bootstrap",

        "angular" : "lib/1.4.2/angular",
        "angular-route" : "lib/1.4.2/angular-route",
        "angular-animate" : "lib/1.4.2/angular-animate",
        "scroll-trigger": "lib/scroll-trigger",

//        "geoFactory" : "services/geoFactory",

        "app" : "app/control/app",

        "blogCtrl" : "app/control/blogControl",
        "blogDetailsCtrl" : "app/control/blogDetailsControl",
        "chinaCtrl" : "app/control/chinaControl",
        "indexCtrl" : "app/control/indexControl",
        "japanCtrl" : "app/control/japanControl",

        "slideIntoDirective":"app/directive/slideInto",

        'viewAnimate':'app/animate/viewAnimate',//animate
        'navChangeAnimate':'app/animate/navChangeAnimate',

        'trustHtml':'app/filter/trustHtml',//filter

        "route" : "app/route/appRoute"
    },
    shim: {
        'jquery':{
            exports: 'jquery'
        },
        'bootstrap':{
            deps: ["jquery"],
            exports: 'bootstrap'
        },
        'angular': {
            exports: 'angular'
        },
        'angular-route':{
            deps: ["angular"],
            exports: 'angular-route'
        },
        'angular-animate':{
            deps: ["angular"],
            exports: 'angular-animate'
        },
        'scroll-trigger':{
            deps: ["angular"],
            exports: 'scroll-trigger'
        }
    }
});


require(['jquery','angular','angular-route','angular-animate','scroll-trigger','app','route','blogCtrl','blogDetailsCtrl','chinaCtrl','indexCtrl','japanCtrl','slideIntoDirective','viewAnimate','navChangeAnimate','trustHtml'],function ($,angular){

    $(function () {
        angular.bootstrap(document,["animateApp"]);
    })

});