angular.module("feedReaderApp").factory("Post", function($resource) {
  return $resource("/posts/:id/:guid");
});
