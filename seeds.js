const mongoose = require('mongoose'),
	Illustration = require('./models/illustration'),
	Image = require('./models/image'),
	Photo = require('./models/photo'),
	Project = require('./models/project'),
	NodeProject = require('./models/nodeproject'),
	digital = require('./seeds/digital'),
	illustration = require('./seeds/illustration'),
	photography = require('./seeds/photography'),
	projects = require('./seeds/projects'),
	nodeprojects = require('./seeds/nodeprojects');
// User                    = require("./models/user");

function seedDB() {
	// add admin account
	// User.deleteMany({}, function(err) {
	//     if(err) {
	//         console.log(err);
	//     }
	//     console.log("removed users!");

	//     User.create({
	//       username: "james",
	//       password: "123"
	//     });

	//     console.log("added admin!");
	// });

	// SEED DIGITAL
	Image.deleteMany({}, function(err) {
		if (err) {
			console.log(err);
		}
		console.log('removed images!');
		// digital.forEach(function(seed){
		//     Image.create(seed, function(err, image){
		//         if(err){
		//             console.log(err)
		//         } else {
		//             console.log("added an image!");
		//         }
		//     });
		// });
		for (i = 0; i < digital.length; i++) {
			Image.create(digital[i], function(err) {
				if (err) {
					console.log(err);
				} else {
					console.log('added an image!');
				}
			});
		}
	});

	// SEED ILLUSTRATION
	Illustration.deleteMany({}, function(err) {
		if (err) {
			console.log(err);
		}
		console.log('removed illustrations!');
		// illustration.forEach(function(seed){
		//     Illustration.create(seed, function(err, illustration){
		//         if(err){
		//             console.log(err)
		//         } else {
		//             console.log("added an illustration!");
		//         }
		//     });
		// });
		for (i = 0; i < illustration.length; i++) {
			Illustration.create(illustration[i], function(err) {
				if (err) {
					console.log(err);
				} else {
					console.log('added an illustration!');
				}
			});
		}
	});

	// SEED PHOTOGRAPHY
	Photo.deleteMany({}, function(err) {
		if (err) {
			console.log(err);
		}
		console.log('removed photos!');
		// photography.forEach(function(seed){
		//     Photo.create(seed, function(err, photo){
		//         if(err){
		//             console.log(err)
		//         } else {
		//             console.log("added a photo!");
		//         }
		//     });
		// });
		for (i = 0; i < photography.length; i++) {
			Photo.create(photography[i], function(err) {
				if (err) {
					console.log(err);
				} else {
					console.log('added a photo!');
				}
			});
		}
	});

	// SEED PROJECTS
	Project.deleteMany({}, function(err) {
		if (err) {
			console.log(err);
		}
		console.log('removed projects!');
		// projects.forEach(function(seed){
		//     Project.create(seed, function(err, image){
		//         if(err){
		//             console.log(err)
		//         } else {
		//             console.log("added a project!");
		//         }
		//     });
		// });
		for (i = 0; i < projects.length; i++) {
			Project.create(projects[i], function(err) {
				if (err) {
					console.log(err);
				} else {
					console.log('added a project!');
				}
			});
		}
	});

	// SEED WEBAPPS
	NodeProject.deleteMany({}, function(err) {
		if (err) {
			console.log(err);
		}
		console.log('removed node projects!');
		// webapps.forEach(function(seed){
		//     WebApp.create(seed, function(err, webapp){
		//         if(err){
		//             console.log(err)
		//         } else {
		//             console.log("added a webapp!");
		//         }
		//     });
		// });
		for (i = 0; i < nodeprojects.length; i++) {
			NodeProject.create(nodeprojects[i], function(err) {
				if (err) {
					console.log(err);
				} else {
					console.log('added a  node project!');
				}
			});
		}
	});
}

module.exports = seedDB;
