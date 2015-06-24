;'use strict'

var app = angular.module('johnpatrickhalling', [
  'ngRoute',
  'johnpatrickhalling.blog',
  'johnpatrickhalling.content',
  'johnpatrickhalling.notfound'
]);

app.config(function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'ContentController'
    })
    .when('/blog', {
      templateUrl: 'views/blog.html',
      controller: 'BlogController'
    })
    .when('/notfound', {
      templateUrl: 'views/notfound.html',
      controller: 'NotFoundController'
    })
    .otherwise({redirectTo: '/notfound'});
});
