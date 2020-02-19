const faker = require('faker'),
	seedFunction = require('../functions'),
	photography = [
		{
			path: [
				'../img/photography/phonerandom-1.jpg',
				'../img/photography/phonerandom-2.jpg',
				'../img/photography/phonerandom-3.jpg',
				'../img/photography/phonerandom-4.jpg',
				'../img/photography/phonerandom-5.jpg',
				'../img/photography/phonerandom-6.jpg',
				'../img/photography/phonerandom-7.jpg',
				'../img/photography/phonerandom-8.jpg',
				'../img/photography/phonerandom-9.jpg',
				'../img/photography/phonerandom-10.jpg',
				'../img/photography/phonerandom-11.jpg',
				'../img/photography/phonerandom-12.jpg',
				'../img/photography/phonerandom-13.jpg',
				'../img/photography/phonerandom-14.jpg',
				'../img/photography/phonerandom-15.jpg',
				'../img/photography/phonerandom-16.jpg',
				'../img/photography/phonerandom-17.jpg',
				'../img/photography/phonerandom-18.jpg',
				'../img/photography/phonerandom-19.jpg',
				'../img/photography/phonerandom-20.jpg'
			],
			thumbnail: '../img/thumbnails/photography/phonerandom-thumb.jpg',
			title: 'Phone Camera Grab Bag (2012-2015)',
			// seedFunction.toTitleCase(faker.lorem.words()),
			description:
				'This is a grab bag of twenty old photographs I found on my storage drive from two old phones. Most of them were just snapped at random during the day. \n \nMost of these photographs were taken in Snapchat and saved as copies (I was lazy, and it was somehow faster than using the normal camera.), which results in poor overall quality. While this is a shame, because the images could look better and clearer, many of them were intended to look abstract or lo-fidelity, and there is a resulting nostalgic kitsch to many of them, as well as a variety of subjects and moods.',
			camera: 'Motorola Droid 2 Global (5MP) / Samsung Galaxy S4 (13MP)',
			year: '2015'
		},
		{
			path: [ '../img/photography/boats-hdr.jpg', '../img/photography/boats-reg.jpg' ],
			thumbnail: '../img/thumbnails/photography/boats-thumb.jpg',
			title: 'At The Park - Boats',
			// seedFunction.toTitleCase(faker.lorem.words()),
			description:
				'An HDR photograph I took at Centennial Lake at Centennial Park in Ellicott City, MD. You can see faint traces of sunlight in the original, but it is largely dreary and overcast. There is such a profoundly improved mood in the HDR result, thanks to a more vibrant palette and the soft, inviting glow of the now accentuated sunlight. \n \nAs with all of my HDR photos, photos at six (or more) progressing exposure levels were combined with the aid of software to produce a striking tone-mapped image that, while not true to life, is very interesting to behold and consider.',
			camera: 'Canon Digital Rebel XTi',
			year: '2012'
		},
		{
			path: [ '../img/photography/lakehouse-exterior-hdr.jpg', '../img/photography/lakehouse-exterior-reg.jpg' ],
			thumbnail: '../img/thumbnails/photography/lakehouse-exterior-thumb.jpg',
			title: 'At The Park - Lake House Exterior',
			description:
				'An HDR photograph I took at Centennial Lake at Centennial Park in Ellicott City, MD. This one really showcases how HDR processing handles reflections, and light behind glass. Part of the building almost resembles a 3D rendering instead of a photograph. \n \nAs with all of my HDR photos, photos at six (or more) progressing exposure levels were combined with the aid of software to produce a striking tone-mapped image that, while not true to life, is very interesting to behold and consider.',
			camera: 'Canon Digital Rebel XTi',
			year: '2012'
		},
		{
			path: [ '../img/photography/lakehouse-hdr.jpg', '../img/photography/lakehouse-reg.jpg' ],
			thumbnail: '../img/thumbnails/photography/lakehouse-thumb.jpg',
			title: 'At The Park - Lake House Interior',
			description:
				"An HDR photograph I took at Centennial Lake at Centennial Park in Ellicott City, MD. This was the interior of one of the park's lake houses. This area was open to the elements, as can be seen in the window texture particularly. The real draw here, however, was the wood planks, which explode with texture! \n \nAs with all of my HDR photos, photos at six (or more) progressing exposure levels were combined with the aid of software to produce a striking tone-mapped image that, while not true to life, is very interesting to behold and consider.",
			camera: 'Canon Digital Rebel XTi',
			year: '2012'
		},
		{
			path: [ '../img/photography/lakeshore-hdr.jpg', '../img/photography/lakeshore-reg.jpg' ],
			thumbnail: '../img/thumbnails/photography/lakeshore-thumb.jpg',
			title: 'At The Park - Lake Shore',
			description:
				'An HDR photograph I took at Centennial Lake at Centennial Park in Ellicott City, MD. It was an overcast day, but I did not let that stop me from experimenting. \n \nAs with all of my HDR photos, photos at six (or more) progressing exposure levels were combined with the aid of software to produce a striking tone-mapped image that, while not true to life, is very interesting to behold and consider.',
			camera: 'Canon Digital Rebel XTi',
			year: '2012'
		},
		{
			path: [ '../img/photography/livingroom-hdr.jpg', '../img/photography/livingroom-reg.jpg' ],
			thumbnail: '../img/thumbnails/photography/livingroom-thumb.jpg',
			title: 'Living Room',
			description:
				'An HDR photograph I took inside of my parents house. If I recall correctly, I was most interested in seeing how the texture of the leather armchair would jump out. The washed-out palette certainly makes the resulting image a bit more somber. \n \nAs with all of my HDR photos, photos at six (or more) incrementally progressing exposure levels were combined with the aid of software to produce a striking tone-mapped image that, while not true to life, is very interesting to behold and consider.',
			camera: 'Canon Digital Rebel XTi',
			year: '2012'
		},
		{
			path: [ '../img/photography/street-hdr.jpg', '../img/photography/street-reg.jpg' ],
			thumbnail: '../img/thumbnails/photography/street-thumb.jpg',
			title: 'Out Front',
			description:
				"An HDR photograph I took in front of my parents' house in the evening. \n \nAs with all of my HDR photos, photos at six (or more) progressing exposure levels were combined with the aid of software to produce a striking tone-mapped image that, while not true to life, is very interesting to behold and consider.",
			camera: 'Canon Digital Rebel XTi',
			year: '2012'
		},
		{
			path: [ '../img/photography/warehouse-hdr.jpg', '../img/photography/warehouse-reg.jpg' ],
			thumbnail: '../img/thumbnails/photography/warehouse-thumb.jpg',
			title: 'The Warehouse',
			description:
				'An HDR photograph I took inside the warehouse at UMBC while working as a student mover for 3 years. As we all know, warehouses are dusty storage places for "stuff". So naturally, seeking shadow-play and texture, I took a couple of shots in the warehouse. I was not disappointed. \n \nAs with all of my HDR photos, photos at six (or more) progressing exposure levels were combined with the aid of software to produce a striking tone-mapped image that, while not true to life, is very interesting to behold and consider.',
			camera: 'Canon Digital Rebel XTi',
			year: '2012'
		},
		{
			path: [ '../img/photography/warehouse-2-hdr.jpg', '../img/photography/warehouse-2-reg.jpg' ],
			thumbnail: '../img/thumbnails/photography/warehouse-2-thumb.jpg',
			title: 'The Warehouse #2',
			description:
				'Another HDR photograph I took at the UMBC warehouse. There is no shortage of texture and shadows and reflections to feast your eyes upon, here. \n \nAs with all of my HDR photos, photos at six (or more) progressing exposure levels were combined with the aid of software to produce a striking tone-mapped image that, while not true to life, is very interesting to behold and consider.',
			camera: 'Canon Digital Rebel XTi',
			year: '2012'
		},
		{
			path: [ '../img/photography/workvan-hdr.jpg', '../img/photography/workvan-reg.jpg' ],
			thumbnail: '../img/thumbnails/photography/workvan-thumb.jpg',
			title: 'Work Van',
			description:
				"An HDR photograph I took of one of our many work vans at UMBC. This '92 Dodge RAM 250 van was extremely run down when it was passed to us. It had a yellow interior, giant wooden boards in place of a floor, no A/C (it did have working heat!), no radio, and only 2 seats. I also had a bead of Mercury in the cup holder... Nevertheless, it made a great subject for an HDR photograph, and I enjoyed driving it around campus for the year or so that it was in use. It is probably in van heaven now. RIP. \n \nAs with all of my HDR photos, photos at six (or more) progressing exposure levels were combined with the aid of software to produce a striking tone-mapped image that, while not true to life, is very interesting to behold and consider.",
			camera: 'Canon Digital Rebel XTi',
			year: '2012'
		}
	];

module.exports = photography;
