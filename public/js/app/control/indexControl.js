/**
 * Created by SoRa on 2016/8/18 0018.
 */
define(['app'], function(app){
    return app.controller("hello",['$scope','$http','$rootScope',
        function ($scope,$http,$rootScope){
            $http.get('/admin/index/get')
                .success(function(data){
                    $rootScope.index = data.data;
                });
            $http.get('/index/article').success(function(data){
                console.log(data);
                $scope.animatesByType = data.data.content;
            })
        }
    ])
})


