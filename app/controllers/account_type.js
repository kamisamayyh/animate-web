/**
 * Created by SoRa on 2016/12/16 0016.
 */
var AccountType = require("../models/account_type");

exports.getList = function(req,res){
    AccountType.fetch(function(err,accountTypes){
        if(err){
            console.log(err);
        }
        res.json(accountTypes);
    })
}