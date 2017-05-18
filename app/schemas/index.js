/**
 * Created by SoRa on 2017/4/21 0021.
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var IndexSchema = new mongoose.Schema({
    greeting:String,
    images1:[{name:String,src:String,size:String}],
    images2:[{name:String,src:String,size:String}],
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
IndexSchema.pre('save',function(next){

    if(this.isNew){
        this.meta.createAt = this.meta.updateAt = Date.now();
    }
    else{
        this.meta.update = Date.now();
    }

    next();
});
IndexSchema.statics = {
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

module.exports = IndexSchema;