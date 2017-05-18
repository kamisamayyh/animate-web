/**
 * Created by SoRa on 2016/8/18 0018.
 */
define(['app','jquery'], function(app){
    return app.controller("japan",['$scope','$http','$rootScope',
        function ($scope,$http,$rootScope){
            $http.get('/admin/index/get')
                .success(function(data){
                    $rootScope.index = data.data;
                    $scope.carouselImgs = $rootScope.index.images2;
                });
            $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
                //下面是在table render完成后执行的js
                $('#myCarousel').carousel({
                    interval: 3000
                });
            });

            $http({url:"/index/getArticleByTypeName",method:"POST",data:{name:"日本动漫"}}).
                success(function(data){
                    var Animates = data.data;
                    var NumberPerLine = 3;
                    var Rows = new Array();
                    var rowLength = parseInt(Animates.length/NumberPerLine);
                    if(Animates.length%NumberPerLine!=0)
                        rowLength++;
                    for(var i=0;i<rowLength;i++){
                        var Row = new Array();
                        Row.push(Animates[i*NumberPerLine]);
                        if(Animates[i*NumberPerLine+1])
                            Row.push(Animates[i*NumberPerLine+1]);
                        if(Animates[i*NumberPerLine+2])
                            Row.push(Animates[i*NumberPerLine+2]);
                        Rows.push(Row);
                    }
                    $scope.rows=Rows;
                }).
                error(function(){

                })
        }
    ])
})



