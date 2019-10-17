const   faker        = require("faker"),
        seedFunction = require("../functions"),
        projects     = [
    {
        path: [
                "../img/projects/axiom-art.png"
        ],
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        media: "Adobe Illustrator",
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: [
                "../img/projects/axiom-lower.png"
        ],
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        media: "Adobe Illustrator",
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: [
                "../img/projects/axiom-upper.png"
        ],
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        media: "Adobe Illustrator",
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: [
                "../img/projects/bnb-promo.png"
        ],
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        media: "Adobe Illustrator",
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: [
                "../img/projects/bnb-schedule.png"
        ],
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        media: "Adobe Illustrator",
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: [
                "../img/projects/burgundy-color.png"
        ],
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        media: "Adobe Illustrator",
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: [
                "../img/projects/burgundy-mono.png"
        ],
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        media: "Adobe Illustrator",
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: [
                "../img/projects/disaster-calendar.png"
        ],
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        media: "Adobe Illustrator",
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: [
                "../img/projects/flyer-colorrun.png",
                "../img/projects/flyer-fmf.png",
                "../img/projects/flyer-homecoming.png",
                "../img/projects/flyer-mariokart.png",
                "../img/projects/flyer-olympics.png",
                "../img/projects/flyer-pumpkinbaseball.png",
                "../img/projects/flyer-pumpkinpie.png",
                "../img/projects/flyer-silent-library.png"
        ],
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        media: "Adobe Illustrator",
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: [
                "../img/projects/geode-concept.png",
                "../img/projects/geode-concept-logotype.png",
                "../img/projects/geode-concept-logotype-2.png"
        ],
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        media: "Adobe Illustrator",
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: [
                "../img/projects/icebox-1.png",
                "../img/projects/icebox-2.png",
                "../img/projects/icebox-3.png"
        ],
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        media: "Adobe Illustrator",
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: [
                "../img/projects/levelupredux.png"
        ],
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        media: "Adobe Illustrator",
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: [
                "../img/projects/sadboys.png"
        ],
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        media: "Adobe Illustrator",
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: [
                "../img/projects/savethedate-landscape.jpg",
                "../img/projects/savethedate-portrait.jpg"
        ],
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        media: "Adobe Illustrator",
        year: seedFunction.getRndInteger(2012, 2019)
    }
];

module.exports = projects;