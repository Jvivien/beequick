app.controller('marketCtrl',["$scope","$http","goods","cart",function($scope,$http,goods,cart){
	$scope.list=['热销榜','天天特价','优选水果','牛奶面包','卤味熟食','饮料酒水','休闲零食','冰激凌','方便速食','生活用品'
	,'冰激凌','方便速食','生活用品'
	,'冰激凌','方便速食','生活用品'];
	$scope.goods=goods;
	$scope.text='热销榜';
	$scope.num=0;
	function request(text){
		if(!$scope.goods[$scope.text]){
			
		$http.get('http://h5.yztctech.net/api/axf/apicategory.php?category='+$scope.text).success(function(req){
				$scope.goods[$scope.text] = req.data;
	
	})
		console.log($scope.text)
		}
		
	}
	
	request();
	$scope.getData=function(text,index){
		$scope.num=index;
		$scope.text = text;
		request();
	}
	$scope.compute = function(i,num){
		if(i.num){
			i.num += num; 
		}else{
			i.num = 1;
		}
		
		if(i.num>0){
			cart.addCart($scope.text+i.id,i);
		}else{
			cart.dele($scope.text+i.id,i);
		}
	}
	
	
	
	
	
}])