const { app } = require('../app');
const session = require('express-session');
const mongose = require("mongoose");
const MongoStore = require('connect-mongo')(session);

app.use(session({
    secret: 'je suis un secret',
    resave: false,
    saveUninitialized:false,
    cookie:{
        httpOnly:false,
        maxAge:1000* 60 *60 * 24 * 14
    },
    store: new MongoStore({
        mongooseConnection: mongose.connection,
        ttl: 60* 60 * 24 * 14
    })
}))