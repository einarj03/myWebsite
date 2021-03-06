angular.module('app').controller('myNavBarLoginCtrl', function($scope, $http, mvIdentity, mvNotifier, mvAuth, $location) {
  $scope.identity = mvIdentity;
  $scope.signin = function(username, password){
    mvAuth.authenticateUser(username, password).then(function(success){
      if(success){
        mvNotifier.notify('You have successfully signed in!');
        $location.path('/userHomePage');
      } else{
        mvNotifier.notify('Username/Password combination incorrect');
        $location.path('/');
      }
      //$location.path('/userHomePage');    //Use to be just a / and not userHomePage
    });

  }

  $scope.signout = function() {
    mvAuth.logoutUser().then(function() {
      $scope.username = "";
      $scope.password = "";
      mvNotifier.notify('You have successfully signed out!');
      $location.path('/');
    });
  }

});
