;'use strict'

var app = angular.module('johnpatrickhalling', [
  'ngRoute',
  'johnpatrickhalling.blog',
  'johnpatrickhalling.content'
]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'ContentController'
    })
    .when('/updates', {
      templateUrl: 'views/blog.html',
      controller: 'BlogController'
    })
    .when('/updates/:postID', {
      templateUrl: 'views/blog.html',
      controller: 'BlogController'
    })
    .otherwise({redirectTo: '/'});
}]);

app.controller('ContentController', [
  '$scope', 
  'Wordpress', 
  function($scope, Wordpress) {
    Wordpress.getAbout($scope);
    Wordpress.getTour($scope);
  }]
);

app.controller('BlogController', [
  '$scope', 
  '#routeParams', 
  'Wordpress', 
  function($scope, $routeParams, Wordpress) {
    var postID = $routeParams.postID;
    if (postID) {
      Wordpress.getPost(postID);
    } else {
      Wordpress.getAll();
    }
  }]
);