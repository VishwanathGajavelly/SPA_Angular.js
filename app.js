var app = angular.module('app', ['ngRoute']);
app.controller('sample', sample);


function sample($routeParams) {
  this.name_flag = true;
  console.log("hello Guys");
  this.name = $routeParams.a;

  this.toggle_name_form = function() {
    this.name_flag = !this.name_flag;
    console.log("ng-clicked ! ");

  }

}

app.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/details', {
      templateUrl: 'details.htm',
      controller: sample,
      caseInsensitiveMatch: true
    })
    .when('/profiles/:a', {
      templateUrl: 'profiles.htm',
      controller: sample,
      caseInsensitiveMatch: true
    })
    .when('/messages', {
      templateUrl: 'messages.htm',
      controller: sample,
      caseInsensitiveMatch: true
    })
    .when('/comments', {
      templateUrl: 'comments.htm',
      controller: sample,
      caseInsensitiveMatch: true
    })
    .when('/likes', {
      redirectTo: '/comments',
      controller: sample,
      caseInsensitiveMatch: true
      //  redirected to Comments Page'
    })
    .when('/unavail', {
      redirectTo: function() {
        alert("so sorry this page isn't available");
        return '/profiles';
        caseInsensitiveMatch: true
      }
    })
    .when('/', {
      template: '<div id= "default"> CLICK ANY OF THE LINKS FROM THE LEFT PANEL</div>'
    })
    .otherwise({
      template: '<div id= "default"> FATAL LINK. <br> CLICK ANY OF THE LINKS FROM THE LEFT PANEL</div>'

    })

}]);
