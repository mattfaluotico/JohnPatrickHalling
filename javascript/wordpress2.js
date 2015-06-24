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

  this.getAll = function($scope) {
    getPosts($scope, $http, '');
  };

  this.getSummaries = function($scope) {
    getPosts($scope, $http, '?number=5');
  }

  this.getPost = function(postID, $scope) {
    $http.get('https://public-api.wordpress.com/rest/v1.1/sites/93818088/posts/' + postID)
      .success(function(response) {
        $scope.post = {
          date: response.date,
          title: response.title,
          content: response.content
        };
      })
      .error(function() {
        this.$scope.post = {
          date: new Date(),
          title: 'No post',
          content: 'Unable to load post'
        };
      });
    }
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

funciton getPosts($scope, $http, query) {
  $http.get('https://public-api.wordpress.com/rest/v1.1/sites/93818088/posts/' + item.val)
    .success(function(response) {
      var posts = response.posts;

      posts.forEach(function(post){
        $scope.posts.push({
          title: post.title,
          summary: post.excerpt,
          content: post.content,
          id: post.ID
        })
      });
    })
    .error(function() {
      this.$scope[item.str] = 'My name is John Patrck Halling. I play kick ass music in Kent, OH.'
    });
}
