/*
 *author：任崇伟
 *discrption：该模块用于处理登录注册页面表单的验证，向服务器提交表单数据
*/
//表单元素
let form = document.getElementsByClassName('form')[0];
//图片验证码元素
let verifyImg = document.getElementsByClassName('verify')[0];
//密码元素
let password = document.getElementsByClassName('password')[0];
//确认密码元素
let confirmPassword = document.getElementsByClassName('confirm-password')[0];
//验证码输入框
let verification = document.getElementsByClassName('verification')[0];
//数据输入框
let input = document.getElementsByTagName('input');
//提交按钮
let submit = document.getElementsByClassName('submit')[0];
//用于记录表单验证的状态
let status = 'FALSE';

/* 加载验证码图片 */
function loadVerifyImg() {
    //255.255/verify_code
    getData('https://www.easy-mock.com/mock/5c5414c1deae1e58bc943374/BnoeDetection/verify#!method=get')
        .then(draft, error => handleError(error));
}
loadVerifyImg();
function draft(url) {
    verifyImg.src = url.data;
}
/*点击鼠标切换验证码*/
verifyImg.addEventListener('click', loadVerifyImg, false);
/*鼠标失去焦点验证表单（功能尚未实现 2019.5.14）*/
// for (let i = 0; i < input.length; i++) {
//     (function () {
//         input[i].addEventListener("blur", function () {
//             check();
//         }, false);
//     }(i))
// }
// function check() {
//     if (confirmPassword) {
//         if (password.value != '' && confirmPassword.value != '') {
//             if (password.value != confirmPassword.value) {
//                 alert('两次密码输入不一致');
//             }
//         }
//     }

// }

/* 提交表单信息 */
submit.addEventListener('click',postData,false);
function postData() {
    if (!confirmPassword) {
        var data = {
            phone: input[0].value,
            password: input[1].value,
            verification: input[2].value
        };
    } else {
        var data = {
            username: input[0].value,
            phone: input[1].value,
            email: input[2].value,
            password: input[3].value,
            confirmPassword: input[4].value,
            verification: input[5].value
        }
    }
    getData('https://easy-mock.com/mock/5c5414c1deae1e58bc943374/BnoeDetection/history-detection-time',{
        body: JSON.stringify(data), // must match 'Content-Type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit
        headers: {
          'user-agent': 'Mozilla/4.0 MDN Example',
          'content-type': 'application/json'
        },
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // *client, no-referrer
      })
        .then((response) => {
            console.log(response);
            if(1){
                window.location.href="bone-detection.html";
            }
        }, error => handleError(error));
}