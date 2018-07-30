angular.module("feedReaderApp").factory("FeedPosts", function($resource) {
  return $resource("/posts/:id");
});
