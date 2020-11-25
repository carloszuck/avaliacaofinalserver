const mongoose = require('moongose');

mongoose.connect(process.env.MONGODB__HOST || 'mongodb://localhost/crudaula')
Mongoose.Promise = global.Promise;

module.exports = mongoose;