var app = angular.module('johnpatrickhalling');

app.service('Wordpress', function($http, $sce) {

  var ABOUT = '1';
  var TOUR = '5';
  var VIDEO = '79';

  var posts = [];
  var about, tour, videos;

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

  this.getVideos = function($scope) {
    if (videos) {
      $scope.videos = videos;
    } else {
      $http.get('https://public-api.wordpress.com/rest/v1.1/sites/93818088/posts/' + VIDEO)
      .success(function(response) {
        $scope.videos = videos = $sce.trustAsHtml(response.content);
      })
      .error(function() {
        $scope.videos = 'My name is John Patrck Halling. I play kick ass music in Kent, OH.'
      });
    }
  }

  this.getTour = function($scope) {
    if (tour) {
      $scope.tour = tour;
    } else {
      $http.get('https://public-api.wordpress.com/rest/v1.1/sites/93818088/posts/' + TOUR)
      .success(function(response) {
        $scope.tour = tour = response.content;
      })
      .error(function() {
        $scope.tour = 'I\'m touring around the US.'
      });
    }
  };

  this.getAll = function($scope) {
    if (!posts.populated) {
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
          date: cleanDate(response.date),
          title: response.title,
          content: response.content
        };

        $scope.post = post;
        posts[postID] = post;
        $scope.ids.push(postID);
      })
      .error(function() {
        this.$scope.post = {
          date: new Date(),
          title: 'No post',
          content: 'Unable to load post',
          id: 0
        }
      });
    }
  }

  function getPosts($scope, $http, query) {
    $http.get('https://public-api.wordpress.com/rest/v1.1/sites/93818088/posts/' + query)
    .success(function(response) {
      var res = response.posts;

      $scope.posts = {};
      $scope.ids = [];

      res.forEach(function(post) {
        posts[post.ID] = {
          title: post.title,
          summary: post.excerpt,
          content: post.content,
          date: cleanDate(post.date)
        }
        $scope.ids.push(post.ID)
      })

      posts.populate = true;
      $scope.posts = posts;

    })
    .error(function() {
      this.$scope[item.str] = 'My name is John Patrck Halling. I play kick ass music in Kent, OH.'
    });
  }

});


function cleanDate(uglyDate) {
  var date = /(\d{4}-\d{2}-\d{2})/;
  return uglyDate.match(date)[1];
}
