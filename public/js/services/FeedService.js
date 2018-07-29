angular.module("feedReaderApp").factory("Feed", function($resource) {
  return $resource("/feeds/:id");
});
