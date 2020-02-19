const faker = require('faker'),
	seedFunction = require('../functions'),
	projects = [
		{
			path: [
				'../img/projects/savethedate-landscape.jpg',
				'../img/projects/savethedate-front.png',
				'../img/projects/savethedate-portrait.png',
				'../img/projects/savethedate-sun.png',
				'../img/projects/savethedate-nightsky.png'
			],
			thumbnail: '../img/thumbnails/projects/savethedate-thumb.jpg',
			title: 'Save The Date! - James & Angela',
			description:
				"Our 'Save the Date' I made for our wedding. :) My wife and I enjoy going to festivals and events, and we enjoy relaxed environments and bright colors. This save the date was meant to reflect that chilled excitement. It was fun as well to take an oppotunity to do some slick typography and use bold colors! \n\nThe background is layered silhouettes of trees and mountains. The original had a setting sun in it, but that was later removed as it intruded too much upon the foreground content.",
			media: [ 'Adobe Illustrator', 'Adobe Photoshop', 'Print' ],
			year: '2018'
		},
		{
			path: [
				'../img/projects/brands-mageweave.png',
				'../img/projects/brands-soulgenic.png',
				'../img/projects/brands-voxonic.png',
				'../img/projects/brands-medidrop.png',
				'../img/projects/brands-noctus.png',
				'../img/projects/brands-sproutify.png',
				'../img/projects/brands-pathrover.png'
			],
			thumbnail: '../img/thumbnails/projects/brands-thumb.png',
			title: 'Seven Brands In Five Days',
			description:
				'One day, I decided that I needed some brands to use to creatively drive my practice projects. My initial goal was to make three per day for five days, but I ended up being too busy for two of the days. In the end I ended up with seven made-up brands from a variety of possible areas. \n\nMageweave - Gaming Mousepad manufacturer. \n\nSoulgenic - Plant-Based Alternative food products. \n\nVoxonic - Audiophile peripherals, music streaming, or something else involving audio. \n\nMEDI + DROP - Prescription delivery service. \n\nNoctus - I just wanted to do something with a moon, but people tell me this looks like some kind of evil futuristic corporation logo. \n\nSproutify - e-storefront for buying seeds. \n\nPathrover - Cyclist bags/packs, or some other kind of outdoor adventure gear.',
			media: [ 'Adobe Illustrator' ],
			year: '2020'
		},
		{
			path: [ '../img/projects/disaster-calendar.png' ],
			thumbnail: '../img/thumbnails/projects/disaster-calendar-thumb.jpg',
			title: 'Disaster Calendar',
			description:
				"A themed calendar that was the semester project for a Graphic Design course at college. I chose 'natural disasters' as my theme after brainstorming a couple of themes and page ideas for each. I had such a great time with this one, and was very pleased with how many different ideas I was able to come up with. The professor pushed us very hard with criticism for this project, and I think it shows. \n \nThat poor house can't catch a break!",
			media: [ 'Adobe Illustrator', 'Print' ],
			year: '2014'
		},
		{
			path: [ '../img/projects/burgundy-color.png', '../img/projects/burgundy-mono.png' ],
			thumbnail: '../img/thumbnails/projects/burgundy-color-thumb.jpg',
			title: '"Burgundy" Typography Abstract',
			description:
				'Based off "Burgundy" by Ken Nordine \n \nAn accordion-fold adapation of a jazz poem by Ken Nordine, called "Burgundy". "Burgundy" is part of a larger series of jazz poems by Ken Nordine called "Colors". This was a final project for a Graphic Design course, for which each student in the class was assigned a color that was in the collection of jazz poems. They\'re quite goofy. I definitely recommend giving at least "Burgundy" a listen while you read it, if you can.',
			media: [ 'Adobe Illustrator', 'Print' ],
			year: '2014'
		},
		{
			path: [ '../img/projects/lantasticlogo.png', '../img/projects/lantasticcoaster.png' ],
			thumbnail: '../img/thumbnails/projects/lantasticlogo-thumb.jpg',
			title: 'LANtastic Extreme',
			description:
				'There used to be a local business in my state that claimed to be a LAN cafe called "Lantastic Extreme". As gamers, we laughed at their advertisement when they boasted having Microsoft Word, and used to joke about the place all the time, until our imaginary version of it was basically a business that offered hourly rentals on workstations as opposed to any gaming at all. \n \nOne day, while I was bored, I fashioned a retro logo for the now defunct LAN cafe. I originally wanted to take a floppy disk and put this logo on to an adhesive label which I would stick on the disk and then use as a coaster. I quickly realized it would probably be better to just make coasters, and was able to have some custom coasters made for very cheap. Miraculously, a handful of them have survived being used at a couple years\' worth of parties.',
			media: [ 'Adobe Illustrator', 'Print' ],
			year: '2017'
		},
		{
			path: [
				'../img/projects/geode-concept-logotype.png',
				'../img/projects/geode-concept-logotype-2.png',
				'../img/projects/geodestone-1.png',
				'../img/projects/geodestone-2.png',
				'../img/projects/geodestone-3.png',
				'../img/projects/geode-concept.png',
				'../img/projects/geodelogo-2019-1.png',
				'../img/projects/geodelogo-2019-2.png',
				'../img/projects/geodelogo-2019-3.png'
			],
			thumbnail: '../img/thumbnails/projects/geode-thumb.jpg',
			title: "'GEODE' Concepts",
			description:
				'A conceptual piece that became what I call my body of work! \n \nThe \'G\' based logo is what I started with, originally. By the end of the afternoon, I had worked my way into a completely different concept, with a geode-like crystal replacing the O in GEODE. \n \nI used the latter as the logo for my portfolio for 2 years. \n \nThe design evolved a bit more (and will continue to as time moves forward, more than likely), and has become, for the time being, what you see in the navbar and footer of this iteration of my portfolio. \n \nIt has kind of become my "brand" I suppose, or at least one I can experiment and practice upon.',
			media: [ 'Adobe Illustrator' ],
			year: '2017'
		},
		{
			path: [ '../img/projects/modernclassic.png' ],
			thumbnail: '../img/thumbnails/projects/modernclassic-thumb.jpg',
			title: 'Modern Classic Flyer',
			description:
				'An illustration/flyer I developed for an event my company hosted annually called the Modern Classic. I re-drew the chair from a reference photograph of a Herman Miller Eames Molded Plastic Armchair.',
			media: [ 'Adobe Illustrator', 'Print' ],
			year: '2018'
		},
		{
			path: [ '../img/projects/potluck.png' ],
			thumbnail: '../img/thumbnails/projects/potluck-thumb.jpg',
			title: 'Halloween Potluck Flyer',
			description:
				'A flyer for a "Halloween Potluck" for posting around the office at a previous job. I am still not sure what the contents of the bubbling cauldron were supposed to be, I just had the idea of a cauldron in my head (probably due to the word "pot"). Lobster bisque? Just kidding. I used Lakesight and Gotham for the display text and the information, which I thought made a lovely combination. This may still be my favorite flyer I made for that office. \n \nI was given artistic freedom aside from the required information.',
			media: [ 'Adobe Illustrator', 'Print' ],
			year: '2016'
		},
		{
			path: [ '../img/projects/secretgiftexchange.png' ],
			thumbnail: '../img/thumbnails/projects/secretgiftexchange-thumb.jpg',
			title: 'Secret Gift Exchange Flyer',
			description:
				'A flyer for a "Secret Gift Exchange" for posting around the office at a previous job. I love colorful imagery (you may have noticed), so I decided to incorporate all of the colors of the mainstream winter holidays into one image. I began with just the box, and experimented with depth as I began to add more details. I always liked how this one turned out. \n \nI was given artistic freedom aside from the required information.',
			media: [ 'Adobe Illustrator', 'Print' ],
			year: '2017'
		},
		{
			path: [ '../img/projects/whiteelephant.png' ],
			thumbnail: '../img/thumbnails/projects/whiteelephant-thumb.jpg',
			title: 'White Elephant Flyer',
			description:
				'A flyer for a "White Elephant Gift Exchange" for posting around the office at a previous job. I was given artistic freedom aside from the required information.',
			media: [ 'Adobe Illustrator', 'Print' ],
			year: '2016'
		},
		{
			path: [ '../img/projects/gameday.png' ],
			thumbnail: '../img/thumbnails/projects/gameday-thumb.jpg',
			title: 'Game Day Flyer',
			description:
				'A flyer for a "Game Day" for posting around the office at a previous job. As you can imagine, it was a mid-day office event type of deal where you could go play board games with co-workers and enjoy some snacks. I drew inspiration from retro, Parker-Brothers-type of board game boxes I remember from my childhood. \n\nI was given artistic freedom aside from the required information.',
			media: [ 'Adobe Illustrator', 'Print' ],
			year: '2018'
		},
		{
			path: [
				'../img/projects/flyer-colorrun.png',
				'../img/projects/flyer-fmf.png',
				'../img/projects/flyer-homecoming.png',
				'../img/projects/flyer-mariokart.png',
				'../img/projects/flyer-olympics.png',
				'../img/projects/flyer-pumpkinbaseball.png',
				'../img/projects/flyer-pumpkinpie.png',
				'../img/projects/flyer-silent-library.png'
			],
			thumbnail: '../img/thumbnails/projects/flyer-thumb.jpg',
			title: 'UMBC SEB Event Flyers',
			description:
				'Perhaps my favorite part of being a part of the Student Events Board at UMBC was having the opportunity to make these flyers. Despite one of them saying "Color Run", all of these flyers were printed on various colors of letter-size paper chosen, likely at random, by the printer. I had a lot of fun conceptualizing these flyers, while also getting practice working with Adobe Illustrator. \n \nAs a developing artist, it was a special feeling to see my work posted around campus on notice boards. Poster/flyer design was something I particularly enjoyed during Art History courses at the time, and I was grateful to have a brief opportunity to make some actual hand-posted art.',
			media: [ 'Adobe Illustrator', 'Print' ],
			year: '2013-2014'
		},
		{
			path: [ '../img/projects/bnb-schedule.jpg' ],
			thumbnail: '../img/thumbnails/projects/bnb-schedule-thumb.jpg',
			title: 'UMBC SEB Breakfast & Bingo Posters',
			description:
				'The semester schedule for the Student Events Board\'s "Breakfast & Bingo" in Spring 2014 at UMBC, for posting around campus. As you would expect, you play bingo, and breakfast is available. Food was catered by the campus kitchen, and included cold and hot breakfast foods of all kinds, and a waffle bar. \n \nFun Fact: There are several occasions when Breakfast & Bingo took place in the evening; however, breakfast was always served!',
			media: [ 'Adobe Illustrator', 'Print' ],
			year: '2014'
		},
		{
			path: [
				'../img/projects/axiom-art.png',
				'../img/projects/axiom-lower.png',
				'../img/projects/axiom-upper.png'
			],
			thumbnail: '../img/thumbnails/projects/axiom-thumb.jpg',
			title: 'Axiom Typeface',
			// seedFunction.toTitleCase(faker.lorem.words()),
			description:
				'Axiom is a Slab Serif typeface I developed for one of my courses during school. Obvious influences include Rockwell and Memphis. Every letter was designed on graph paper.',
			media: [ 'Adobe Illustrator', 'Print' ],
			year: '2013'
		},
		{
			path: [ '../img/projects/icebox-1.png', '../img/projects/icebox-2.png', '../img/projects/icebox-3.png' ],
			thumbnail: '../img/thumbnails/projects/icebox-thumb.jpg',
			title: 'Icebox Website Concepts',
			description:
				'One of three website mock-ups I made for a Graphic Design course in college. The website was a site for livestreaming video game tournaments (also known as e-sports), that I actually made into a reality later on and operated from 2012-2013. The live website ended up being a video player centered in the viewport with an icy border and a flashy backdrop and a twitter feed underneath. I incorporated the corner tabs idea seen in the first image as links to Twitch, Quake Live, etc on the live website. The files for the live website, however, are lost to an old hard drive. R.I.P.',
			media: [ 'Adobe Photoshop', 'Digital' ],
			year: '2012'
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
