const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mara:test@cluster0.xyi9t.mongodb.net/twitter?retryWrites=true&w=majority')
    .then(() => console.log('CONNECT DB SUCCESS') )
    .catch(err => console.log(err));
