var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/profiles', {
      templateUrl: 'profiles.htm'
    })
    .when('/messages', {
      templateUrl: 'messages.htm'
    })
    .when('/comments', {
      templateUrl: 'comments.htm'
    })
    .when('/unavail', {
      redirectTo: function() {
        alert("so sorry this page isn't available");
        return '/profiles';
      }
    })
    .when('/', {
      template: '<div id= "default"> CLICK ANY OF THE LINKS FROM THE LEFT PANEL</div>'
    })
    .otherwise({
      template: '<div id= "default"> FATAL LINK. <br> CLICK ANY OF THE LINKS FROM THE LEFT PANEL</div>'

    })

}]);
