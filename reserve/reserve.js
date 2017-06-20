app.controller('reserveCtrl',["$scope",'$http',function($scope,$http){
	$scope.jlist=['精选水果','直供蔬菜','水产海鲜','肉禽蛋','乳品烘焙','精选水果','直供蔬菜','水产海鲜','肉禽蛋','乳品烘焙'];
	$scope.shuju-null;
	$scope.num=0;
	function request(text){
		text=text||'精选水果';
		$http.get('http://h5.yztctech.net/api/axf/apiyuding.php').success(function(shuju){
			$scope.shuju=shuju.product;
		})
	}
	request();
	$scope.getData=function(text,index){
		$scope.num=index;
		request(text);
	}
}])