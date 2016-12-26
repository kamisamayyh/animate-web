/**
 * Created by SoRa on 2016/11/28 0028.
 */
var User = require("../models/user");
var AccountType = require("../models/account_type");
var _=require('underscore');
var moment = require("moment");
exports.save = function(req,res){
    var body ='';
    req.on('data',function(chunk){
        body+=chunk;
    });
    req.on('end',function(){
        try{
            var __user = JSON.parse(body);
            var _user = new User(__user);
            if(_user._id){
                User.update({_id:_user._id},{
                    name:_user.name,
                    password:_user.password,
                    head_portrait:_user.head_portrait,
                    nickname:_user.nickname,
                    email:_user.email,
                    account_type:_user.account_type
                },function(err){
                    if(err){
                        console.log(err);
                    }
                    else{
                        res.json({flag:true,msg:"用户更改成功"});
                    }


                })
//                User.findById(_user._id,function(err,user){
////                    var user_ = JSON.parse(JSON.stringify(user));
//                    user = _user;
//                    user.save(function(err,user){
//                        if(err){
//                            console.log(err);
//                        }
//                        console.log(user);
//                        res.json({flag:true,msg:"用户更改成功"});
//                    })
//                    if(!_.isEqual(user,_user)){
//                        _user.save(function(err,user){
//                            console.log(user);
//                            if(err){
//                                console.log(err);
//                            }
//                        })
//                    }
//                });
            }
            else{
                _user.save(function(err,user){
                    AccountType.findById(user.account_type,function(err,accountType){
                        accountType.users.push(_user._id);
                        accountType.save(function(err,accountType){
                            res.json({flag:true,msg:"用户更改成功"});
                        })
                    })
                    if(err){
                        console.log(err);
                    }
                });
            }

        }
        catch (err){
            res.json({flag:false,msg:err});
        }
    })
}

exports.list = function(req,res){
    User.find({})
        .populate({path:'account_type'})
        .exec(function(err,users){
            var _users = JSON.stringify(users);
            users = JSON.parse(_users);
            for(var i=0;i<users.length;i++){
                users[i]["time"]=moment(users[i].meta.updateAt).format('YYYY/MM/DD');
            }
            res.json({"data":users});
        })
}

exports.findOne = function(req,res){
    var body ='';
    req.on('data',function(chunk){
        body+=chunk;
    });
    req.on('end',function(){
        var _id = JSON.parse(body)._id;

        User.findById(_id,function(err,user){
            console.log(user);
            if(err){
                console.log(err);
            }
            res.json({"user":user});
        })
    })

}