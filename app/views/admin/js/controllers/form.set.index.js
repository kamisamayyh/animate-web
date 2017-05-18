/**
 * Created by SoRa on 2017/4/20 0020.
 */
app.controller('FormSetIndexCtrl', function($rootScope,$scope,$http,$state,$stateParams,fileReader) {
    $scope.index={};
    $scope.index.images1 = [];
    $scope.index.images2 = [];
    $http({url:'/admin/index/get',method:"get"})
        .success(function(data){
            $scope.index = data.data;
            for(var i =0;i<$scope.index.images1.length;i++){
                $scope.index.images1[i].remove=function(){
                    for(var j=0;j<$scope.index.images1.length;j++){
                        if(isEqual(this, $scope.index.images1[j])){
                            $scope.index.images1.splice(j, 1);
                        }
                    }
                }
            }
            for(var i =0;i<$scope.index.images2.length;i++){
                $scope.index.images2[i].remove=function(){
                    for(var j=0;j<$scope.index.images2.length;j++){
                        if(isEqual(this, $scope.index.images2[j])){
                            $scope.index.images2.splice(j, 1);
                        }
                    }
                }
            }


        });
    $scope.update = function(){
        var index = $scope.index;
        $http({url:"/admin/index/save",method:"POST",data:index})
          .success(function(data){
              layer.msg(data.msg);
          })
          .error(function(){

          })
    };
    $scope.getFile = function (type) {
        fileReader.readAsDataUrl($scope.file, $scope)
            .then(function(result) {
                var image ={};
                image.src=result;
                image.size=$scope.file.size;
                image.name=$scope.file.name;
                if(type=="image1"){
                    image.remove=function(){
                        for(var i=0;i<$scope.index.images1.length;i++){
                            if(isEqual(image, $scope.index.images1[i])){
                                $scope.index.images1.splice(i, 1);
                            }
                        }
                    }
                    $scope.index.images1.push(image);
                }
                else if(type=="image2"){
                    image.remove=function(){
                        for(var i=0;i<$scope.images2.length;i++){
                            if(isEqual(image, $scope.images2[i])){
                                $scope.index.images2.splice(i, 1);
                            }
                        }
                    }
                    $scope.index.images2.push(image);
                }
            });
    };



//isEqual：判断两个对象是否键值对应相等
    function isEqual(a,b){
        //如果a和b本来就全等
        if(a===b){
            //判断是否为0和-0
            return a !== 0 || 1/a ===1/b;
        }
        //判断是否为null和undefined
        if(a==null||b==null){
            return a===b;
        }
        //接下来判断a和b的数据类型
        var classNameA=toString.call(a),
            classNameB=toString.call(b);
        //如果数据类型不相等，则返回false
        if(classNameA !== classNameB){
            return false;
        }
        //如果数据类型相等，再根据不同数据类型分别判断
        switch(classNameA){
            case '[object RegExp]':
            case '[object String]':
                //进行字符串转换比较
                return '' + a ==='' + b;
            case '[object Number]':
                //进行数字转换比较,判断是否为NaN
                if(+a !== +a){
                    return +b !== +b;
                }
                //判断是否为0或-0
                return +a === 0?1/ +a === 1/b : +a === +b;
            case '[object Date]':
            case '[object Boolean]':
                return +a === +b;
        }
        //如果是对象类型
        if(classNameA == '[object Object]'){
            //获取a和b的属性长度
            var propsA = Object.getOwnPropertyNames(a),
                propsB = Object.getOwnPropertyNames(b);
            if(propsA.length != propsB.length){
                return false;
            }
            for(var i=0;i<propsA.length;i++){
                var propName=propsA[i];
                //如果对应属性对应值不相等，则返回false
                if(a[propName] !== b[propName]){
                    return false;
                }
            }
            return true;
        }
        //如果是数组类型
        if(classNameA == '[object Array]'){
            if(a.toString() == b.toString()){
                return true;
            }
            return false;
        }
    }




});