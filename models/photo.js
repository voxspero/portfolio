const   mongoose    = require("mongoose");

const   PhotoSchema = new mongoose.Schema({
                        path: [],
                        created: {
                            type: Date,
                            default: Date.now
                        },
                        title: String,
                        description: String,
                        camera: String,
                        year: Number
                    });

const   Photo       = mongoose.model("Photo", PhotoSchema);

module.exports      = mongoose.model("Photo", PhotoSchema);