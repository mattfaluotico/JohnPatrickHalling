;'use strict'

var john = angular.module('johnpatrickhalling', [
  'ngRoute',
  'johnpatrickhalling.blog',
  'johnpatrickhalling.content',
  'johnpatrickhalling.notfound'
]);

john.config(function($routeProvider, $locationProvider) {

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
