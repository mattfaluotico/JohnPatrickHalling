; 'use strct';

var app = angular.module('johnpatrickhalling.content', [
  'ngRoute',
  'ngSanitize'
]);

app.controller('About', ['$scope', 'Wordpress' function($scope, Wordpress){
  $scope.aboutContent = Wordpress.about();
}]);

// app.controller('Blog', ['$scope', '$routeParams', 'Wordpress', function($scope, $routeParams, Wordpress) {
//   Wordpress.recent();
// }]);

app.controller('Videos', [function(){}]);
app.controller('Music', [function(){}]);

app.controller('Tour', [function(){
  var toursheet = "";
  $scope.dates = [];
  sheetrock({
    url: toursheet,
    query: 'SELECT A, B, C, D, E',
    callback: function(error, options, response) {
      if (!error) {
        var rows = response.rows;
        var DATE = 0, NAME = 1, LOCATION = 2, DESC = 3, URL=4;

        for (var i = 1; i < rows.length; i++) {
          $scope.dates.push({
            date: rows[i].cellsArray[DATE],
						name: rows[i].cellsArray[NAME],
						location: rows[i].cellsArray[LOCATION],
						desc: rows[i].cellsArray[DESC]
						url: rows[i].cellsArray[URL],
          });
        }
      } else {
        console.log("error loading tour dates");
        console.log("error", error);
      }
    }
  });
}]);

app.controller('Home', ['$scope', function ($scope) {
  var feed = new Instafeed({
      get: 'tagged',
      tagName: 'jphontheroad',
      clientId: '2e30e5749f384593ba20b0fa39608837',
      limit: 6,
      resolution: "standard_resolution",
      template: "<div class='insta-photo ip'><img class='paralax' onload=\"this.style.opacity='1'\"src='{{image}}' alt='something is blocking the content from loading'></div>",
      after: function() {
        Rotate3D('paralax');
      }
  }).run();
}]);
