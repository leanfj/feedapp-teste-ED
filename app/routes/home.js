module.exports = app => {
  const controller = app.controllers.home;
  app.get("/index", controller.index);
  app.get("/", controller.index);
};
