module.exports = function(app) {
  const controllerPost = app.controllers.posts;

  app.route("/posts/:id/:guid").post(controllerPost.savePosts);

  app.route("/posts/:id").get(controllerPost.getPosts);
};
