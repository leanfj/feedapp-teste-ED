module.exports = function(app) {
  const Feed = app.models.feed;

  const controller = {};

  controller.listFeeds = function(req, res) {
    Feed.find()
      .exec()
      .then(
        function(feeds) {
          res.json(feeds);
        },
        function(error) {
          console.error(error);
          res.status(500).json(error);
        }
      );
  };
  controller.getFeed = function(req, res) {
    let _id = req.params.id;
    Feed.findById(_id)
      .exec()
      .then(
        function(feed) {
          if (!feed) throw new Error("Feed Não encontrado");
          res.json(feed);
        },
        function(error) {
          console.log(error);
          res.status(404).json(error);
        }
      );
  };
  controller.deleteFeed = function(req, res) {
    let _id = req.params.id;
    Feed.remove({ _id: _id })
      .exec()
      .then(
        function() {
          res.end();
        },
        function(error) {
          return console.log(error);
        }
      );
  };
  controller.saveFeed = function(req, res) {
    let _id = req.body._id;
    if (_id) {
      Feed.findByIdAndUpdate(_id, req.body)
        .exec()
        .then(
          function(feed) {
            res.json(feed);
          },
          function(error) {
            console.error(error);
            res.status(500).json(error);
          }
        );
    } else {
      Feed.create(req.body).then(
        function(feed) {
          res.status(201).json(feed);
        },
        function(error) {
          console.error(error);
          res.status(500).json(error);
        }
      );
    }
  };

  return controller;
};
