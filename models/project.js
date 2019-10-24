var mongoose    = require("mongoose");

var ProjectSchema = new mongoose.Schema({
    path: [],
    thumbnail: String,
    created: {
        type: Date,
        default: Date.now
    },
    title: String,
    description: String,
    media: [],
    year: String
});

var Project = mongoose.model("Project", ProjectSchema);

module.exports = mongoose.model("Project", ProjectSchema);