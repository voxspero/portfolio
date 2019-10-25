// {} - REQUIREMENTS / DECLARATIONS

const   express             = require("express"),
        app                 = express(),
        session             = require("express-session"),
        bodyParser          = require("body-parser"),
        // methodOverride  = require("method-override"),
        mongoose            = require("mongoose"),
        // passport            = require("passport"),
        // LocalStrategy       = require("passport-local"),
        // Illustration        = require("./models/illustration"),
        // Image               = require("./models/image"),
        // Photo               = require("./models/photo"),
        // Project             = require("./models/project"),
        // WebApp              = require("./models/webapp"),
        // User            = require("./models/user"),
        seedDB              = require("./seeds"),
        mongooseOptions     = {
                                useNewUrlParser: true,
                                useUnifiedTopology: true,
                                useFindAndModify: false
                            },
        dbUrl               = process.env.DATABASEURL || "mongodb://localhost/portfolio";

// ROUTES

const   digitalRoutes       = require("./routes/digital"),
        illustrationRoutes  = require("./routes/illustration"),
        photoRoutes         = require("./routes/photography"),
        projectRoutes       = require("./routes/projects"),
        webappRoutes        = require("./routes/webapps");
        // authRoutes      = require("./routes/auth");

// APP CONFIG

mongoose.connect(dbUrl, mongooseOptions, function(){
    console.log("Connected to DB!");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
seedDB();

// ROUTES

app.use("/digital", digitalRoutes);
app.use("/illustration", illustrationRoutes);
app.use("/photography", photoRoutes);
app.use("/projects", projectRoutes);
app.use("/webapps", webappRoutes);

// INDEX (LANDING)

app.get("/", function(req,res){
    res.render("landing");
});

// SERVER

app.listen(process.env.PORT || 3000, function(){
    console.log("Listen server started.");
});
