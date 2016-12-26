/**
 * Created by SoRa on 2016/11/26 0026.
 */
var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var SALT_WORK_FACTOR = 10;
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var UserSchema = new mongoose.Schema({
    name:String,
    password:String,
    head_portrait:String,
    nickname:String,
    email:String,
    account_type: {
        type:ObjectId,
        ref:'AccountType'
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
UserSchema.pre('save',function(next){
    var user = this;
    if(this.isNew){
        this.meta.createAt = this.meta.updateAt = Date.now();
    }
    else{
        this.meta.update = Date.now();
    }
    var salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);
    var hash = bcrypt.hashSync(user.password,salt);
    user.password = hash;
    next();
});
UserSchema.methods={
    comparePassword :function(_password,cb){
        bcrypt.compare(_password,this.password,function(err,isMatch){
            if(err) return cb(err);
            cb(null,isMatch);
        });
        //cb(null,bcrypt.compareSync(_password,this.password));
    }
}
UserSchema.statics = {
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

module.exports = UserSchema;