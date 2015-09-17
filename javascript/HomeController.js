; 'use strct';

var app = angular.module('johnpatrickhalling.content', [
  'ngRoute',
  'ngSanitize'
]);

app.controller('Home', ['$scope', function ($scope) {

  var feed = new Instafeed({
      get: 'tagged',
      tagName: 'cat',
      clientId: '2e30e5749f384593ba20b0fa39608837',
      limit: 6,
      resolution: "standard_resolution",
      template: "<div class='insta-photo ip'><img class='paralax' onload=\"this.style.opacity='1'\"src='{{image}}' alt='something is blocking the content from loading'></div>",
      after: function() {
        Rotate3D('paralax');
      }
  }).run();
}]);
