const express = require("express");
const load = require("express-load");
const bodyParser = require("body-parser");

module.exports = () => {
  const app = express();

  app.set("port", 3001);

  app.use(express.static("./public"));

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(require("method-override")());

  load("models", { cwd: "app" })
    .then("controllers")
    .then("routes")
    .into(app);

  app.set("view engine", "ejs");
  app.set("views", "./app/views");

  return app;
};
