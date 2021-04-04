const mongoose = require('mongoose');

exports.clientPromise = mongoose.connect('mongodb+srv://mara:test@cluster0.xyi9t.mongodb.net/twitter?retryWrites=true', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () => console.log('CONNECT DB SUCCESS')).catch( err => console.log(err));
