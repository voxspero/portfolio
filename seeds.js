const   mongoose                = require("mongoose"),
        Illustration            = require("./models/illustration"),
        Image                   = require("./models/image"),
        Photo                   = require("./models/photo"),
        Project                 = require("./models/project"),
        WebApp                  = require("./models/webapp"),
        digital                 = require("./seeds/digital"),
        illustration            = require("./seeds/illustration"),
        photography             = require("./seeds/photography"),
        projects                = require("./seeds/projects"),
        webapps                 = require("./seeds/webapps");
    // User                    = require("./models/user");
     
function seedDB(){
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
    Image.deleteMany({}, function(err){
		if(err){
			console.log(err);
		}
        console.log("removed images!");
        digital.forEach(function(seed){
            Image.create(seed, function(err, image){
                if(err){
                    console.log(err)
                } else {
                    console.log("added an image!");
                }
            });
        });
    });

    // SEED ILLUSTRATION
    Illustration.deleteMany({}, function(err){
		if(err){
			console.log(err);
		}
        console.log("removed illustrations!");
        illustration.forEach(function(seed){
            Illustration.create(seed, function(err, illustration){
                if(err){
                    console.log(err)
                } else {
                    console.log("added an illustration!");
                }
            });
        });
    });
    
    // SEED PHOTOGRAPHY
    Photo.deleteMany({}, function(err){
		if(err){
			console.log(err);
		}
        console.log("removed photos!");
        photography.forEach(function(seed){
            Photo.create(seed, function(err, photo){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a photo!");
                }
            });
        });
    });
    
    // SEED PROJECTS
    Project.deleteMany({}, function(err){
		if(err){
			console.log(err);
		}
        console.log("removed projects!");
        projects.forEach(function(seed){
            Project.create(seed, function(err, image){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a project!");
                }
            });
        });
    });

    // SEED WEBAPPS
    WebApp.deleteMany({}, function(err){
		if(err){
			console.log(err);
		}
        console.log("removed webapps!");
        webapps.forEach(function(seed){
            WebApp.create(seed, function(err, webapp){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a webapp!");
                }
            });
        });
    });
}

module.exports = seedDB;