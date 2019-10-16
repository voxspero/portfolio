var mongoose    = require("mongoose");

var PhotoSchema = new mongoose.Schema({
    path: String,
    created: {
        type: Date,
        default: Date.now
    },
    title: String,
    description: String,
    media: String,
    year: String,
});

var Photo = mongoose.model("Photo", PhotoSchema);

module.exports = mongoose.model("Photo", PhotoSchema);