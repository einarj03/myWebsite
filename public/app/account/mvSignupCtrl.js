angular.module('app').controller('mvSignupCtrl', function($scope, mvUser, mvNotifier, $location, mvAuth) {

  $scope.signup = function() {
    var newUserData = {
      username: $scope.email,
      superman: $scope.superman,
      password: $scope.password,
      title: $scope.Thetitle,
      firstName: $scope.fname,
      lastName: $scope.lname,
      gender: $scope.gender,
      age: $scope.age,
      streetAddress: $scope.theStreetAddress,
      city: $scope.theCity,
      county: $scope.theCounty,
      postCode: $scope.thePostCode,
      homeTelephone: $scope.homeTelephone,
      mobile: $scope.mobilePhone,
      email: $scope.contactEmail,
      jarvis: "TBC"
    };

    mvAuth.createUser(newUserData).then(function() {
      mvNotifier.notify('User account created!');
      $location.path('/');
    }, function(reason) {
      mvNotifier.error(reason);
    })
  }
})
