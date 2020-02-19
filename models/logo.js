var mongoose = require('mongoose');

var LogoSchema = new mongoose.Schema({
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

var Logo = mongoose.model('Logo', LogoSchema);

module.exports = mongoose.model('Logo', LogoSchema);
