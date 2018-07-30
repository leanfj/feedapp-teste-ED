angular
  .module("feedReaderApp")
  .controller("FeedPostsController", function(
    $scope,
    $routeParams,
    Feed,
    Post,
    FeedPosts,
    $http
  ) {
    console.log($routeParams.feedId);
    $scope.feed = {};
    Feed.get({ id: $routeParams.feedId }, function(feed) {
      $scope.feed = feed;
      console.log($scope.feed);
      //rss to json online converter
      let feedUrl =
        "https://api.rss2json.com/v1/api.json?rss_url=" +
        $scope.feed.url +
        "&api_key=n8joy6fhvykncrpntls7fvyw9pzlowpnvxyjja2d&order_by=pubDate&order_dir=desc&count=10";

      $http.get(feedUrl).then(
        function(response) {
          console.log(response.data.items);

          // $scope.feedPosts = response.data.items;

          for (let i = 0; i < response.data.items.length; i++) {
            response.data.items[i].feed = $routeParams.feedId;

            $scope.Posts = new Post(response.data.items[i]);
            savePosts = function() {
              $scope.Posts.$save({
                id: $routeParams.feedId,
                guid: response.data.items[i].guid
              });
            };

            savePosts();
          }

          let collapsibles = document.querySelectorAll(".collapsible");
          for (var i = 0; i < collapsibles.length; i++) {
            M.Collapsible.init(collapsibles[i]);
          }
        },
        function(error) {
          $scope.message = {
            textLoad: "Erro ao carregar Posts"
          };
          M.toast({
            html: $scope.message.textLoad
          });
        }
      );
    });
    $scope.postRead = function(post) {
      $scope.Posts = new Post();
      !post.read ? ($scope.Posts.read = true) : ($scope.Posts.read = false);
      $scope.Posts.$save({
        id: $routeParams.feedId,
        guid: post.guid
      });
    };

    setTimeout(function() {
      FeedPosts.query({ id: $routeParams.feedId }, function(posts) {
        $scope.feedPosts = posts;
      });
    }, 1500);
  });
