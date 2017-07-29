app.controller('ClientController',function($scope,$rootScope,Util,$uibModal,$stateParams){
	
	$scope.emp = {};	
	$scope.emp.add=[
	{
		       'name':'',
		'designation':'',
		         'id':'',
			   'pan' :'',
	    	
	}
	];	
	$scope.removeEmp=function($index){
		$scope.emp.add.splice($index,1);
		
	}
	$scope.updateEmployee = function(){
		var obj = {name:'' ,designation:'', id:'', pan:'' };
		$scope.emp.add.push(obj);
	}
	$scope.client_update = {};	
	$scope.client_update.director=[
	{'name':'',
		'designation':'',
		         'id':'',
			   'pan' :'',
	    	
	    	
	}
	];	
	$scope.removeDirector=function($index){
		$scope.client_update.director.splice($index,1);
		
	}
	$scope.updateDirector = function(){
		var obj = {name:'' ,designation:'', id:'', pan:''  };
		$scope.client_update.director.push(obj);
	}
})