/**
 * Created by SoRa on 2016/8/25 0025.
 */
myModule.controller("china",['$scope',
    function ($scope){
        $scope.carouselImgs = ["images/carousel/Carousel1.png","images/carousel/Carousel2.png","images/carousel/Carousel3.png"];
        var animate = function(){
            this.title="标题";
            this.content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur cupiditate eveniet explicabo impedit nihil odio possimus quas recusandae sint. Cum, illum iure laboriosam minima nesciunt sed soluta sunt temporibus."
        }
        var Animates =new Array();
        for(var i=0;i<4;i++){
            var  Animate= new animate();
            Animate.imageSrc="images/pic0"+((i%3)+1)+".jpg";
            Animates.push(Animate);
        }


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
        //$scope.animates= Animates;


    }
])