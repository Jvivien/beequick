


app.controller('homeCtrl',["$scope","$http","$timeout",function($scope,$http,$timeout){
	$scope.date=null;
	$http.get('http://h5.yztctech.net/api/axf/apihome.php').success(function(data){
    $scope.data=data.data;
    console.log($scope.data)
	});

  $http.get('http://h5.yztctech.net/api/axf/apihome.php').success(function(rm){
  	$scope.data=rm.data;
  	 $timeout(function(){
  	 	
	  	 var swiper = new Swiper('.swiper-container', {
	        pagination: '.swiper-pagination',
	        spaceBetween: 30,
	        centeredSlides: true,
	        autoplay: 2500,
	        loop:true
	  	});
  	 },100)
  
	})
}])