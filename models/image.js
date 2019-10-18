var mongoose    = require("mongoose");

var ImageSchema = new mongoose.Schema({
    path: String,
    created: {
        type: Date,
        default: Date.now
    },
    title: String,
    description: String,
    media: [],
    year: Number
});

var Image = mongoose.model("Image", ImageSchema);

module.exports = mongoose.model("Image", ImageSchema);