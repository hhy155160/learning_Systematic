/**
 * Created by Administrator on 2018/4/1.
 */
function getCookie(key){
    var arr = document.cookie().split(",");
    for(var i = 0;i<arr.length;i++){
        var temp = arr[i].split("=");
        if(temp[0].trim()===key){
            return temp[1];
        }
    }
}