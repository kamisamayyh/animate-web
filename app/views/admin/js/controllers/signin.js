'use strict';

/* Controllers */
  // signin controller
app.controller('SigninFormController', ['$scope', '$http', '$state','$rootScope', function($scope, $http, $state ,$rootScope) {
    $scope.user = {};
    $scope.authError = null;
    $scope.login = function() {
      $scope.authError = null;
      // Try to login
        var user = $scope.user;
        $http({url:'/admin/login',method:'post',data:{user:user}})
            .success(function(data){
                layer.msg(data.msg);

                if(data.flag){
                    var user = JSON.stringify(data.user);
                    window.sessionStorage.setItem("user",user);
                    $rootScope.user = data.user;
                    $state.go('app.table.article');
                    console.log(data);
                }
            })
            .error(function(err){
                layer.msg("网络连接失败！");
            })
    };
  }])
;