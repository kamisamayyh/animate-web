/**
 * Created by SoRa on 2016/11/26 0026.
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var ArticleSchema = new mongoose.Schema({
    title:String,
    image:String,
    content:String,
    article_type: {
        type:ObjectId,
        ref:'ArticleType'
    },
    author: {
        type:ObjectId,
        ref:'User'
    },
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
ArticleSchema.pre('save',function(next){

    if(this.isNew){
        this.meta.createAt = this.meta.updateAt = Date.now();
    }
    else{
        this.meta.update = Date.now();
    }

    next();
});
ArticleSchema.statics = {
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
};

module.exports = ArticleSchema;