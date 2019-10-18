const   faker        = require("faker"),
        seedFunction = require("../functions"),
        photography  = [
    {
        path: [
                "../img/photography/boats-hdr.jpg",
                "../img/photography/boats-reg.jpg"
        ],       
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        camera: "Canon Digital Rebel XTi",
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: [
            "../img/photography/lakehouse-exterior-hdr.jpg",
            "../img/photography/lakehouse-exterior-reg.jpg"
        ], 
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        camera: "Canon Digital Rebel XTi",
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: [
            "../img/photography/lakehouse-hdr.jpg",
            "../img/photography/lakehouse-reg.jpg"
        ], 
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        camera: "Canon Digital Rebel XTi",
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: [
            "../img/photography/lakeshore-hdr.jpg",
            "../img/photography/lakeshore-reg.jpg"
        ], 
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        camera: "Canon Digital Rebel XTi",
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: [
            "../img/photography/livingroom-hdr.jpg",
            "../img/photography/livingroom-reg.jpg"
        ], 
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        camera: "Canon Digital Rebel XTi",
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: [
            "../img/photography/street-hdr.jpg",
            "../img/photography/street-reg.jpg"
        ], 
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        camera: "Canon Digital Rebel XTi",
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: [
            "../img/photography/warehouse-hdr.jpg",
            "../img/photography/warehouse-reg.jpg"
        ], 
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        camera: "Canon Digital Rebel XTi",
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: [
            "../img/photography/warehouse-2-hdr.jpg",
            "../img/photography/warehouse-2-reg.jpg"
        ], 
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        camera: "Canon Digital Rebel XTi",
        year: seedFunction.getRndInteger(2012, 2019)
    },
    {
        path: [
            "../img/photography/workvan-hdr.jpg",
            "../img/photography/workvan-reg.jpg"
        ], 
        title: seedFunction.toTitleCase(faker.lorem.words()),
        description: faker.lorem.paragraphs(),
        camera: "Canon Digital Rebel XTi",
        year: seedFunction.getRndInteger(2012, 2019)
    },
];

module.exports = photography;