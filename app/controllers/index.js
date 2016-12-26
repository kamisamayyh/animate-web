/**
 * Created by SoRa on 2016/11/27 0027.
 */
var Article = require("../models/article");
var ArticleType = require("../models/article_type");

exports.index = function(req,res){
    res.render('index',{
    });
}
exports.admin_index = function(req,res){
    res.render('admin/index',{
    });
}