const   faker   = require("faker"),     
        webapps = [
                    {
                        path: [
                            "../img/webapps/bookdrop-1.jpg",
                            "../img/webapps/bookdrop-2.jpg",
                            "../img/webapps/bookdrop-3.jpg",
                            "../img/webapps/bookdrop-4.jpg",
                            "../img/webapps/bookdrop-5.jpg",
                            "../img/webapps/bookdrop-6.jpg",
                            "../img/webapps/bookdrop-7.jpg",
                            "../img/webapps/bookdrop-8.jpg"
                        ],
                        title: "Book Club Database Exercise",
                        description: "This exercise was an idea inspired by my wife and an old friend. The two have begun recording a podcast about selected books they read called \"Books Are Great, Actually!\". They are currently 3 episodes into recording at the time of writing! \n \nAnyway, I was still a novice with most of these technologies when I began this, so it was a huge learning experience for me. Looking at the code now, many things need serious refactoring, including the routes and CSS classes. \n \nThe website has many features still slated for implementation, including using a public API to check book information and possibly find cover images, a search function, sorting, duplicate checking to prevent duplicate books being added to the database, and associating comments with users and defining roles so \"administrators\" have control over all content. Other remaining tasks include refactoring CSS now that I know better methods, and adding EDIT, UPDATE, and DESTROY routes for comments. \n \nThe book logo is something I designed myself, while the awesome backdrop was obtained from unsplash (credit to Janko Ferlič).",
                        tech: [
                                "NodeJS",
                                "Express",
                                "MongoDB",
                                "Mongoose",
                                "Passport",
                                "npm passport-local",
                                "npm passport-local-mongoose",
                                "npm method-override",
                                "Javascript",
                                "Embedded Javascript",
                                "HTML/CSS",
                                "Bootstrap 4.3.1",
                                "jQuery",
                                "Google Web Fonts",
                                "Git"
                        ],
                        github: "https://github.com/voxspero/book-club-database-exercise.git",
                        year: "2019"
                    },
                    {
                        path: [
                            "../img/webapps/imagegal-1.jpg",
                            "../img/webapps/imagegal-2.jpg",
                            "../img/webapps/imagegal-3.jpg",
                            "../img/webapps/imagegal-4.jpg",
                            "../img/webapps/imagegal-5.jpg",
                            "../img/webapps/imagegal-6.jpg",
                            "../img/webapps/imagegal-7.jpg",
                            "../img/webapps/imagegal-8.jpg",
                            "../img/webapps/imagegal-9.jpg",
                            "../img/webapps/imagegal-10.jpg",
                            "../img/webapps/imagegal-11.jpg",
                            "../img/webapps/imagegal-12.jpg",
                            "../img/webapps/imagegal-13.jpg"
                        ],
                        title: "Image Gallery Exercise",
                        description: "This is an Image Gallery I created for practice with RESTful Routing, MongoDB/Mongoose, EJS, and Passport. My primary focus here was to create \"index\" and \"show\" pages for galleries and their individual images, and practice the aforementioned technologies in addition to my CSS styling, and use of things such as modals (in this project, a modal lightbox, and the modal dialog prompt to make sure you really wish to Delete an image). \n \nThe gallery pages draw from a MongoDB database where the images and their properties are stored as objects, as are users and their encrypted passwords. Once logged in (for this exercise I simply made an account called \"admin\" that I used for testing), a user can post new images, edit images and their content, or delete images altogether. Using passport, this content, intended for logged-in users only, is hidden to anyone who is not logged in through the use of middleware in the Express routes, and conditional Embedded Javascript on the pages. I used Bootstrap as a framework for my CSS. \n \nOnce the structure was complete and the routes were defined, I decided to take the opportunity to experiment with CSS classes to come up with an aesthetic for my next project: my actual portfolio. \n \nThe photographs used are placeholders. I needed images large enough to require proper containment and responsiveness. I did not note the names due to haste, but all images were taken from unsplash, are not my creations, and are the property of their creators. The tree photo used as a New Post example was obtained through CC Images, and was taken by \"J Lippold\", or \"feffreyl\" on flickr.",
                        tech: [
                                "NodeJS",
                                "Express",
                                "MongoDB",
                                "Mongoose",
                                "Passport",
                                "npm passport-local",
                                "npm passport-local-mongoose",
                                "npm method-override",
                                "Javascript",
                                "Embedded Javascript",
                                "HTML/CSS",
                                "Bootstrap 4.3.1",
                                "jQuery",
                                "Google Web Fonts",
                                "Git"
                        ],
                        github: "https://github.com/voxspero/image-gallery-exercise.git",
                        year: "2019"
                    },
                    {
                        path: [
                            "../img/webapps/portfolio-1.jpg"
                        ],
                        title: "Portfolio Website with Database",
                        description: "Porftolio Inception! Just kidding, but you are using it right now! \n \nThis is my portfolio website, based upon my Image Gallery practice web app, which I decided to use as a prototype. My portfolio used to be hosted on Adobe Portfolio for expedience. However, it has had its issues, and I was determined to eventually create a portfolio website entirely on my own, from the ground up, that I had complete control over. \n \nLike the Book Club Database and the Image Gallery, this portfolio is connected to a MongoDB database, with collections of objects for each gallery. I will continue to improve this website as I improve my skills, and subsequent versions will be added here to keep track of the visual history of my portfolio. \n\nThis portfolio is deployed on Heroku CLI and my Route 53 domain (dasgeo.de) with AWS is pointed to it. Since the heroku app is on a dynamic IP, sadly I cannot use an A record in my DNS settings to redirect the apex domain to it as a static IP is required. That is why this page is on \"portfolio.dasgeo.de\" instead. \n\nWhy dasgeo.de? It happened to be the least expensive domain suffix available through Route 53, and if im using a German domain, why not call it \"Das Geode\"?",
                        tech: [
                                "NodeJS",
                                "Express",
                                "MongoDB",
                                "Mongoose",
                                "npm dotenv",
                                "npm faker",
                                "npm body-parser",
                                "Javascript",
                                "Embedded Javascript",
                                "HTML/CSS",
                                "Bootstrap 4.3.1",
                                "jQuery",
                                "Google Web Fonts",
                                "Git"
                        ],
                        github: "https://github.com/voxspero/portfolio.git",
                        year: "2019"
                    }
                ];

module.exports = webapps;
