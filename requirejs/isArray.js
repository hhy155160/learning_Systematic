/**
 * Created by Administrator on 2018/4/10.
 */
define(function () {
    function isArray(arr) {
        if(arr.constructor == Array&&arr instanceof Array){
            return 1;
        }
        else{
            return "不是数组";
        }
    }
    return isArray;
});