//在a里写一个函数
/*function add(a,b){
    return a+b;
}*/
//改进：用requirejs方法
define(["isArray"],function (isArray) {
    function sortArr(arr) {
        if(isArray(arr)==1){
            return arr.sort(function (a,b) {
                return a-b;
            });
        }
        else{
            return isArray(arr);
        }
    }
    return sortArr;
});