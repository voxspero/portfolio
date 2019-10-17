var mongoose    = require("mongoose");

var PhotoSchema = new mongoose.Schema({
    path: [],
    created: {
        type: Date,
        default: Date.now
    },
    title: String,
    description: String,
    media: String,
    year: Number
});

var Photo = mongoose.model("Photo", PhotoSchema);

module.exports = mongoose.model("Photo", PhotoSchema);