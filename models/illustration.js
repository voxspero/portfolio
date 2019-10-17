var mongoose    = require("mongoose");

var IllustrationSchema = new mongoose.Schema({
    path: String,
    created: {
        type: Date,
        default: Date.now
    },
    title: String,
    description: String,
    media: String,
    year: Number
});

var Illustration = mongoose.model("Illustration", IllustrationSchema);

module.exports = mongoose.model("Illustration", IllustrationSchema);