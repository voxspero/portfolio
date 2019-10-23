const   faker        = require("faker"),
        seedFunction = require("../functions"),
        projects     = [
    {
        path: [
                "../img/projects/savethedate-landscape.jpg",
                "../img/projects/savethedate-front.png",
                "../img/projects/savethedate-portrait.png"
        ],
        title: "Save The Date! - James & Angela",
        description: "Our 'Save the Date' I made for our wedding. :) My wife and I enjoy going to festivals and events, and we enjoy relaxed environments and bright colors. This save the date was meant to reflect that chilled excitement.",
        media: [
            "Adobe Illustrator",
            "Adobe Photoshop",
            "Print"
        ],
        year: "2018"
    },
    {
        path: [
                "../img/projects/disaster-calendar.png"
        ],
        title: "Disaster Calendar",
        description: "A themed calendar that was the semester project for a Graphic Design course at college. I chose 'natural disasters' as my theme after brainstorming a couple of themes and page ideas for each.",
        media: [
            "Adobe Illustrator",
            "Print"
        ],
        year: "2014"
    },
    {
        path: [
                "../img/projects/burgundy-color.png",
                "../img/projects/burgundy-mono.png"
        ],
        title: "\"Burgundy\" Typography Abstract",
        description: "Based off \"Burgundy\" by Ken Nordine \n \nAn accordion-fold adapation of a jazz poem by Ken Nordine, called \"Burgundy\". \"Burgundy\" is part of a larger series of jazz poems by Ken Nordine called \"Colors\". This was a final project for a Graphic Design course, for which each student in the class was assigned a color that was in the collection of jazz poems.",
        media: [
            "Adobe Illustrator",
            "Print"
        ],
        year: "2014"
    },
    {
        path: [
                "../img/projects/lantasticlogo.png",
                "../img/projects/lantasticcoaster.png"
        ],
        title: "LANtastic Extreme",
        description: "There used to be a local business in my state that claimed to be a LAN cafe called \"Lantastic Extreme\". As gamers, we laughed at their advertisement when they boasted having Microsoft Word, and used to joke about the place all the time, until our imaginary version of it was basically a business that offered hourly rentals on workstations as opposed to any gaming at all. \n \nOne day, while I was bored, I fashioned a retro logo for the now defunct LAN cafe. I originally wanted to take a floppy disk and put this logo on to an adhesive label which I would stick on the disk and then use as a coaster. I quickly realized it would probably be better to just make coasters, and was able to have some custom coasters made for very cheap. Miraculously, a handful of them have survived being used at a couple years' worth of parties.",
        media: [
            "Adobe Illustrator",
            "Print"
        ],
        year: "2017"
    },
    {
        path: [
                "../img/projects/geode-concept-logotype.png",
                "../img/projects/geode-concept-logotype-2.png",
                "../img/projects/geodestone-1.png",
                "../img/projects/geodestone-2.png",
                "../img/projects/geodestone-3.png",
                "../img/projects/geode-concept.png",
                "../img/projects/geodelogo-2019-1.png",
                "../img/projects/geodelogo-2019-2.png",   
                "../img/projects/geodelogo-2019-3.png"   
        ],
        title: "'GEODE' Concepts",
        description: "A conceptual piece that became what I call my body of work! \n \nThe 'G' based logo is what I started with, originally. By the end of the afternoon, I had worked my way into a completely different concept, with a geode-like crystal replacing the O in GEODE. \n \nI used the latter as the logo for my portfolio for 2 years. The design evolved a bit more (and will continue to as time moves forward), and has become, for the time being, what you see in the navbar and footer of this iteratiton of my portfolio.",
        media: [
            "Adobe Illustrator"
        ],
        year: "2017"
    },
    {
        path: [
                "../img/projects/modernclassic.png"
        ],
        title: "Modern Classic Flyer",
        description: "An illustration/flyer I developed for an event called the Modern Classic. I re-drew the chair from a reference photograph.",
        media: [
            "Adobe Illustrator",
            "Print"
        ],
        year: "2018"
    },
    {
        path: [
                "../img/projects/potluck.png"
        ],
        title: "Halloween Potluck Flyer",
        description: "A flyer for a \"Secret Gift Exchange\" for posting around the office at a previous job. I was given artistic freedom aside from the required information.",
        media: [
            "Adobe Illustrator",
            "Print"
        ],
        year: "2016"
    },
    {
        path: [
                "../img/projects/secretgiftexchange.png"
        ],
        title: "Secret Gift Exchange Flyer",
        description: "A flyer for a \"Secret Gift Exchange\" for posting around the office at a previous job.  I was given artistic freedom aside from the required information.",
        media: [
            "Adobe Illustrator",
            "Print"
        ],
        year: "2017"
    },
    {
        path: [
                "../img/projects/whiteelephant.png"
        ],
        title: "White Elephant Flyer",
        description: "A flyer for a \"White Elephant Gift Exchange\" for posting around the office at a previous job. I was given artistic freedom aside from the required information.",
        media: [
            "Adobe Illustrator",
            "Print"
        ],
        year: "2016"
    },
    {
        path: [
                "../img/projects/gameday.png"
        ],
        title: "Game Day Flyer",
        description: "A flyer for a \"Game Day\" for posting around the office at a previous job. I was given artistic freedom aside from the required information.",
        media: [
            "Adobe Illustrator",
            "Print"
        ],
        year: "2018"
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
        title: "UMBC SEB Event Flyers",
        description: "Perhaps my favorite part of being a part of the Student Events Board at UMBC was having the opportunity to make these flyers. I had fun conceptualizing these flyers, while also getting practice with Adobe Illustrator. \n \nAs a developing artist, it was a special feeling to see my work posted around campus on notice boards. Poster/flyer design was something I particularly enjoyed during Art History courses at the time, and I was grateful to have a brief opportunity to make some actual hand-posted art.",
        media: [
            "Adobe Illustrator",
            "Print"
        ],
        year: "2013-2014"
    },
    {
        path: [
                "../img/projects/bnb-schedule.jpg"
        ],
        title: "UMBC SEB Breakfast & Bingo Posters",
        description: "The semester schedule for the Student Events Board's \"Breakfast & Bingo\" in Spring 2014 at UMBC, for posting around campus. As you would expect, you play bingo, and breakfast is available. Food was catered by the campus kitchen, and included cold and hot breakfast foods of all kinds, and a waffle bar. \n \nFun Fact: There are several occasions when Breakfast & Bingo took place in the evening; however, breakfast was always served!",
        media: [
            "Adobe Illustrator",
            "Print"
        ],
        year: "2014"
    },
    {
        path: [
                "../img/projects/axiom-art.png",
                "../img/projects/axiom-lower.png",
                "../img/projects/axiom-upper.png"
        ],
        title: "Axiom Typeface",
        // seedFunction.toTitleCase(faker.lorem.words()),
        description: "Axiom is a Slab Serif typeface I developed for one of my courses during school. Obvious influences include Rockwell and Memphis. Every letter was designed on graph paper.",
        media: [
            "Adobe Illustrator",
            "Print"
        ],
        year: "2013"
    },
    {
        path: [
                "../img/projects/icebox-1.png",
                "../img/projects/icebox-2.png",
                "../img/projects/icebox-3.png"
        ],
        title: "Icebox Website Concepts",
        description: "One of three website mock-ups I made for a Graphic Design course in college. The website was a site for livestreaming video game tournaments (also known as e-sports), that I actually made into a reality later on and operated from 2012-2013. The live website ended up being a video player centered in the viewport with an icy border and a flashy backdrop and a twitter feed underneath. I incorporated the corner tabs idea seen in the first image as links to Twitch, Quake Live, etc on the live website. The files for the live website, however, are lost to an old hard drive. R.I.P.",
        media: [
            "Adobe Photoshop",
            "Digital"
        ],
        year: "2012"
    }
    // {
    //     path: [
    //             "../img/projects/levelupredux.png"
    //     ],
    //     title: seedFunction.toTitleCase(faker.lorem.words()),
    //     description: faker.lorem.paragraphs(),
    //     media: [
    //         "Adobe Illustrator"
    //     ],
    //     year: seedFunction.getRndInteger(2012, 2019)
    // },
    // {
    //     path: [
    //             "../img/projects/sadboys.jpg"
    //     ],
    //     title: seedFunction.toTitleCase(faker.lorem.words()),
    //     description: faker.lorem.paragraphs(),
    //     media: [
    //         "Adobe Illustrator"
    //     ],
    //     year: seedFunction.getRndInteger(2012, 2019)
    // },
];

module.exports = projects;