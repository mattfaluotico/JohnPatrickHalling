; 'use strct';

var app = angular.module('johnpatrickhalling.content', [
  'ngRoute',
  'ngSanitize',
  'duScroll'
]);

app.controller('ContentController', function($document, $scope, Wordpress, $location) {
  Wordpress.getAbout($scope);
  Wordpress.getTour($scope);
  Wordpress.getVideos($scope);

  $scope.s = function(id) {
    $document.scrollToElementAnimated(document.getElementById(id), 30);
  }
});
