let feeds = [
  {
    _id: 1,
    name: "BBC world news",
    url: "http://feeds.bbci.co.uk/news/world/rss.xml"
  },
  {
    _id: 2,
    name: "CBN world news",
    url: "http://www.cbn.com/cbnnews/world/feed/"
  },
  {
    _id: 3,
    name: "Reuters world news",
    url: "http://feeds.reuters.com/Reuters/worldNews"
  }
];

module.exports = function(app) {
  const controller = {};

  controller.listFeeds = function(req, res) {
    res.json(feeds);
  };
  controller.getFeed = function(req, res) {
    console.log(req.params.id);
    const idFeed = req.params.id;
    let feed = feeds.filter(function(feed) {
      return feed._id == idFeed;
    })[0];

    feed ? res.json(feed) : res.status(404).send("Feed não encontrado");
  };
  controller.deleteFeed = function(req, res) {
    console.log("Delete Feed " + req.params.id);
    feeds = feeds.filter(function(feed) {
      return feed._id != req.params.id;
    });
    res.sendStatus(204).end();
  };
  let ID_FEED_INC = 3;

  controller.saveFeed = function(req, res) {
    let feed = req.body;
    feed = feed._id ? updadeFeed(feed) : addFeed(feed);
    res.json(feed);
  };

  function addFeed(newFeed) {
    newFeed._id = ++ID_FEED_INC;
    feeds.push(newFeed);
    return newFeed;
  }

  function updadeFeed(feedToUpdate) {
    feeds = feeds.map(function(feed) {
      if (feed._id == feedToUpdate._id) {
        feed = feedToUpdate;
      }
      return feed;
    });
    return feedToUpdate;
  }

  return controller;
};
