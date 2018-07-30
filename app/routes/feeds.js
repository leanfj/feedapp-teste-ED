module.exports = function(app) {
  const controller = app.controllers.feeds;
  const controllerPost = app.controllers.posts;

  app
    .route("/feeds")
    .get(controller.listFeeds)
    .post(controller.saveFeed);

  app
    .route("/feeds/:id")
    .get(controller.getFeed)
    .delete(controller.deleteFeed)
    .post(controller.saveFeed);

  app
    .route("/posts/:id")
    .get(controllerPost.getPosts)
    .post(controllerPost.savePosts);
};
