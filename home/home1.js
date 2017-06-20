app.directive('mySwiper',function(){
        return {
          template: `<div class="swiper">

          </div>`,
          replace: true,
          restrict: 'E',
          controller: function($scope){

          },
          scope: {
            imgs: '='
          },
          link: function(scope,ele,attr){

            setTimeout(function(){
//            console.log(scope.imgs)
              var html = '';
              var index = 0;
              
              for(var i = 0 ; i < scope.imgs.length ; i++){
   
                html += '<div class="item1"><img src="'+scope.imgs[i].activity.img+'"></div>';
              
              }
              
              ele.html(html)
              
              setInterval(function(){
                ele.children().removeClass('active1').eq(index).addClass('active1');
                index++;
                if(index>scope.imgs.length-1){
                	
                	index=0
                }
              },1000);
           
 
            },1000);
            
          }
        }
      });

      app.controller('homeCtrl',['$scope','$http',function($scope,$http){       
      	$scope.reclist = [];
      	$scope.shop=[];
        $http.get('http://h5.yztctech.net/api/axf/apihome.php')
        .success(function(data){
//           console.log(data.data.slide);
         $scope.data=data.data
          $scope.reclist = data.data.slide;
        })
        $http.get('http://h5.yztctech.net/api/axf/apihomehot.php')
	.success(function(req){
		$scope.shop = req.data;
	});
      }])