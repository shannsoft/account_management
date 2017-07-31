app.controller('LoginCtrl',function($scope,LoginService,$state,$window){
	$scope.user={};
	$scope.login=function(){
		 LoginService.loginUser($scope.user.username, $scope.user.password).success(function(user){$state.go('dashboard');})
		.error(function(data) {
            var alertPopup = $window.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
		
	}
	
	
	
	
	
})