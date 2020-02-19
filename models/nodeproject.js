var mongoose = require('mongoose');

var NodeProjectSchema = new mongoose.Schema({
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

var NodeProject = mongoose.model('NodeProject', NodeProjectSchema);

module.exports = mongoose.model('NodeProject', NodeProjectSchema);
