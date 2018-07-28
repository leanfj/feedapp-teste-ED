angular
  .module("feedReaderApp")
  .controller("FeedPostsController", function(
    $scope,
    $routeParams,
    $resource,
    $http
  ) {
    console.log($routeParams.feedId);

    const Feed = $resource("/feeds/:id");
    Feed.get(
      { id: $routeParams.feedId },
      function(feed) {
        $scope.feed = feed;
        let feedUrl =
          "https://api.rss2json.com/v1/api.json?rss_url=" +
          $scope.feed.url +
          "&api_key=n8joy6fhvykncrpntls7fvyw9pzlowpnvxyjja2d&order_by=pubDate&order_dir=asc&count=100";

        $http.get(feedUrl).then(function(response) {
          console.log(response.data.items);
          $scope.feedPosts = response.data.items;
          let collapsibles = document.querySelectorAll(".collapsible");
          for (var i = 0; i < collapsibles.length; i++) {
            M.Collapsible.init(collapsibles[i]);
          }
        });
      },
      function(error) {
        $scope.message = {
          textLoad: "Erro ao carregar Feed"
        };
        M.toast({
          html: $scope.message.textLoad
        });
      }
    );
  });
