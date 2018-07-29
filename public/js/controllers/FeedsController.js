angular
  .module("feedReaderApp")
  .controller("FeedsController", function($scope, Feed) {
    $scope.feeds = [];

    $scope.filtro = "";

    $scope.message = { text: "" };

    function findFeeds() {
      Feed.query(
        function(response) {
          $scope.feeds = response;
        },
        function(error) {
          console.log("Error ao obter lista de Feeds");
          console.log(error.status);
          $scope.message = {
            text: "Error ao obter lista de Feeds"
          };
        }
      );
    }
    findFeeds();

    $scope.delete = function(feed) {
      Feed.delete({ id: feed._id }, findFeeds, function(error) {
        console.log("Não foi possivel deleter o feed");
        console.log(error);
        $scope.message = {
          text: "Não foi possivel deleter o Feed"
        };
      });
    };
  });
