angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider){
var routeRoleChecks = {
  admin: {auth: function(mvAuth) {
    return mvAuth.authorizeCurrentUserForRoute('admin')
  }},
  user: {auth: function(mvAuth) {
    return mvAuth.authorizeAuthenticatedUserForRoute()
  }}
}

//below links to different pages

  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', { templateUrl: '/partials/main/main', controller: 'myMainCtrl'})
    .when('/admin/users', { templateUrl: '/partials/admin/user-list',
    controller: 'mvUserListCtrl', resolve: routeRoleChecks.admin
    })
    .when('/signup', { templateUrl: '/partials/account/signup',
    controller: 'mvSignupCtrl'
    })
    .when('/profile', { templateUrl: '/partials/account/profile',
    controller: 'mvProfileCtrl', resolve: routeRoleChecks.user
    })
    .when('/userHomePage', { templateUrl: '/partials/account/userHomePage',
    controller: 'userHomePageCtrl', resolve: routeRoleChecks.user
    })
});

//The resolve parts above deteremine whether the area is available to everybody or just admins

angular.module('app').run(function($rootScope, $location) {
  $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
    if(rejection === 'not authorized') {
      $location.path('/');
    }
  })
})
