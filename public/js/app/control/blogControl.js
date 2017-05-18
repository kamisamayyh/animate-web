/**
 * Created by SoRa on 2016/8/27 0027.
 */
define(['app'], function(app){
    return app.controller("blog",['$scope','$http',
        function ($scope,$http){

            $http.get("/index/getArticles").
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
});
