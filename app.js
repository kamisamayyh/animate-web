/**
 * Created by SoRa on 2016/11/26 0026.
 */
var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var path = require('path');
var mongoose = require('mongoose');
var mongoStore = require('connect-mongo')(session);
var logger = require('morgan');
var ejs = require('ejs');
var fs = require('fs');
var port = process.env.PORT || 7086;
var app = express();
var dbUrl = "mongodb://localhost:27017/animate";

mongoose.Promise = global.Promise;
mongoose.connect(dbUrl);

//var models_path = __dirname +"/app/models";
//var walk = function(path){
//    fs
//        .readdirSync(path)
//        .forEach(function(file){
//            var newPath =path+'/'+file;
//            var stat = fs.statSync(newPath);
//            if(stat.isFile()){
//                if(/(.*)\.(js|coffee)/.test(file)){
//                    require(newPath)
//                }
//            }
//            else if(stat.isDirectory){
//                walk(newPath)
//            }
//        })
//}
//walk(models_path);
//
app.engine('html',ejs.__express);
app.use(require('body-parser').urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));//静态文件配置的目录
app.use(express.static(path.join(__dirname, 'app/views')));//配置html文件
app.use(session({
    secret: 'imooc',
    store: new mongoStore({
        url:dbUrl,
        collection : 'sessions'
    }),
    resave: false,

    saveUninitialized: true

}));
app.use(require('connect-multiparty')());
app.use(cookieParser());
app.locals.moment = require('moment');

app.set('views','./app/views');
app.set('view engine','html');

app.listen(port);
//if ('development' === app.get('env')){//配置debug 调试
//    app.set('showStackError',true);
//    app.use(logger(':method :url :status'));
//    app.locals.pretty = true;
//    mongoose.set('debug',true);
//}

require('./config/routes')(app);
console.log('imooc started on port'+ port);

