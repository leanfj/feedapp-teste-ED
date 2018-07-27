angular
  .module("feedReaderApp")
  .controller("FeedsController", function($scope, $http) {
    $scope.feeds = [];
    $scope.total = 0;

    $scope.filtro = "";

    $scope.addOne = () => {
      $scope.total++;
    };

    $http.get("/feeds").then(
      function(response) {
        console.log(response.data);
        $scope.feeds = response.data;
      },
      function(error) {
        console.log("Error ao obter lista de Feeds");
        console.log(error);
      }
    );
  });
