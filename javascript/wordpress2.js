var app = angular.module('johnpatrickhalling');

app.service('Wordpress', function($http) {

  var ABOUT = {val: '1', str: 'about'};
  var TOUR = {val :'5', str: 'tour'};

  this.getAbout = function($scope) {
    getSpecifc($scope, $http, ABOUT);
  };

  this.getTour = function($scope) {
    getSpecifc($scope, $http, TOUR);
  };

});

function getSpecifc($scope, $http, item) {
  $http.get('https://public-api.wordpress.com/rest/v1.1/sites/93818088/posts/' + item.val)
    .success(function(response) {
      $scope[item.str] = response.content;
    })
    .error(function() {
      this.$scope[item.str] = 'My name is John Patrck Halling. I play kick ass music in Kent, OH.'
    });
}
