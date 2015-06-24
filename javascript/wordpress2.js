var app = angular.module('johnpatrickhalling');

app.service('Wordpress', function($http) {

  this.getAbout = function($scope) {

    $http.get('https://public-api.wordpress.com/rest/v1.1/sites/93818088/posts/1')
      .success(function(response) {
        $scope.about = response.content;
        // console.log(response.content);
      })
      .error(function() {
        this.$scope.about = 'My name is John Patrck Halling. I play kick ass music in Kent, OH.'
      });
  };
});
