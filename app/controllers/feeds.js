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
    name: "Reuters world news	",
    url: "http://feeds.reuters.com/Reuters/worldNews"
  }
];
module.exports.listFeeds = (req, res) => {
  res.json(feeds);
};
module.exports.getFeed = (req, res) => {
  console.log(req.params.id);
  const idFeed = req.params.id;
  let feed = feeds.filter(feed => {
    return feed._id == idFeed;
  })[0];

  feed ? res.json(feed) : res.status(404).send("Feed não encontrado");
};
