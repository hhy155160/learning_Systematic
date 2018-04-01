/**
 * Created by Administrator on 2018/4/1.
 */
function delCookie(key) {
    var date=new Date();
    date.setDate(date.getDate()-100);
    document.cookie = key+"=an;expires="+date.toUTCString();
}