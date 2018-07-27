angular
  .module("feedReaderApp")
  .controller("FeedController", function($scope, $routeParams) {
    console.log($routeParams.feedId);
  });
