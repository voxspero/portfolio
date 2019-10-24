var mongoose    = require("mongoose");

var WebAppSchema = new mongoose.Schema({
    path: [],
    thumbnail: String,
    created: {
        type: Date,
        default: Date.now
    },
    title: String,
    description: String,
    tech: [],
    github: String,
    year: String
});

var WebApp = mongoose.model("WebApp", WebAppSchema);

module.exports = mongoose.model("WebApp", WebAppSchema);