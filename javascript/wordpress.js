'use strct';

var Blog = function($scope, $http) {
    this.$scope = $scope;
    this.$http = $http;
    this.postURL = 'https://public-api.wordpress.com/rest/v1.1/sites/93818088/posts/'

    getPosts() {

    }

    getPost(postID) {

      var postsURL = this.postURL + postID;
      this.$http.get(postsURL)
        .success(function(respose){
          this.$scope.postContent = response.content;
        })
        .error(function(){
          this.$scope.postContent = "Unable to load post";
        });
    }

    getAbout() {
      var aboutPostURL= this.postURL + '1';

      this.$http.get(aboutPostURL)
        .success(function(response){
          this.$scope.about = response;
        })
        .error(function(){
          this.$scope.about = 'My name is John Patrck Halling. I play kick ass music in Kent, OH.'
        });
    }

    getRecent() {
      var postsURL = this.postURL + 'pretty=true&number=5';
      
      this.$http.get(postsURL)
        .success(function(respose){
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
    }
}
