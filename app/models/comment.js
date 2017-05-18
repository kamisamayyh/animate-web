/**
 * Created by SoRa on 2017/4/30 0030.
 */
var mongoose = require("mongoose");
var CommentSchema = require('../schemas/comment');
var Comment = mongoose.model('Comment',CommentSchema);

module.exports = Comment;