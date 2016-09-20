/**
 * Created by SoRa on 2016/8/18 0018.
 */
define(['app'], function(app){
    return app.controller("hello",['$scope','$http',
        function ($scope,$http){

            $http.post('test/index_text.txt').success(function(data){
                $scope.animatesByType = data.content;
                $scope.greeting = data.greeting;
            })
            //$scope.opacity="false";
        }
    ])
})


