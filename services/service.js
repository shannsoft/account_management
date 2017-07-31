app.service('LoginService',function($q){
	return{
		loginUser: function(user){
			var deffered = $q.defer();
			var promise = deffered.promise;
			if(user.username == 'user' && user.password == 'secret'){
				deffered.resolve('welcome' + name + '!!');
			}else{
				deffered.reject('wrong credentials...');
			}
			return promise;
		}
	}
})
