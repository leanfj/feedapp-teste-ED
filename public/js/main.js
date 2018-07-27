angular.module("feedReaderApp", ["ngRoute"]).config([
  "$locationProvider",
  "$routeProvider",
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix("!");
    $routeProvider.when("/feeds", {
      templateUrl: "partials/feeds.html",
      controller: "FeedsController"
    });
  }
]);
