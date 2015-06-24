'use strct';

function Blog($scope, $http) {
  this.$scope = $scope;
  this.$http = $http;
  this.postURL = 'https://public-api.wordpress.com/rest/v1.1/sites/93818088/posts/';
}

    // get the last 30 posts
Blog.prototype.getAllPosts = function(){
  var postURL = this.postURL;
  this.$http.get(postURL)
    .success(function(response) {
      $scope.posts = response.posts;
    })
    .error(function(){
      this.$scope.summaries = [
        "Unable to load posts",
        "Unable to load posts",
        "Unable to load posts",
        "Unable to load posts",
        "Unable to load posts",
        "Unable to load posts"
        ];
    });
};

Blog.prototype.getPost = function(postID) {

  var postsURL = this.postURL + postID;
  this.$http.get(postsURL)
    .success(function(response){
      this.$scope.postContent = response.content;
    })
    .error(function(){
      this.$scope.postContent = "Unable to load post";
    });
};

Blog.prototype.getAbout = function($scope) {
  var aboutPostURL= this.postURL + '1';

  this.$http.get(aboutPostURL)
    .success(function(response) {
      $scope.about = response.content;
      // console.log(response.content);
    })
    .error(function(){
      this.$scope.about = 'My name is John Patrck Halling. I play kick ass music in Kent, OH.'
    });
};

Blog.prototype.getRecent = function() {
  var postsURL = this.postURL + 'pretty=true&number=5';

  this.$http.get(postsURL)
    .success(function(response){
      this.$scope.summaries = response.posts;
    })
    .error(function(){
      this.$scope.summaries = [
        "Unable to load posts",
        "Unable to load posts",
        "Unable to load posts",
        "Unable to load posts",
        "Unable to load posts",
        "Unable to load posts"
        ];
    });
};
