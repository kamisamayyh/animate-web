app.controller('ImgCropCtrl', ['$scope', function($scope) {
    $scope.myImage='';
    $scope.myCroppedImage='';
    $scope.cropType="circle";
    var handleFileSelect=function(evt) {
      var file=evt.currentTarget.files[0];
      var reader = new FileReader();
      reader.onload = function (evt) {
        $scope.$apply(function($scope){
          $scope.user.head_portrait = $scope.myCroppedImage;//添加input传值
          $scope.myImage=evt.target.result;
        });
      };
      reader.readAsDataURL(file);
    };

    angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);
}]);