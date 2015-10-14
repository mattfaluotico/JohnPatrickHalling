; 'use strct';

var app = angular.module('johnpatrickhalling.content', [
  'ngRoute',
  'ngSanitize'
]);

app.controller('ContentController', function($scope, Wordpress, $location) {
  Wordpress.getAbout($scope);
  Wordpress.getTour($scope);

  $("#l_Music").click(function(event) {
    event.preventDefault();
    $.scrollTo("#music", 500);
    location.hash = "music";
    console.log($location.hash("music"));
  });
  $("#l_Tour").click(function(event) {
    event.preventDefault();
    location.hash = "tour";
    $.scrollTo("#tour", 500);
  });
  $("#l_Videos").click(function(event) {
    event.preventDefault();
    location.hash = "video";
    $.scrollTo("#videos", 500);
  });
  $("#l_About").click(function(event) {
    event.preventDefault();
    location.hash = "about";
    $.scrollTo("#about", 500);
  });
  $("#l_Contact").click(function(event) {
    event.preventDefault();
    location.hash = "contact";
    $.scrollTo("#contact", 500);
  });

});
