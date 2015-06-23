; 'use strct';

var john = angular.module('johnpatrickhalling.blog',[
  'ngRoute'
]);

john.controller('BlogController', [function($scope, $http){
  var blog = new Blog($scope, $http);
  blog.getPost(ID);
}]);
