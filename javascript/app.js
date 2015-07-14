;'use strict'

var app = angular.module('johnpatrickhalling', [
  'ngRoute',
  'johnpatrickhalling.blog',
  'johnpatrickhalling.content'
]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'ContentController'
    })
    .when('/updates/:postID', {
      templateUrl: 'views/blog.html',
      controller: 'BlogController'
    })
    .otherwise({redirectTo: '/'});
}]);


// $(document).ready(function(){
//   $("#l_Music").click(function(event) {
//     event.preventDefault();
//     $.scrollTo("#music", 500);
//   });
//   $("#l_Tour").click(function(event) {
//     event.preventDefault();
//     $.scrollTo("#tour", 500);
//   });
//   $("#l_Blog").click(function(event) {
//     event.preventDefault();
//     $.scrollTo("#blog", 500);
//   });
//   $("#l_Videos").click(function(event) {
//     event.preventDefault();
//     $.scrollTo("#videos", 500);
//   });
//   $("#l_About").click(function(event) {
//     event.preventDefault();
//     $.scrollTo("#about", 500);
//   });
//   $("#l_Contact").click(function(event) {
//     event.preventDefault();
//     $.scrollTo("#contact", 500);
//   });
// });