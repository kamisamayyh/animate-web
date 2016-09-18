/**
 * Created by SoRa on 2016/8/18 0018.
 */
function RouteConfig($routeProvider){
    $routeProvider
        .when('/index', {
            templateUrl: 'views/main.html',
            controller: 'hello'
        })
        .when('/japan', {
            templateUrl: 'views/animateJapanPage.html',
            controller: 'japan'
        })
        .when('/china',{
            templateUrl: 'views/animateChinaPage.html',
            controller: 'china'
        })
        .when('/blog',{
            templateUrl: 'views/blog.html',
            controller: 'blog'
        })
        .when('/blogDetails/:blogId',{
            templateUrl: 'views/blogDetails.html',
            controller: 'blogDetails'
        })
        .otherwise({ redirectTo: '/index' });

//$locationProvider.html5Mode(true).hashPrefix('!');
}


