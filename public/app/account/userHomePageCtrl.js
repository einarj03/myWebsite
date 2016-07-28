angular.module('app').controller('userHomePageCtrl', function($scope, mvIdentity, mvNotifier, mvAuth, $location) {
  $scope.identity = mvIdentity;

});
