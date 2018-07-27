angular.module("feedReaderApp").controller("FeedsController", function($scope) {
  $scope.total = 0;
  $scope.addOne = () => {
    $scope.total++;
  };
});
