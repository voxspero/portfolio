const   faker   = require("faker"),     
        webapps = [
                    {
                        path: [
                            "../img/webapps/"
                        ],
                        title: "Book Club Database Exercise",
                        description: faker.lorem.paragraphs(),
                        tech: [
                                "NodeJS",
                                "Express",
                                "MongoDB",
                                "Mongoose",
                                "Passport"
                        ],
                        github: "https://github.com/voxspero/book-club-database-exercise.git",
                        year: 2019
                    },
                    {
                        path: [
                            "../img/webapps/"
                        ],
                        title: "Image Gallery Exercise",
                        description: faker.lorem.paragraphs(),
                        tech: [
                                "NodeJS",
                                "Express",
                                "MongoDB",
                                "Mongoose",
                                "Passport"
                        ],
                        github: "https://github.com/voxspero/image-gallery-exercise.git",
                        year: 2019
                    },
                    {
                        path: [
                            "../img/webapps/"
                        ],
                        title: "Portfolio Website with Database",
                        description: faker.lorem.paragraphs(),
                        tech: [
                                "NodeJS",
                                "Express",
                                "MongoDB",
                                "Mongoose",
                                "Passport"
                        ],
                        github: "https://github.com/voxspero/portfolio.git",
                        year: 2019
                    }
                ];

module.exports = webapps;
