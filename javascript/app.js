;'use strict'

var app = angular.module('johnpatrickhalling', [
  'ngRoute',
  'johnpatrickhalling.controllers'
]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'Home'
  })
  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'About'
  })
  .when('/shows', {
    templateUrl: 'views/shows.html',
    controller: 'Shows'
  })
  .when('/videos', {
    templateUrl: 'views/videos.html',
    controller: 'Videos'
  })
  .when('/contact', {
    templateUrl: 'views/contact.html',
    controller: 'Contact'
  })
  .when('/blog', {
    templateUrl: 'views/blog.html',
    controller: 'Blog'
  })
  .when('/blog/:postID', {
    templateUrl: 'views/post.html',
    controller: 'Blog'
  })
  .otherwise({redirectTo: '/'});
}]);
