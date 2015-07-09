; 'use strct';

var app = angular.module('johnpatrickhalling.blog',[
  'ngRoute',
  'ngSanitize'
]);

app.controller('BlogController', [function($scope, $routeParams, Wordpress){
  // var postID = $routeParams.postID;
  // if (postID) {
  //   Wordpress.getPost(postID);
  // } else {
  //   Wordpress.getAll();
  // }
}]);
