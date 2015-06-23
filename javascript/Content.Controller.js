; 'use strct';

var john = angular.module('johnpatrickhalling.content', [
  'ngRoute'
]);

john.controller('ContentController', [function($scope, $http){
  var about = new Blog($scope, $http);
  about.getAbout();
  about.getRecent();
}]);

function getAbout
