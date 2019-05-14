/*
 *author：任崇伟
 *discrption：该模块用于处理登录注册页面表单的验证，向服务器提交表单数据
 */
//表单元素
let form = document.getElementsByClassName('form')[0];
//图片验证码输入框
let verifyImg = document.getElementsByClassName('verify')[0];
//密码输入框
let password = document.getElementsByClassName('password')[0];
//验证码输入框
let verification = document.getElementsByClassName('verification')[0];
//数据输入框
let input = document.getElementsByTagName('input');
//提交按钮
//let submit = document.getElementsByClassName('submit')[0];
//用于记录表单验证的状态
let status = 'FALSE';
/* 鼠标点击加载验证码 */
verifyImg.addEventListener('click', function () {
    verifyImg.src = 'http://192.168.43.136:5000/verify_code';
}, false);
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
// if (document.title == '注册') {
//     //确认密码输入框
//     let confirmPassword = document.getElementsByClassName('confirm-password')[0];
//     //手机号输入框
//     let phone = document.getElementsByClassName('phone')[0];
//     checkPhone(phone);
// }
// //通过ajax检查注册的手机是否被注册过
// function checkPhone(phone) {
//     phone.addEventListener('blur', function () {
//         getData('http://192.168.43.136:5000/login', {
//                 method: 'POST',
//                 mode: 'cors',
//                 credentials: 'include',
//                 headers: {
//                     'Content-Type': 'application/x-www-form-urlencoded'
//                 },
//                 body: JSON.stringify({phone_number: phone.value})
//             })
//             .then((response) => {
//                 console.log(response.msg);
//                 if (response.msg == '登录成功') {
//                     window.location.href = "bone-detection.html";
//                 }
//             }, error => handleError(error));
//     }, false);
// }
/* 提交表单信息 */
submit.addEventListener('click', postData, false);

function postData() {
    //判断当前页面是注册页面和登录页面 提交不同的 json 格式
    if (document.title == '登录') {
        var data = {
            phone_number: input[0].value,
            passwd: input[1].value,
            verify_code: input[2].value
        }
    } else if (document.title == '注册') {
        var data = {
            username: input[0].value,
            phone: input[1].value,
            email: input[2].value,
            password: input[3].value,
            confirmPassword: input[4].value,
            verification: input[5].value
        }
    }
    //http://192.168.43.136:5000/login
    // getData('http://192.168.43.136:5000/login', {
    //         method: 'POST',
    //         mode: 'cors',
    //         credentials: 'include',
    //         headers: {
    //             'Content-Type': "application/x-www-form-urlencoded;charset=utf-8"
    //         },
    //         body: JSON.stringify(data)
    //     })
    //     .then((response) => {
    //         console.log(response.msg);
    //         if (response.msg == '登录成功') {
    //             window.location.href = "bone-detection.html";
    //         }
    //     }, error => handleError(error));
}

axios.post('http://192.168.43.136:5000/login', {
    username: input[0].value,
    phone: input[1].value,
    email: input[2].value,
    password: input[3].value,
    confirmPassword: input[4].value,
    verification: input[5].value
})
    .then((res) => {
        console.log(res);
    })