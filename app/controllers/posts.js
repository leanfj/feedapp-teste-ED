module.exports = function(app) {
  const Posts = app.models.post;

  const controllerPosts = {};

  controllerPosts.getPosts = function(req, res) {
    let _feedId = req.params.id;
    Posts.find({ feed: _feedId })
      .exec()
      .then(
        function(posts) {
          if (!posts) throw new Error("Posts não encontrados");
          res.json(posts);
        },
        function(error) {
          console.log(error);
          res.status(404).json(error);
        }
      );
  };

  controllerPosts.savePosts = function(req, res) {
    Posts.create(req.body).then(
      function(feed) {
        res.status(201).json(feed);
      },
      function(error) {
        console.error(error);
        res.status(500).json(error);
      }
    );
  };

  return controllerPosts;
};
