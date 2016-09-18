/**
 * Created by SoRa on 2016/8/18 0018.
 */
myModule.controller("hello",['$scope',
    function ($scope){
        var animate = function(){
            this.title="标题";
            this.subhead="副标题";
            this.content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur cupiditate eveniet explicabo impedit nihil odio possimus quas recusandae sint. Cum, illum iure laboriosam minima nesciunt sed soluta sunt temporibus."
        }
        var Animates =new Array();
        for(var i=0;i<3;i++){
            var  Animate= new animate();
            Animate.imageSrc="images/pic0"+(i+1)+".jpg"
            Animates.push(Animate);
        }
        $scope.animatesByType =[{type:"日本动漫",animates:Animates},{type:"国产动漫",animates:Animates}];
        $scope.greeting={

            text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur cupiditate eveniet explicabo impedit nihil odio possimus quas recusandae sint. Cum, illum iure laboriosam minima nesciunt sed soluta sunt temporibus.'
        };
        //$scope.opacity="false";
    }
])
myModule.directive("slideInto",function(){
    return {
        restrict: 'A',
        scope: true,
        link: function(scope, elem) {
            scope.slideIntoDo = function(direction,time) {
                var Time = time?time:2000;
                var json = {};
                json[direction] = 0;
                json['opacity'] = 1;
                jQuery(elem).css(direction ,(direction=='left'||direction=='right')?jQuery(elem).width()*0.3*-1:jQuery(elem).height()*0.3*-1).
                   css({position:"relative",opacity:0}).
                    animate(json,Time);

            };
        }
    };
})
