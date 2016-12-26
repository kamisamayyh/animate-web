/**
 * Created by SoRa on 2016/11/28 0028.
 */
app.service('ConfigService',function(){
    this.returnConfigHttp = function(){
        return "http://localhost:7086/";
    }
});