app.controller('EmployeeController',function($scope,$rootScope,Util,$uibModal,$stateParams){
	
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
	$scope.audit = {};	
	$scope.audit.list=[
	{
		       'username':'',
		'password':'',
		         'email':'',
			   
	    	
	}
	];	
	$scope.removeAudit=function($index){
		$scope.emp.add.splice($index,1);
		
	}
	$scope.updateAudit = function(){
		var obj = {username:'' ,password:'', email:'' };
		$scope.emp.add.push(obj);
	}
})