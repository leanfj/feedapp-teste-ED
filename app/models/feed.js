const mongoose = require("mongoose");

module.exports = function() {
  let schema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true,
      index: {
        unique: true
      }
    }
  });

  return mongoose.model("Feed", schema);
};
