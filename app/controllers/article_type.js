/**
 * Created by SoRa on 2017/4/10 0010.
 */
var ArticleType = require("../models/article_type");

exports.getList = function(req,res){
    ArticleType.fetch(function(err,articleTypes){
        if(err){
            console.log(err);
        }
        res.json(articleTypes);
    })

}