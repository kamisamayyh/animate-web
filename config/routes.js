/**
 * Created by SoRa on 2016/11/27 0027.
 */
var _=require('underscore');
var Index = require("../app/controllers/index");
var User = require("../app/controllers/user");
var AccountType = require("../app/controllers/account_type");
//var Comment = require("../app/controllers/comment");
//var Category = require("../app/controllers/category");

module.exports = function(app){

    app.get('/',Index.index);
    app.get("/admin",Index.admin_index);

    app.get('/admin/account_type/getList',AccountType.getList);

    app.post('/admin/user/save',User.save);
    app.get('/admin/user/list',User.list);
    app.post('/admin/user/findOne',User.findOne);


}
