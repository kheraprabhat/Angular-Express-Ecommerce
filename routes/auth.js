module.exports = function(app) {
    var passport = require("passport");
    var mongoose = require("mongoose");
    var LocalStrategy = require("passport-local").Strategy;
    var session = require("express-session");
    var MongoStore = require("connect-mongo")(session);

    var User = require("../models/user");

    app.use(session({
        store: new MongoStore({
            url: "mongodb://localhost/timberland"
        }),
        secret: "codetutorialsecret",
        resave: true,
        saveUninitialized: true
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(new LocalStrategy(function(username, password, done) {
        User.findOne({
            username: username
        }, function(err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, {
                    alert: "Incorrect username."
                });
            }
            if (user.password != password) {
                return done(null, false, {
                    alert: "Incorrect password."
                });
            }
            return done(null, user);
        });
    }));

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    function isAuthenticated(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.json({
            status: false
        });
    }

    app.post("/auth/login", passport.authenticate("local"), function(req, res) {
        res.json({
            status: true
        });
    });

    app.get("/auth/currentuser", isAuthenticated, function(req, res) {
        var details = {
            status: true,
            email: req.user.email,
            lastname: req.user.lastname,
            firstname: req.user.firstname,
            username: req.user.username
        };
        res.json(details);
    });

    app.post("/auth/signup", function(req, res) {
        var u = new User;
        u.username = req.body.email;
        u.password = req.body.password;
        u.lastname = req.body.lastname;
        u.firstname = req.body.firstname;
        u.email = req.body.email;
        u.save(function(err) {
            if (err) {
                res.json({
                    status: false,
                    "alert": "Registration error"
                });
            } else {
                res.json({
                    status: true,
                    "alert": "Registration success"
                });
            }
        });
    });

    app.get("/auth/logout", function(req, res) {
        console.log("logout");
        req.logout();
        res.send(200);
    });
};