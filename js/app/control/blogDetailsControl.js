/**
 * Created by SoRa on 2016/9/1 0001.
 */
define(['app'], function(app){
    return app.controller('blogDetails',['$scope','$routeParams','$http',
        function($scope,$routeParams,$http){
            $http.post('test/details.txt').success(function(data){
                $scope.details=data;
            })
            console.log($routeParams.blogId);
        }
    ]);
})


