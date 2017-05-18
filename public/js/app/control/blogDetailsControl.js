/**
 * Created by SoRa on 2016/9/1 0001.
 */
define(['app','layer','angular-route'], function(app){
    return app.controller('blogDetails',['$scope','$routeParams','$http','$route',
        function($scope,$routeParams,$http,$route){
            var article_id =$routeParams.blogId;
            $scope.comment_loading={};
            $scope.comment_loading.limit=3;
            $scope.comment_loading.skip=0;
            $scope.comment_loading.loading_flag=false;
            $scope.comment_loading.loading_function=function(){
              $scope.comment_loading.loading_flag=true;
                $http({url:"/index/getCommentsById",method:"POST",data:{_id:article_id,limit:$scope.comment_loading.limit,skip:$scope.comment_loading.skip}})
                    .success(function(data){
                        $scope.comments=$scope.comments.concat(data.comments);
                        if(data.comments.length!=$scope.comment_loading.limit){
                            $scope.comment_loading.skip+=data.comments.length;
                        }
                        else{
                            $scope.comment_loading.skip+=$scope.comment_loading.limit;
                        }
                        $scope.comment_loading.loading_flag = false;
                    })
                    .error(function(){

                    });
            };

            $http({url:'/admin/article/findOne',method:"POST",data:{_id:$routeParams.blogId}}).success(function(data){
                $scope.details=data.article;
            });
            $http({url:"/index/getCommentsById",method:"POST",data:{_id:article_id,limit:$scope.comment_loading.limit,skip:$scope.comment_loading.skip}})
                .success(function(data){
                    $scope.comments=data.comments;
                    if(data.comments.length!=$scope.comment_loading.limit){
                        $scope.comment_loading.skip+=data.comments.length;
                    }
                    else{
                        $scope.comment_loading.skip+=$scope.comment_loading.limit;
                    }

                })
                .error(function(){

                });
            $scope.commentUpdate = function(){
                $scope.comment.article=$scope.details._id;
                $http({url:'/index/comment',method:"POST",data:{comment:$scope.comment}})
                    .success(function(data){
                        console.log(data);
                        if(data.flag){
                            //$route.reload();

                            layer.msg(data.msg);
                        }
                    })
                    .error(function(){
                    });
            }
        }
    ]);
})


