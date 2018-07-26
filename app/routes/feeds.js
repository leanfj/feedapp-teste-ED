module.exports = app => {
  const controller = app.controllers.feeds;
  app.get("/feeds", controller.listFeeds);
  app.get("/feeds/:id", controller.getFeed);
};
