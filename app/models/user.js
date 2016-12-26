/**
 * Created by SoRa on 2016/11/27 0027.
 */
var mongoose = require("mongoose");
var UserSchema = require('../schemas/user');
var User = mongoose.model('User',UserSchema);

module.exports = User;