const   faker        = require("faker"),
        seedFunction = require("../functions"), 
        digital      = [
    {
        path: [
            "../img/digital/beneath.png"
        ],
        thumbnail: "../img/thumbnails/digital/beneath-thumb.jpg",
        title: "Look Beneath",
        // seedFunction.toTitleCase(faker.lorem.words()),
        description: "A cover for a fictional album called \"Look Beneath\" by an unnamed fictional artist. A very fun afternoon project in Photoshop. It began as a triangle with two shadows, and evolved into a crazy piece with water and colors and even more lights.",
        media: [
            "Adobe Photoshop"
        ],
        year: "2018"
    },
    {
        path: [
            "../img/digital/zotac142.png",
            "../img/digital/zotac143.png"
        ],
        thumbnail: "../img/thumbnails/digital/zotac142-thumb.jpg",
        title: "ZOTAC Sunday Duel Cup #142",
        description: "ZOTAC is a PC and PC hardware company who sponsored several years of Sunday Duel Cups, with a prize pool, for the Quake Live (an Arena First Person Shooter game) community. Level Up TV covered a great deal of these cups over the years; our archived videos reach all the way back to cup #67 at least. I love how the sign turned out, and this was a format I could easily update for subsequent weeks by just changing the number in the Photoshop file and tweaking its position.",
        media: [
            "Adobe Photoshop"
        ],
        year: "2012"
    },
    {
        path: [
            "../img/digital/cb-ec-gf.png"
        ],
        thumbnail: "../img/thumbnails/digital/cb-ec-gf-thumb.jpg",
        title: "ClanBase Eurocup Grand Finals Twitch Stream Overlay",
        description: "ClanBase was the leading organization for professional-grade Quake Live play in Europe. The greatest European team-players in the scene were all featured here. This grand final was between an Italian squad and a Russian squad, and featured several of the best TDM players ever to play Quake. The Russians (102.) ended up taking the series handily, as their squad may have been one of the best TDM teams of all time. I designed the logos for each team.  Similar retouching to my other works of this nature can be seen in the lighting and effects, and there is a cut-out for my colleague to appear on webcam.",
        media: [
            "Adobe Photoshop"
        ],
        year: "2013"
    },
    {
        path: [
            "../img/digital/cb-nc-drawingshow.png"
        ],
        thumbnail: "../img/thumbnails/digital/cb-nc-drawingshow-thumb.jpg",
        title: "ClanBase NationsCup Groups Drawing Promo",
        description: "This was a holding screen we would show on the live video feed during breaks in content, accompanied by music.",
        media: [
            "Adobe Photoshop"
        ],
        year: "2013"
    },
    {
        path: [
            "../img/digital/cb-nc-fb.png"
        ],
        thumbnail: "../img/thumbnails/digital/cb-nc-fb-thumb.jpg",
        title: "ClanBase NationsCup Facebook Banner",
        description: "A cover image for the Level Up TV Facebook page during NationsCup XVI, when we began branding tournaments a little more aggressively to help generate hype and make it a more exciting experience for spectators.",
        media: [
            "Adobe Photoshop"
        ],
        year: "2013"
    },
    {
        path: [
            "../img/digital/cb-nc-gf.png"
        ],
        thumbnail: "../img/thumbnails/digital/cb-nc-gf-thumb.jpg",
        title: "ClanBase NationsCup Grand Finals Twitch Stream Overlay",
        description: "The final NationsCup saw Russia vs. Poland in its grand finale. The Russian squad, possibly identical to the 102. squad who won ClanBase that year, cleaned up handily against the Polish, who could not keep the pace. As always, there was a cut-out for my commentator collegue to appear on webcam.",
        media: [
            "Adobe Photoshop"
        ],
        year: "2013"
    },
    {
        path: [
            "../img/digital/hoq-tdm.png"
        ],
        thumbnail: "../img/thumbnails/digital/hoq-tdm-thumb.jpg",
        title: "House of Quake TDM",
        description: "This was a holding screen we would show on the live video feed during breaks in content, accompanied by music. \n \nThis was a screenshot from Quake Live that I heavily retouched in Photoshop. I added in the projections of our logo and the HoQ logo onto the floor, depth of field effects in the hallways, the glowing discs and lighting on the \"jump pad\" in the center, and the blooming glow on the items scattered around.",
        media: [
            "Adobe Photoshop"
        ],
        year: "2013"
    },
    {
        path: [
            "../img/digital/hoq-tdm-2.png"
        ],
        thumbnail: "../img/thumbnails/digital/hoq-tdm-2-thumb.jpg",
        title: "House of Quake TDM #2",
        description: "Despite a dwindling community in 2012, Quake Live had several organizations leading tournaments on a regular basis that we had the pleasure of interacting with and supporting. House of Quake was one such organization, run by an extremely friendly Englishman. As with the other House of Quake image, I retouched a screenshot to add things like depth of field and lighting effects, superimposing the HoQ logo I created, and adding the cut out for my colleague's webcam.",
        media: [
            "Adobe Photoshop"
        ],
        year: "2013"
    },
    {
        path: [
            "../img/digital/tdmpickup-background.jpg"
        ],
        thumbnail: "../img/thumbnails/digital/tdmpickup-background-thumb.jpg",
        title: "#TDMPICKUP - Website Backdrop",
        description: "As an avid supporter of the TDMPickup community, I was given the opportunity to make a theme for their website, which was fairly simple in layout: it contained a page each of general information, community rules, and an IRC web app for connecting to the #TDMPickup chat room on IRC. During the Draft Tournament, a tournament bracket was also added to the website.",
        media: [
            "Adobe Photoshop"
        ],
        year: "2013"
    },
    {
        path: [
            "../img/digital/tdmpickup-draft.png"
        ],
        thumbnail: "../img/thumbnails/digital/tdmpickup-draft-thumb.jpg",
        title: "#TDMPICKUP - Draft Tournament Stream Overlay",
        description: "#TDMPickup is not a hashtag, it was an IRC Channel (essentially a chat room) name for a large, mainly European pickup-game community for the video game Quake Live. This community was supported by Level Up TV, as we preferred playing the \"Team Deathmatch\" (TDM) game mode of Quake Live ourselves. It was truly an interesting time of my life, where I interacted with people my age from over 20 different countries every day. \n \nThis was an overlay for our livestream on Twitch. My colleague would appear on webcam in the cut-out box.",
        media: [
            "Adobe Photoshop"
        ],
        year: "2013"
    },
    {
        path: [
            "../img/digital/tdmpickup-playmore.png"
        ],
        thumbnail: "../img/thumbnails/digital/tdmpickup-playmore-thumb.jpg",
        title: "#TDMPICKUP - Play More TDM",
        description: "This was a holding screen we would show on the live video feed during breaks in #TDMPICKUP related content, accompanied by music. The image is a screenshot from in-game Quake Live touched up and detailed in Photoshop.",
        media: [
            "Adobe Photoshop"
        ],
        year: "2013"
    },
    {
        path: [
            "../img/digital/tdmpickup-playmore-2.png"
        ],
        thumbnail: "../img/thumbnails/digital/tdmpickup-playmore-2-thumb.jpg",
        title: "#TDMPICKUP - Play More TDM #2",
        description: "This was a holding screen we would show on the live video feed during breaks in #TDMPICKUP related content, accompanied by music. The image is a screenshot from in-game Quake Live touched up and detailed in Photoshop.",
        media: [
            "Adobe Photoshop"
        ],
        year: "2013"
    }
];

module.exports = digital;