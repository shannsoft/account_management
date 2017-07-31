app.service('LoginService',function($q){
	return{
	loginUser:function(name,pw){
		var deffered = $q.defer();
		var promise = deffered.promise;
		if(name == 'user' && pw == 'secret'){
			deffered.resolve('welcome' + name + '!!');
		}else{
			deffered.reject('wrong credentials...');
		}
		promise.success= function(fn){
			promise.then(fn);
			return promise;
		}
		promise.error=function(fn){
			promise.then(null,fn);
			return promise;
		}
		return promise;
	}
	
	
}
})
