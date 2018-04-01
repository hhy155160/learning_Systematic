/**
 * Created by Administrator on 2018/4/1.
 */
function addCookie(key,val,expires){
    var str = key+"="+val;
    if(expires!=undefined){
        var date = new Date();
        date.setDate(date.getDate()+expires);
        str = str + ";expires="+date.toUTCString();

    }
    document.cookie=str;
}