const   faker        = require("faker"),
        seedFunction = require("../functions"),
        illustration = [
    {
        path: [
            "../img/illustration/soupernintendo.png"
        ],
        thumbnail: "../img/thumbnails/illustration/soupernintendo-thumb.jpg",
        title: "Soupernintendo Logotype",
        description: "Branding I developed for a Twitch channel, where I planned to stream playthroughs of entire Super Nintendo games I picked either at random, or arbitrarily from a specific list, if I was so inclined. I completed The Legend of Zelda: A Link To The Past  in under 5 hours, but I was so exhausted by the end I put this idea on the back burner. Regardless, I am quite fond of this logo.",
        media: [
            "Adobe Illustrator",
            "Print/Digital"
        ],
        year: "2017"
    },
    {
        path: [
            "../img/illustration/baddies.png"
        ],
        thumbnail: "../img/thumbnails/illustration/baddies-thumb.jpg",
        title: "'BADDIES' Logotype",
        description: "A logo I created as a reflection of my vibrant group of cherished friends. \"Baddies\" is what we call ourselves. (The joke is we are bad at video games.) \n\nI had a flag made of this logo; it hangs proudly in the dining area of our kitchen.",
        media: [
            "Adobe Illustrator"
        ],
        year: "2017"
    },
    {
        path: [
            "../img/illustration/bounty.png"
        ],
        thumbnail: "../img/thumbnails/illustration/bounty-thumb.jpg",
        title: "Bounty Rune (DotA 2)",
        description: "Dota 2 is a vibrant, colorful video game with all manner of interesting and fantastical objects. The Runes are stones, of varying color and shape, that grant a boon to heroes lucky enough to find them first. In the case of the Bounty Rune, a bounty of gold is awarded to the team of the hero picks it up. I was inspired to turn a lighting exercise into an illustration of this object by the colors I happened to choose initially.",
        media: [
            "Adobe Illustrator"
        ],
        year: "2018"
    },
    {
        path: [
            "../img/illustration/hipster-doofus.png"
        ],
        thumbnail: "../img/thumbnails/illustration/hipster-doofus-thumb.jpg",
        title: "Hipster Doofus",
        description: "A cover for a fictional album called \"Hipster Doofus\" by a fictional artist named \"Phlegm\". Just for fun. I use this image minus the text as my profile picture for Twitter, Twitch, and Discord and has sort of become a logo of mine. I consider it a representation of how things that are different can come together in harmony.",
        media: [
            "Adobe Illustrator"
        ],
        year: "2018"
    },
    {
        path: [
            "../img/illustration/abstract-1.png"
        ],
        thumbnail: "../img/thumbnails/illustration/abstract-1-thumb.jpg",
        title: "Abstract #1",
        // seedFunction.toTitleCase(faker.lorem.words()),
        description: "An abstract experiment of shape and color that was made to resemble a polygonal eyeball but also appear emblematic. I hope to eventually use this for something or elaborate upon it.",
        media: [
            "Adobe Illustrator"
        ],
        year: "2018"
    },
    {
        path: [
            "../img/illustration/abstract-2.png"
        ],
        thumbnail: "../img/thumbnails/illustration/abstract-2-thumb.jpg",
        title: "Abstract #2",
        description: "An experiment with a psychedlic palette of colors, incorporating inspirations from fantasy books and games. It has turned out especially wild so far, and is something I plan to add more details to over time.",
        media: [
            "Adobe Illustrator"
        ],
        year: "2019"
    },
    {
        path: [
                "../img/illustration/bk.png"
        ],
        thumbnail: "../img/thumbnails/illustration/bk-thumb.jpg",
        title: "Bone King",
        description: "A goofy illustration/doodle where I wanted to make a line drawing with bright colors. Added a cute little skull to the crown, reminiscent of something out of Adventure Time.",
        media: [
            "Adobe Illustrator"
        ],
        year: "2018"
    },
    {
        path: [
            "../img/illustration/homequake.png"
        ],
        thumbnail: "../img/thumbnails/illustration/homequake-thumb.jpg",
        title: "Home Is Where The Quake Is",
        description: "A silly Quake-themed \"Live. Laugh. Love.\" parody. I current use this as a \"Be Right Back\" and as an \"Offline\" image on Twitch.",
        media: [
            "Adobe Illustrator"
        ],
        year: "2019"
    },
    {
        path: [
            "../img/illustration/midair.png"
        ],
        thumbnail: "../img/thumbnails/illustration/midair-thumb.png",
        title: "MID-AIR Emote",
        description: "An emote I made for GaRpY, a professional Quake player, to use on his Twitch channel. The design is based off of the Mid-Air medal reward in Quake Champions, which is awarded for striking an airborne opponent and slaying them with a single rocket.",
        media: [
            "Adobe Illustrator"
        ],
        year: "2019"
    },
    {
        path: [
            "../img/illustration/cronoburp.png"
        ],
        thumbnail: "../img/thumbnails/illustration/cronoburp-thumb.png",
        title: "Crono Soda Chug Emote",
        description: "An emote I made for my personal Twitch channel. It features a Crono, from Chrono Trigger, struggling to win the Soda Chug. It may have been subconsciously influenced by the fact that Akira Toriyama (creator of Dragon Ball) did the character design for Chrono Trigger, but many have told me that it is a decent imitation of one of his styles of drawing characters. \n\nThe emote sizes for Twitch are 112x112 pixels, 56x56 pixels, and 28x28 pixels, and the vast majority of the time they are displayed at 28x28 pixels on PC. This is only slightly larger than the favicon next to the page name in your browser window! Mobile uses the slightly higher resolution versions, but still displays relatively tiny. This becomes an interesting puzzle when translating a larger drawing to such a small, pixelated canvas. One thing going for someone creating for this size is that the drawing can remain fairly rough.",
        media: [
            "Adobe Illustrator"
        ],
        year: "2019"
    },
    {
        path: [
            "../img/illustration/terrayaya.png"
        ],
        thumbnail: "../img/thumbnails/illustration/terrayaya-thumb.png",
        title: "Terra AYAYA Emote",
        description: "An emote I made for my personal Twitch channel. It features Terra, from Final Fantasy 6, in a format derivate of a popular emote called AYAYA, which features a friendly anime girl's face during an excited outburst. As with the Crono drawing, this was destined to be displayed at 28x28 pixels.",
        media: [
            "Adobe Illustrator"
        ],
        year: "2019"
    },
    {
        path: [
            "../img/illustration/kirby.png"
        ],
        thumbnail: "../img/thumbnails/illustration/kirby-thumb.jpg",
        title: "Kirby! (Nintendo)",
        description: "An illustration of Kirby that I made to experiment with chromatic effects. Kirby loves to eat, constantly, so of course he is chasing food!",
        media: [
            "Adobe Illustrator"
        ],
        year: "2018"
    },
    {
        path: [
            "../img/illustration/geode-orb.jpg"
        ],
        thumbnail: "../img/thumbnails/illustration/geode-orb-thumb.jpg",
        title: "Multi-Colored Orb Concept",
        description: "An unremarkable color exercise, but also a juxtaposition of colors I personally like. Eventually became incorporated into my GEODE logo.",
        media: [
            "Adobe Illustrator"
        ],
        year: "2018"
    },
    {
        path: [
            "../img/illustration/vox.jpg"
        ],
        thumbnail: "../img/thumbnails/illustration/vox-thumb.jpg",
        title: "VOX Logotype",
        description: "A logotype exercise in color and shape that I am fond of.",
        media: [
            "Adobe Illustrator"
        ],
        year: "2018"
    },
    {
        path: [
            "../img/illustration/junk-food-chips.png"
        ],
        thumbnail: "../img/thumbnails/illustration/junk-food-chips-thumb.jpg",
        title: "A Bag of Chips",
        description: "A doodle of a bag of chips. I believe the inspiration was we were on a snack break at work.",
        media: [
            "Adobe Illustrator"
        ],
        year: "2017"
    },
    {
        path: [
            "../img/illustration/junk-food-2liter.png"
        ],
        thumbnail: "../img/thumbnails/illustration/junk-food-2liter-thumb.png",
        title: "A 2-Liter Bottle Of Soda",
        description: "A doodle of a 2-Liter bottle of soda with vague branding inspired by Mountain Dew and Surge. There is really not much more to it!",
        media: [
            "Adobe Illustrator"
        ],
        year: "2017"
    },
    {
        path: [
            "../img/illustration/bottle.png"
        ],
        thumbnail: "../img/thumbnails/illustration/bottle-thumb.jpg",
        title: "Bottle",
        description: "A cartoon illustration of a bottle full of green liquid. Inspired by \"The Legend of Zelda: The Wind Waker\".",
        media: [
            "Adobe Illustrator"
        ],
        year: "2012"
    }
];

module.exports = illustration;