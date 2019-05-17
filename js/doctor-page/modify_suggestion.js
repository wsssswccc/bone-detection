
// //提交给后台
// Submit(){

// }

getData('https://easy-mock.com/mock/5c5414c1deae1e58bc943374/BnoeDetection/modify')
    .then(draft, error => handleError(error));
//回调函数
function draft(response) {    
    showLimit(response.data.limit);
    showAdvice(response.data.suggestions);
}
//用于显示概率区间的函数
function showLimit(limit){
    var limits = document.getElementsByClassName('limit');
    limits[0].value = limit.s1;
    limits[1].value = limit.s2;
    limits[2].value = limit.s2;
    limits[3].value = limit.s3;
    limits[4].value = limit.s3;
    limits[5].value = limit.s4;
    limits[6].value = limit.s4;
    limits[7].value = limit.s5;
}
function showAdvice(suggestions){
    var item2 = document.getElementsByClassName('advice');
    item2[0].value = suggestions.light;
    item2[1].value = suggestions.moderate;
    item2[2].value = suggestions.severe;
    item2[3].value = suggestions.danger;
}