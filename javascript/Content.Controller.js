; 'use strct';

var app = angular.module('johnpatrickhalling.content', [
  'ngRoute',
  'ngSanitize'
]);

app.controller('ContentController', function($scope, $http, Wordpress) {
  Wordpress.getAbout($scope);
  Wordpress.getTour($scope);
});
