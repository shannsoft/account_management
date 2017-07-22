var app = angular.module("acc_app", ['ui.router', 'ui.bootstrap', 'ngResource', 'ngStorage', 'ngAnimate','datePicker','ngTable']);
app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/dashboard');
  $stateProvider
  .state('login', {
      templateUrl: 'views/login.html',
      url: '/login',
	  controller:'LoginCtrl'
      //resolve: {
        //loggedout: checkLoggedin
      //}
  })
  .state('dashboard', {
    templateUrl: 'views/dashboard.html',
    url: '/dashboard',
    //resolve: {
      //loggedout: checkLoggedout
    //}
  })
 .state('companylist', {
    templateUrl: 'views/companylist.html',
    url: '/companylist',
    //resolve: {
      //loggedout: checkLoggedout
    //}
  })
  .state('newemployee', {
    templateUrl: 'views/newemployee.html',
    url: '/newemployee',
    //resolve: {
      //loggedout: checkLoggedout
    //}
  })
  .state('user-list',{
	  templateUrl:'views/userlist.html',
	  url:'/user-list',
	  //resolve:{
		  //loggedout:checkLoggedout
	  //}
	  
  } )
  .state('newuser',{
	  templateUrl:'views/newuser.html',
	  url:'/newuser',
	  //resolve:{
		  //loggedout:checkLoggedout
	  //}
  })
  function checkLoggedout($q, $timeout, $rootScope, $state, $localStorage) {
    var deferred = $q.defer();
    accessToken = localStorage.getItem('accessToken')
    $timeout(function(){
      if(accessToken){
        deferred.resolve();
      }
      else{
        deferred.resolve();
        $state.go('login');
      }
    },100)
  }
  function checkLoggedin($q, $timeout, $rootScope, $state, $localStorage) {
    var deferred = $q.defer();
    accessToken = localStorage.getItem('accessToken')
    $timeout(function(){
      if(accessToken){
        deferred.resolve();
        $state.go('dashboard');
      }
      else{
        deferred.resolve();
      }
    },100)
  }
});
app.constant('CONFIG', {
  'HTTP_HOST': 'server/api.php'
})
app.run(function($http,$rootScope,$localStorage,$timeout){
  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    $rootScope.stateName = toState.name;
  })
});
app.factory('Util', ['$rootScope',  '$timeout' , function( $rootScope, $timeout){
    var Util = {};
    $rootScope.alerts =[];
    Util.alertMessage = function(msgType, message){
        var alert = { type:msgType , msg: message };
        $rootScope.alerts.push( alert );
        $timeout(function(){
            $rootScope.alerts.splice($rootScope.alerts.indexOf(alert), 1);
        }, 5000);
    };
    return Util;
}]);

app.directive('fileModel', ['$parse', function ($parse) {
    return {
       restrict: 'A',
       link: function(scope, element, attrs) {
          var model = $parse(attrs.fileModel);
          var modelSetter = model.assign;

          element.bind('change', function(){
             scope.$apply(function(){
                modelSetter(scope, element[0].files[0]);
             });
          });
       }
    };
 }]);
 app.filter('getShortName', function () {
     return function (value) {
       if(value){
         var temp = angular.copy(value);
         temp = temp.split(" ");
         temp = temp[0].charAt(0)+temp[temp.length-1].charAt(0);
         return temp.toUpperCase();
       }
     };
 });
