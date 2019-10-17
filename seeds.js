const   mongoose                = require("mongoose"),
        faker                   = require("faker"),
        Illustration            = require("./models/illustration"),
        Image                   = require("./models/image"),
        Photo                   = require("./models/photo"),
        Project                 = require("./models/project"),
        WebApp                  = require("./models/webapp");
    // User                    = require("./models/user");

const   digital         = [
                            {
                                path: "/img/digital/beneath.png",
                                title: toTitleCase(faker.lorem.words()),
                                description: faker.lorem.paragraphs(),
                                year: getRndInteger(2012, 2019)
                            },
                            {
                                path: "/img/digital/tdmpickup-playmore.png",
                                title: toTitleCase(faker.lorem.words()),
                                description: faker.lorem.paragraphs(),
                                year: getRndInteger(2012, 2019)
                            }
                        ],
        illustration    = [
                            {
                                path: "/img/illustration/baddies.png",
                                title: toTitleCase(faker.lorem.words()),
                                description: faker.lorem.paragraphs(),
                                year: getRndInteger(2012, 2019)
                            },
                            {
                                path: "/img/illustration/soupernintendo.png",
                                title: toTitleCase(faker.lorem.words()),
                                description: faker.lorem.paragraphs(),
                                year: getRndInteger(2012, 2019)
                            }
                        ],
        photography     = [
                            {
                                path: [
                                        "/img/photography/boats-hdr.jpg",
                                        "/img/photography/boats-reg.jpg"
                                ],       
                                title: toTitleCase(faker.lorem.words()),
                                description: faker.lorem.paragraphs(),
                                year: getRndInteger(2012, 2019)
                            },
                            {
                                path: [
                                    "/img/photography/lakehouse-hdr.jpg",
                                    "/img/photography/lakehouse-reg.jpg"
                                ], 
                                title: toTitleCase(faker.lorem.words()),
                                description: faker.lorem.paragraphs(),
                                year: getRndInteger(2012, 2019)
                            }
                        ],
        projects        = [
                            {
                                path: [
                                        "/img/projects/axiom-art.png"
                                ],
                                title: toTitleCase(faker.lorem.words()),
                                description: faker.lorem.paragraphs(),
                                media: "Adobe Illustrator",
                                year: getRndInteger(2012, 2019)
                            },
                            {
                                path: [
                                        "/img/projects/flyer-silent-library.png"
                                ],
                                title: toTitleCase(faker.lorem.words()),
                                description: faker.lorem.paragraphs(),
                                media: "Adobe Illustrator",
                                year: getRndInteger(2012, 2019)
                            }
                        ];

// var webapps         = [
//                         {
//                             path: [
//                                  "/img/webapps"
//                             ],
//                             title: toTitleCase(faker.lorem.words()),
//                             description: faker.lorem.paragraphs(),
//                             tech: [
//                                  "NodeJS",
//                                  "Express",
//                                  "MongoDB"
//                             ]
//                             github: "",
//                             year: getRndInteger(2012, 2019)
//                         },
//                         {
//                             path: [
//                                  "/img/webapps/"
//                             ],
//                             title: toTitleCase(faker.lorem.words()),
//                             description: faker.lorem.paragraphs(),
//                             tech: [
//                                  "",
//                                  "",
//                                  "",
//                             ]
//                             github: "",
//                             year: getRndInteger(2012, 2019)
//                         }
//                     ];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}
     
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
    // WebApp.deleteMany({}, function(err){
	// 	if(err){
	// 		console.log(err);
	// 	}
    //     console.log("removed webapps!");
    //     // create new images from data[]
    //     webapps.forEach(function(seed){
    //         WebApp.create(seed, function(err, webapp){
    //             if(err){
    //                 console.log(err)
    //             } else {
    //                 console.log("added a webapp!");
    //             }
    //         });
    //     });
    // });
}

module.exports = seedDB;