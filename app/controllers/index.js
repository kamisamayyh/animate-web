/**
 * Created by SoRa on 2016/11/27 0027.
 */
var Article = require("../models/article");
var ArticleType = require("../models/article_type");
var Index = require("../models/index");
var Comment = require("../models/comment");

exports.index = function(req,res){
    res.render('index',{

    });
};

exports.getCommentsById = function(req,res){
    var body ='';
    req.on('data',function(chunk){
        body+=chunk;
    });
    req.on('end',function() {
        try{
            var json = JSON.parse(body);

            Comment.find({article:json._id}).limit(json.limit).skip(json.skip)
                .exec(function(err,comments){
                    if(err){
                        console.log(err)
                    }else{
                        res.json({flag:true,comments:comments});
                    }

                })

        }
        catch (e){
        }
    });
}

exports.comment = function(req,res){
    var body ='';
    req.on('data',function(chunk){
        body+=chunk;
    });
    req.on('end',function() {
        try {
            var _comment = JSON.parse(body).comment;
            var comment = new Comment(_comment);
            comment.save(function(err,comment){
                if(err){
                    console.log(err);
                }
                else{
                    res.json({flag:true,msg:"评论成功！"});
                }
            });
        }
        catch(e){
            console.log(e);
        }

    });
}

exports.getArticles = function(req,res){
    Article.find({})
        .exec(function(err,articles){
            res.json({flag:true,data:articles});
        })
}

exports.getArticleByTypeName = function(req,res){
    var body ='';
    req.on('data',function(chunk){
        body+=chunk;
    });
    req.on('end',function() {
        try{
            var json = JSON.parse(body);
            ArticleType.findOne({"name":json.name})
                .exec(function(err,articleType){
                    if(err){

                    }
                    else{
                        Article.find({"article_type":articleType._id})
                            .exec(function(err,articles){
                                res.json({flag:true,data:articles});
                            })
                    }
                })
        }
        catch (e){

        }
    });
}

exports.getIndex = function(req,res){
    Index.find({})
        .exec(function(err,index){
            if(err){
                console.log(err);
            }
            else{
                res.json({flag:true,data:index[0]});
            }
        })
};

exports.indexSave = function(req,res){
    var body ='';
    req.on('data',function(chunk){
        body+=chunk;
    });
    req.on('end',function(){
        try{
            var _index = JSON.parse(body);
            var index_ = new Index(_index);
            Index.find({})
                .exec(function(err,index){
                    if(index[0]){

                        Index.update({_id:index[0]._id},{
                            greeting:_index.greeting,
                            images1:_index.images1,
                            images2:_index.images2
                        },function(err){
                            if(err){
                                console.log(err);
                            }
                            else{
                                res.json({flag:true,msg:"页面更改成功"});
                            }
                        });
                    }
                    else{
                        index_.save(function(err,index){
                            if(err){
                                console.log(err);
                            }
                            else{
                                res.json({flag:true,msg:"用户更改成功"});
                            }
                        });
                    }
                });
        }
        catch (e){
        }
    });
};

exports.indexArticleType = function(req,res){
    var json = {};
    var animate = {};
    json.content=new Array();
    ArticleType.findOne({name:'日本动漫'})
        .exec(function(err,articleType){
            animate={};
            animate.type= articleType;
        })
        .then(function() {
            Article.find({article_type: animate.type._id})
                .sort({'_id': -1})
                .limit(3)
                .exec(function (err, articles) {
                    animate.animates = articles;
                    json.content.push(animate);
                })
                .then(function () {
                    ArticleType.findOne({name: '国产动漫'})
                        .exec(function (err, articleType) {
                            animate ={};
                            animate.type = articleType;
                        })
                        .then(function () {
                            if(!animate.type){
                                res.json({"data": json});
                                return;
                            }
                            Article.find({article_type: animate.type._id})
                                .sort({'_id': -1})
                                .limit(3)
                                .exec(function (err, articles) {
                                    animate.animates = articles;
                                    json.content.push(animate);
                                })
                                .then(function () {
                                    res.json({"data": json});
                                });
                        })

                })
        })
};

exports.admin_index = function(req,res){
    res.render('admin/index',{
    });
};