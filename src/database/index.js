const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_HOST || 'mongodb://localhost/crudaula');
mongoose.Promise = global.Promise;

module.exports = mongoose;