/**
 * Created by SoRa on 2016/11/27 0027.
 */
var mongoose = require("mongoose");
var AccountTypeSchema = require('../schemas/account_type');
var AccountType = mongoose.model('AccountType',AccountTypeSchema);

module.exports = AccountType;