/**
 * Created by SoRa on 2016/8/18 0018.
 */
define(['app'], function(app){
    return app.config(['$routeProvider',function($routeProvider) {
        $routeProvider
            .when('/index', {
                templateUrl: 'pages/main.html',
                controller: 'hello'
            })
            .when('/japan', {
                templateUrl: 'pages/animateJapanPage.html',
                controller: 'japan'
            })
            .when('/china',{
                templateUrl: 'pages/animateChinaPage.html',
                controller: 'china'
            })
            .when('/blog',{
                templateUrl: 'pages/blog.html',
                controller: 'blog'
            })
            .when('/blogDetails/:blogId',{
                templateUrl: 'pages/blogDetails.html',
                controller: 'blogDetails'
            })
            .otherwise({ redirectTo: '/index' });
    }]);
})



