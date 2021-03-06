/**
 * Created by SoRa on 2016/11/27 0027.
 */
var _=require('underscore');
var Index = require("../app/controllers/index");
var User = require("../app/controllers/user");
var AccountType = require("../app/controllers/account_type");
var Article = require("../app/controllers/article");
var ArticleType = require("../app/controllers/article_type");
//var Comment = require("../app/controllers/comment");
//var Category = require("../app/controllers/category");

module.exports = function(app){

    app.get('/',Index.index);
    app.get('/index/article',Index.indexArticleType);
    app.post('/index/getArticleByTypeName',Index.getArticleByTypeName);
    app.get("/index/getArticles",Index.getArticles);
    app.post("/index/comment",Index.comment);
    app.post("/index/getCommentsById",Index.getCommentsById);
    app.get("/admin",Index.admin_index);

    app.post("/admin/index/save",Index.indexSave);
    app.get("/admin/index/get",Index.getIndex);

    app.get('/admin/account_type/getList',AccountType.getList);

    app.get("/admin/article_type/getList/",ArticleType.getList);

    app.post("/admin/login",User.login);

    app.post('/admin/user/save',User.save);
    app.get('/admin/user/list',User.list);
    app.post('/admin/user/findOne',User.findOne);
    app.post("/admin/user/del",User.del);

    app.post("/admin/article/save",Article.save);
    app.get("/admin/article/list",Article.list);
    app.post("/admin/article/del",Article.del);
    app.post("/admin/article/findOne",Article.findOne);

}
