/**
 * Created by SoRa on 2016/11/28 0028.
 */
var Article = require("../models/article");
var ArticleType = require("../models/article_type");
var moment = require("moment");



exports.findOne = function(req,res){
    var body ='';
    req.on('data',function(chunk){
        body+=chunk;
    });
    req.on('end',function(){
        var _id = JSON.parse(body)._id;
        console.log(_id)
        Article.findOne({_id:_id})
            .populate({path:'article_type author'})
            .exec(function(err,article){
                if(err){
                    console.log(err);
                }
                res.json({"article":article});
            });
    })
};

exports.del = function(req,res){
    var body ='';
    req.on('data',function(chunk){
        body+=chunk;
    });
    req.on('end',function(){
        var _id = JSON.parse(body)._id;
        if(_id){
            Article.remove({_id:_id},function(err,article){
                if(err){
                    console.log(err);
                    res.json({flag:false,msg:"操作失败！"});
                }
                else{
                    res.json({flag:true,msg:"操作成功！"});
                }
            })
        }

    })
};

exports.list = function(req,res){
    Article.find({})
        .populate({path:'article_type author'})
        .exec(function(err,articles){
            var _articles = JSON.stringify(articles);
            articles = JSON.parse(_articles);
            for(var i=0;i<articles.length;i++){
                articles[i]["time"]=moment(articles[i].meta.updateAt).format('YYYY/MM/DD');
            }
            res.json({"data":articles});
        })
};

exports.save = function(req,res){
    var body ='';
    req.on('data',function(chunk){
        body+=chunk;
    });
    req.on('end',function(){
        try{
            var __article = JSON.parse(body);
            var _article = new Article(__article.article);
            if(!__article.article.article_type._id){
                var _article_type = new ArticleType(__article.article.article_type);
                _article_type.save(function(err,article_type){
                    if(err){
                        console.log(err);
                    }
                    _article.article_type = article_type._id;
                    __article.article.article_type = article_type;
                    articleSave(__article,_article,res);
                });
            }
            else{
                articleSave(__article,_article,res);
            }
        }
        catch (err){
            res.json({flag:false,msg:err});
        }
    })
};
function articleSave(__article,_article,res){

    if(__article.article._id){
        Article.update({_id:__article.article._id},{
            title:__article.article.title,
            image:__article.article.image,
            content:__article.article.content,
            article_type:__article.article.article_type._id
            //author:__article.article.author
        },function(err){
            if(err){
                console.log(err);
            }
            else{
                res.json({flag:true,msg:"文章更改成功"});
            }
        });
    }
    else{
        console.log(_article.author);
        _article.save(function(err,article){
            ArticleType.findById(__article.article.article_type._id,function(err,articleType){
                articleType.articles.push(_article._id);
                articleType.save(function(err,articleType){
                    if(err){
                        console.log(err);
                    }
                });
            });
            res.json({flag:true,msg:"文章修改成功"});
            if(err){
                console.log(err);
            }
        });
    }
}

