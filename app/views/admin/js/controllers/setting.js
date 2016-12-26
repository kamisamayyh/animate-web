/**
 * Created by SoRa on 2016/12/23 0023.
 */
app.controller('SettingCtrl', function($scope,$state) {
    $scope.settingActive = function(){
        $state.go('app.form.setting');
    };
});