const mongoose = require('mongoose');

const RoleSchema = mongoose.Schema({
        _id:Number,
        role_name:String
});

const Role = mongoose.model("roles", RoleSchema);

module.exports = Role;