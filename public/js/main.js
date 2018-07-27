angular.module("feedReaderApp", ["ngRoute"]).config([
  "$locationProvider",
  "$routeProvider",
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix("!");
    $routeProvider.when("/feeds", {
      templateUrl: "partials/feeds.html",
      controller: "FeedsController"
    });
    $routeProvider.when("/feed/:feedId", {
      templateUrl: "partials/feed.html",
      controller: "FeedController"
    });
    $routeProvider.otherwise({ redirectTo: "/feeds" });
  }
]);
