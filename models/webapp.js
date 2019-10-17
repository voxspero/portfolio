var mongoose    = require("mongoose");

var WebAppSchema = new mongoose.Schema({
    path: [],
    created: {
        type: Date,
        default: Date.now
    },
    title: String,
    description: String,
    tech: [],
    github: String,
    year: Number
});

var WebApp = mongoose.model("WebApp", WebAppSchema);

module.exports = mongoose.model("WebApp", WebAppSchema);