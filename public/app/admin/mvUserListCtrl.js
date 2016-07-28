angular.module('app').controller('mvUserListCtrl', function($scope, $location, mvUser) {
  $scope.users = mvUser.query();

  $scope.go = function ( path ) {
    $location.path( path );
  }
});
