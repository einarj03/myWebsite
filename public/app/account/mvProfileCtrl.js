angular.module('app').controller('mvProfileCtrl', function($scope, mvAuth, mvIdentity, mvNotifier) {
  $scope.identity = mvIdentity;

  $scope.email = mvIdentity.currentUser.username;
  $scope.fname = mvIdentity.currentUser.firstName;
  $scope.lname = mvIdentity.currentUser.lastName;
  $scope.superman = mvIdentity.currentUser.superman;
  $scope.Thetitle = mvIdentity.currentUser.title;
  $scope.gender = mvIdentity.currentUser.gender;
  $scope.age = mvIdentity.currentUser.age;
  $scope.theStreetAddress = mvIdentity.currentUser.streetAddress;
  $scope.theCity = mvIdentity.currentUser.city;
  $scope.theCounty = mvIdentity.currentUser.county;
  $scope.thePostCode = mvIdentity.currentUser.postCode;
  $scope.homeTelephone = mvIdentity.currentUser.homeTelephone;
  $scope.mobilePhone = mvIdentity.currentUser.mobile;
  $scope.contactEmail = mvIdentity.currentUser.email;
  $scope.jarvis = mvIdentity.currentUser.jarvis;

  $scope.update = function() {
    var newUserData = {
      username: $scope.email,
      firstName: $scope.fname,
      lastName: $scope.lname,
      title: $scope.Thetitle,
      gender: $scope.gender,
      age: $scope.age,
      streetAddress: $scope.theStreetAddress,
      city: $scope.theCity,
      county: $scope.theCounty,
      postCode: $scope.thePostCode,
      homeTelephone: $scope.homeTelephone,
      mobile: $scope.mobilePhone,
      email: $scope.contactEmail
    }

    if($scope.password && $scope.password.length > 0) {
      newUserData.password = $scope.password;
    }

    mvAuth.updateCurrentUser(newUserData).then(function() {
      mvNotifier.notify('Your user account has been updated');
    }, function(reason) {
      mvNotifier.error(reason);
    })
  }

});
