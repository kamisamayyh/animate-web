/**
 * Created by SoRa on 2017/4/7 0007.
 */
app.controller('FormArticleCtrl', function($rootScope,$scope,$http,$state,$stateParams,fileReader) {

    $scope.article = {};
    $scope.article.article_type={};

    var _id = $stateParams.articleId;
    if(_id){
        $http({url:"/admin/article/findOne",method:"POST",data:{_id:_id}})
            .success(function(data){
                console.log(data);
                $scope.article = data.article;
            })
            .error(function(err) {

            });
    }
    $scope.getFile = function () {
        fileReader.readAsDataUrl($scope.file, $scope)
            .then(function(result) {
                $scope.article.image = result;
            });
    };
    $http({url:"/admin/article_type/getList/",method:"GET"})
        .success(function(data){
            $scope.article_type = data;
            console.log(data);
        })
        .error(function(err){

        });
    $scope.updateArticle = function(){
        if(!$scope.article.author){
            $scope.article.author = $rootScope.user._id;
        }

        console.log($scope.article);

        $http({url:"/admin/article/save",method:"POST",data:{article:$scope.article}})
            .success(function(data){
                console.log(data);
                layer.msg(data.msg.toString());
            })
            .error(function(err){
                console.log(err);
            })
    }

});