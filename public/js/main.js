angular.module("feedReaderApp", ["ngRoute", "ngResource"]).config([
  "$locationProvider",
  "$routeProvider",
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.when("/feeds", {
      templateUrl: "partials/feeds.html",
      controller: "FeedsController"
    });
    $routeProvider.when("/feed/:feedId", {
      templateUrl: "partials/feed.html",
      controller: "FeedController"
    });
    $routeProvider.when("/feedPosts/:feedId", {
      templateUrl: "partials/feedPosts.html",
      controller: "FeedPostsController"
    });
    $routeProvider.when("/feed", {
      templateUrl: "partials/feed.html",
      controller: "FeedController"
    });
    $routeProvider.otherwise({ redirectTo: "/feeds" });
  }
]);
