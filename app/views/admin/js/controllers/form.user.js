/**
 * Created by SoRa on 2016/11/28 0028.
 */
app.controller('FormUserCtrl', function($scope,$http,$state,$stateParams,ConfigService) {
    $scope.user = {};
    var _id = $stateParams.userId;
    if(_id){
        $http({url:"/admin/user/findOne",method:"POST",data:{_id:_id}})
            .success(function(data){
                data.user.password = '';
                $scope.user = data.user;
                $scope.myCroppedImage = $scope.user.head_portrait;

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
        $scope.user.head_portrait = $scope.myCroppedImage;
        var user = $scope.user;
        console.log(user);
        $http({url:'/admin/user/save',method:'POST',data:user})
            .success(function(data){
                layer.msg(data.msg);
            })
            .error(function(err){

            })

    }
//     ConfigService.returnConfigHttp();

    //imgcrop.js
    $scope.myImage='';

    $scope.cropType="circle";
    var handleFileSelect=function(evt) {
        var file=evt.currentTarget.files[0];
        var reader = new FileReader();
        reader.onload = function (evt) {
            $scope.$apply(function($scope){
                //$scope.user.head_portrait = $scope.myCroppedImage;//添加input传值
                $scope.myImage=evt.target.result;
                $scope.myCroppedImage = evt.target.result;
            });
        };
        reader.readAsDataURL(file);
    };

    angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);



});