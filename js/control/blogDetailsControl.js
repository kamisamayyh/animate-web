/**
 * Created by SoRa on 2016/9/1 0001.
 */
myModule.controller('blogDetails',['$scope','$routeParams',
    function($scope,$routeParams){
        $scope.details={
            detailsTitle:'test',
            detailsContent:"<h1>提示</h1><br><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis culpa nemo, quaerat sequi sunt tenetur. Architecto blanditiis consectetur odio odit qui quo sequi voluptatem. Ipsam libero nobis odio rerum.</div>"
        }
        console.log($routeParams.blogId);
    }
]);

myModule.directive('detailsContent', function() {
    return {
        restrict: 'A',
        template: '<div><h1>提示</h1><br><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis culpa nemo, quaerat sequi sunt tenetur. Architecto blanditiis consectetur odio odit qui quo sequi voluptatem. Ipsam libero nobis odio rerum.</div></div>',
        replace: true
    };
});