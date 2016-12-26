/**
 * Created by SoRa on 2016/11/27 0027.
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var ArticleTypeSchema = new mongoose.Schema({
    name:String,
    articles:[{type:ObjectId,fer:"Article"}],
    meta:{
        createAt:{
            type:Date,
            default:Date.now()
        },
        updateAt:{
            type:Date,
            default:Date.now()
        }

    }
});
ArticleTypeSchema.pre('save',function(next){

    if(this.isNew){
        this.meta.createAt = this.meta.updateAt = Date.now();
    }
    else{
        this.meta.update = Date.now();
    }

    next();
})
ArticleTypeSchema.statics = {
    fetch: function(cb){
        return this
            .find({})
            .sort('meta.updateAt')
            .exec(cb)
    },
    findById: function(id,cb){
        return this
            .findOne({_id:id})
            .exec(cb)
    }
}

module.exports = ArticleTypeSchema;