/**
 * Created by SoRa on 2017/4/21 0021.
 */
var mongoose = require("mongoose");
var IndexSchema = require('../schemas/index');
var Index = mongoose.model('Index',IndexSchema);

module.exports = Index;