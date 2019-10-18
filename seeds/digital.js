const   faker        = require("faker"),
        seedFunction = require("../functions"), 
        digital      = [
    {
        path: "../img/digital/beneath.png",
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        media: [
            "Adobe Photoshop"
        ],
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: "../img/digital/cb-ec-gf.png",
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        media: [
            "Adobe Photoshop"
        ],
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: "../img/digital/cb-nc-drawingshow.png",
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        media: [
            "Adobe Photoshop"
        ],
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: "../img/digital/cb-nc-fb.png",
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        media: [
            "Adobe Photoshop"
        ],
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: "../img/digital/cb-nc-gf.png",
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        media: [
            "Adobe Photoshop"
        ],
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: "../img/digital/hoq-tdm.png",
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        media: [
            "Adobe Photoshop"
        ],
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: "../img/digital/hoq-tdm-2.png",
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        media: [
            "Adobe Photoshop"
        ],
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: "../img/digital/tdmpickup-background.jpg",
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        media: [
            "Adobe Photoshop"
        ],
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: "../img/digital/tdmpickup-draft.png",
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        media: [
            "Adobe Photoshop"
        ],
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: "../img/digital/tdmpickup-playmore.png",
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        media: [
            "Adobe Photoshop"
        ],
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: "../img/digital/tdmpickup-playmore-2.png",
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        media: [
            "Adobe Photoshop"
        ],
        year: seedFunction.getRndInteger(2012, 2019)
    }
];

module.exports = digital;