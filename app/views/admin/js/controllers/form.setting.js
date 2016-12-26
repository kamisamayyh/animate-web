/**
 * Created by SoRa on 2016/12/23 0023.
 */
app.controller('FormSettingCtrl', function($scope,$http,$state,$stateParams,ConfigService) {

    var _id = $stateParams.userId;
    if(_id){
        $http({url:"/admin/user/findOne",method:"POST",data:{_id:_id}})
            .success(function(data){
                data.user.password = '';
                $scope.user = data.user;
            })
            .error(function(err){

            })
    }

    $http({url:"/admin/account_type/getList",method:'GET'})
        .success(function(data){
            $scope.accountTypes = data;
        })
        .error(function(err){
            layer.msg("网络连接失败！");
        })
    $scope.updateUser = function(){
        var user = $scope.user;
        $http({url:'/admin/user/save',method:'POST',data:user})
            .success(function(data){
                layer.msg(data.msg);
            })
            .error(function(err){
                layer.msg(err);
            })

    }
//     ConfigService.returnConfigHttp();
});