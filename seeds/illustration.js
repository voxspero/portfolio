const   faker        = require("faker"),
        seedFunction = require("../functions"),
        illustration = [
    {
        path: "../img/illustration/abstract-1.png",
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: "../img/illustration/baddies.png",
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: "../img/illustration/bk.png",
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: "../img/illustration/bottle.png",
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: "../img/illustration/bounty.png",
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: "../img/illustration/geode-orb.png",
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: "../img/illustration/hipster-doofus.png",
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: "../img/illustration/kirby.png",
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: "../img/illustration/soupernintendo.png",
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: "../img/illustration/vox.png",
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        year: seedFunction.getRndInteger(2012, 2019)
    },
];

module.exports = illustration;