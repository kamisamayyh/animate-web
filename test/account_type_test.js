/**
 * Created by SoRa on 2016/12/11 0011.
 */
var AccountType = require("../app/models/account_type");
var dbUrl = "mongodb://localhost:27017/animate";
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(dbUrl);
var test ={
    name:"超级管理员",
    level:50
};
var account_type = new AccountType(test);

account_type.save(function(err,account_type){
    if(err){
        console.log(err);
    }
    console.log(account_type);
});