; 'use strct';

var app = angular.module('johnpatrickhalling.content', [
  'ngRoute',
  'ngSanitize'
]);

app.controller('ContentController', function($scope, Wordpress, $location) {
  Wordpress.getAbout($scope);
  Wordpress.getTour($scope);
  Wordpress.getVideos($scope);
});
