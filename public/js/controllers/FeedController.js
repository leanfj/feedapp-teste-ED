angular
  .module("feedReaderApp")
  .controller("FeedController", function(
    $scope,
    $routeParams,
    $resource,
    $location
  ) {
    console.log($routeParams.feedId);

    const Feed = $resource("/feeds/:id");

    if ($routeParams.feedId) {
      Feed.get(
        { id: $routeParams.feedId },
        function(feed) {
          $scope.feed = feed;
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
    } else {
      $scope.feed = new Feed();
    }

    $scope.saveFeed = function() {
      $scope.feed
        .$save()
        .then(function() {
          if ($routeParams.feedId) {
            $scope.message = { textSuccess: "Feed Atualizado com sucesso" };
          } else {
            $scope.message = { textSuccess: "Feed Salvo com sucesso" };
          }
          $scope.feed = new Feed();
          M.toast({
            html: $scope.message.textSuccess,
            completeCallback: $location.path("/")
          });
        })
        .catch(function(error) {
          $scope.message = { textError: "Erro ao salvar feed" };
          M.toast({
            html: $scope.message.textError
          });
        });
    };
  });
