import{getData,handleError,handleData}from '../module/ajax';
//getData('https://www.easy-mock.com/mock/5c5414c1deae1e58bc943374/BnoeDetection/history-detection-time#!method=get')
 //       .then(data => {handleData(data)});

//console.log(getData);
let input = document.getElementsByTagName('input');
let submit = document.getElementsByClassName('submit')[0];
for (let i = 0; i < 11; i++) {
    (function () {
        input[i].addEventListener("blur",function(){
            check();
        },false);
    }(i))
}
let status = "FAILED";
function check() {
    let num = 0;
    for (let i = 0; i < 11; i++) {
        if (input[i].value == "") {
            num++;
        }
    }
    if (num >= 4) {
        submit.style.backgroundColor = "grey";
        status = "FAILED";
    } else {
        submit.style.backgroundColor = "#03a9f4";
        status = "SUCCESS";
    }
}

function decide() {
    if (status == "FAILED") {
        alert("请输入必要信息！");
        return false;
    } else if (status == "SUCCESS") {
        alert("提交成功！");
        return true;
    }
}

