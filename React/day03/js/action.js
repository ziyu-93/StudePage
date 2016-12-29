/**
 * Created by Administrator on 2016/12/28.
 */

var Action = {
    //订阅
    subscriber:function (name,fn) {
        if(this[name]){
            console.log(name+"is defined");
        }//融挫
        this[name] = fn;
    },
    //发布
    publish:function (name,data) {
        if(!this[name]){
            console.log(name+"Undefined");
        }
        this[name](data);
    }
}