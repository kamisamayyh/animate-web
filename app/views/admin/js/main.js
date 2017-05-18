'use strict';

/* Controllers */

angular.module('app')
  .controller('AppCtrl', ['$scope', '$translate', '$localStorage', '$window', '$state','$rootScope',
    function(              $scope,   $translate,   $localStorage,   $window  ,$state  ,$rootScope) {
      // add 'ie' classes to html
      var isIE = !!navigator.userAgent.match(/MSIE/i);
      isIE && angular.element($window.document.body).addClass('ie');
      isSmartDevice( $window ) && angular.element($window.document.body).addClass('smart');

      // config
      $scope.app = {
        name: 'Animate',
        version: '1.3.3',
        // for chart colors
        color: {
          primary: '#7266ba',
          info:    '#23b7e5',
          success: '#27c24c',
          warning: '#fad733',
          danger:  '#f05050',
          light:   '#e8eff0',
          dark:    '#3a3f51',
          black:   '#1c2b36'
        },
        settings: {
          themeID: 1,
          navbarHeaderColor: 'bg-black',
          navbarCollapseColor: 'bg-white-only',
          asideColor: 'bg-black',
          headerFixed: true,
          asideFixed: false,
          asideFolded: false,
          asideDock: false,
          container: false
        }
      }

      // save settings to local storage
      if ( angular.isDefined($localStorage.settings) ) {
        $scope.app.settings = $localStorage.settings;
      } else {
        $localStorage.settings = $scope.app.settings;
      }
      $scope.$watch('app.settings', function(){
        if( $scope.app.settings.asideDock  &&  $scope.app.settings.asideFixed ){
          // aside dock and fixed must set the header fixed.
          $scope.app.settings.headerFixed = true;
        }
        // save to local storage
        $localStorage.settings = $scope.app.settings;
      }, true);

      // angular translate
      $scope.lang = { isopen: false };
      $scope.langs = {en:'English',ch:"Chinese"};
      $scope.selectLang = $scope.langs[$translate.proposedLanguage()] || "English";
      $scope.setLang = function(langKey, $event) {
        // set the current lang
        $scope.selectLang = $scope.langs[langKey];
        // You can change the language during runtime
        $translate.use(langKey);
        $scope.lang.isopen = !$scope.lang.isopen;
      };

      function isSmartDevice( $window )
      {
          // Adapted from http://www.detectmobilebrowsers.com
          var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
          // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
          return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
      }

        //localstorage 存储用户信息
        if(!angular.isDefined($rootScope.user) && window.sessionStorage.getItem("user")){
            // UserInfo exists in localstorate but not on $rootScope. This means the page was reloaded or the user is returning.
            $rootScope.user =JSON.parse( window.sessionStorage.getItem("user"));
            //console.log(window.sessionStorage.getItem("user"));
        }else if(!angular.isDefined($rootScope.user) && !window.sessionStorage.getItem("user")){
            // User is not logged at all. Send him back to login page
            $state.go("access.signin");//跳转到登录界面
        }else if(angular.isDefined($rootScope.user)){
            // User is logged in. You can run some extra validations in here.
        }
        //控制中转登陆和权限拦截
        $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
            if(toState.name=='access.signin')return;// 如果是进入登录界面则允许
            if(toState.name=="access.error")return;
            if(!$rootScope.user ){ //|| !$rootScope.user.token
                event.preventDefault();// 取消默认跳转行为
                $state.go("access.signin",{from:fromState.name,w:'notLogin'});//跳转到登录界面
            }
        });
  }]);