const express = require('express'),
	router = express.Router(),
	Image = require('../models/image'),
	middleware = require('../middleware');

// 1 - INDEX

router.get('/', function(req, res) {
	Image.find({}, function(err, images) {
		if (err) {
			console.log(err);
		} else {
			res.render('digital/index', { images: images });
		}
	}).sort({ year: 'desc' });
});

// router.get("/", function(req, res){
//     res.redirect("/images");
// });

// // 2 - CREATE

// router.post("/", function(req, res){
//     var path		= req.body.path,
//         title 		= req.body.title,
//         description = req.body.description,
//         media       = req.body.media,
// 		year 	    = req.body.year,
// 		newPhoto 	= {
// 			title: title,
// 			path: path,
//             description: description,
//             media: media,
// 			year: year
// 		};

//     Photo.create(newPhoto, function(err, image){
//         if(err) {
//             console.log(err);
//         } else {
//             console.log("created a PHOTO post!");
//             res.redirect("/photography");
//         }
//     });
// });

// // 3 - NEW

// router.get("/new", middleware.isLoggedIn, function(req, res){
//     res.render("photography/new");
// });

// 4 - SHOW

router.get('/:id', function(req, res) {
	Image.findById(req.params.id, function(err, image) {
		if (err) {
			console.log(err);
		} else {
			res.render('digital/show', { image: image });
		}
	});
});

// LOSE?

// // 5 - EDIT

// router.get("/:id/edit", middleware.isLoggedIn, function(req, res) {
//     Photo.findById(req.params.id, function(err, photo){
//         if(err){
//             console.log(err);
//         } else {
//             res.render("photo/edit", { photo: photo });
//         }
//     });
// });

// // 6 - UPDATE

// router.put("/:id", function(req, res){
//     Image.findByIdAndUpdate(req.params.id, req.body.image, function(err, image){
//         if(err){
//             res.redirect("/");
//         } else {
//             console.log("updated an image!");
//             res.redirect("/images/" + req.params.id);
//         }
//     });
// });

// // 7 - DESTROY

// router.delete("/images/:id", middleware.isLoggedIn, function(req, res){
//     Image.findByIdAndRemove(req.params.id, function(err, image){
//         if(err){
//             console.log(err);
//         } else {
//             console.log("deleted an image!");
//             res.redirect("/");
//         }
//     });
// });

module.exports = router;
