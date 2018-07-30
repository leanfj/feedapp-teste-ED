const mongoose = require("mongoose");

module.exports = function() {
  let schema = mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    read: {
      type: Boolean
    },
    feed: {
      type: mongoose.Schema.ObjectId,
      ref: "feeds"
    }
  });

  return mongoose.model("Post", schema);
};
