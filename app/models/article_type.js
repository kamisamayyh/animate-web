/**
 * Created by SoRa on 2016/11/27 0027.
 */
var mongoose = require("mongoose");
var ArticleTypeSchema = require('../schemas/article_type');
var ArticleType = mongoose.model('ArticleType',ArticleTypeSchema);

module.exports = ArticleType;