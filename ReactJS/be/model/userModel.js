const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const UserSchema = new mongoose.Schema({
    _id: Number,
    username: String,
    hash_password: String,
    user_create_at: Date,
    user_create_by: String,
    user_update_at: Date,
    user_update_by: String,
    role_id: Number
});

UserSchema.plugin(AutoIncrement, { id: 'user_seq', inc_field: '_id'});

const User = mongoose.model('users', UserSchema);

module.exports = User;
