const mongoose = require('../../database');

const UserSchema = new mongoose.Schema({
    firstname: { type: String, required: true},
    lastname: { type: String, required: true},
    age: { type: Number, required: true},
    email: { type: String, required: true},
    address: { type: String, required: false},
    createdAt: { type: Date, default: Date.now}
});

const User = mongoose.model('User', UserSchema);

module.exports = User;