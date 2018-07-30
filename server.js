const http = require("http");
const app = require("./config/express")();
require("./config/database.js")(
  "mongodb://leanfj:ab12345@ds259241.mlab.com:59241/feedreaderapp"
);
http.createServer(app).listen(process.env.PORT || app.get("port"), () => {
  console.log("Express Server escutando na porta " + app.get("port"));
});
