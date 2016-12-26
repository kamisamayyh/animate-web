/**
 * Created by SoRa on 2016/11/27 0027.
 */
var mongoose = require("mongoose");
var ArticleSchema = require('../schemas/article');
var Article = mongoose.model('Article',ArticleSchema);

module.exports = Article;