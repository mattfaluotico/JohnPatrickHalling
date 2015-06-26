var app = angular.module('johnpatrickhalling');

app.service('Wordpress', function($http) {

  var ABOUT = '1';
  var TOUR = '5';

  var posts = [];
  var about, tour;

  this.getAbout = function($scope) {
    if (about) {
      $scope.about = about;
    } else {
      $http.get('https://public-api.wordpress.com/rest/v1.1/sites/93818088/posts/' + ABOUT)
      .success(function(response) {
        $scope.about = about = response.content;
      })
      .error(function() {
        $scope.about = 'My name is John Patrck Halling. I play kick ass music in Kent, OH.'
      });
    }
  };

  this.getTour = function($scope) {
    if (tour) {
      $scope.tour = tour;
    } else {
      $http.get('https://public-api.wordpress.com/rest/v1.1/sites/93818088/posts/' + TOUR)
      .success(function(response) {
        $scope.tour = tour = response.content;
      })
      .error(function() {
        $scope.tour = 'Im touring around the US.'
      });
    }
  };

  this.getAll = function($scope) {
    if (posts.populated) {
      getPosts($scope, $http, '');
    }
  };

  this.getPost = function(postID, $scope) {

    if (post[postID]) {
      $scope.post = post[postID];
    } else {
      $http.get('https://public-api.wordpress.com/rest/v1.1/sites/93818088/posts/' + postID)
      .success(function(response) {

        var post = {
          date: response.date,
          title: response.title,
          content: response.content
        };

        $scope.post = post;
        posts[postID] = post;

      })
      .error(function() {
        this.$scope.post = {
          date: new Date(),
          title: 'No post',
          content: 'Unable to load post'
        }
      });
    }
  }

  function getPosts($scope, $http, query) {
    $http.get('https://public-api.wordpress.com/rest/v1.1/sites/93818088/posts/' + query)
    .success(function(response) {

      var res = response.posts;
      $scope.posts = [];

      res.forEach(function(post) {
        posts[post.ID] = {
          title: post.title,
          summary: post.excerpt,
          content: post.content,
          id: post.ID
        }
      })

      $scope.posts = posts;
    })
    .error(function() {
      this.$scope[item.str] = 'My name is John Patrck Halling. I play kick ass music in Kent, OH.'
    });
  }

});
