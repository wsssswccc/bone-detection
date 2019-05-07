//侧边导航栏模块
(function () {
    const sideBar = function () {
        /*
            <div class="logo">BoneDetection</div>
            <ul class="nav">
                <li>骨质质量检测</li>
                <li>历史信息<img src="../../resource/img/plus.png" alt="" id="cutover"></li>
                <li class="child">历史骨质质量信息</li>
                <li class="child">历史预测次数统计</li>
                <li class="child">历史登录信息</li>
                <li class="child">历史登录次数统计</li>
            </ul>
        */
    };
    //将sideBar函数转换成HTML写入页面
    const sideBarHTML = sideBar.toString().replace(/^[^\/]+\/\*!?/, '').replace(/\*\/[^\/]+$/, '');
    document.write(sideBarHTML);
})();
//导航栏状态切换
let cutover = document.getElementById('cutover');
let child = document.getElementsByClassName('child');
let list = document.getElementsByClassName("nav")[0].children;
let nav = document.getElementsByClassName("nav")[0];
//记录切换图片的状态
let status = "PLUS";
cutover.addEventListener("click",function(){
    if (status == "PLUS") {
        cutover.src = '../../resource/img/minus.png';
        status = "MINUS";
        child[0].style.visibility = 'visible';
        child[1].style.visibility = 'visible';
        child[2].style.visibility = 'visible';
        child[3].style.visibility = 'visible';
        setPage();
    } else {
        cutover.src = '../../resource/img/plus.png';
        status = "PLUS";
        child[0].style.visibility = 'hidden';
        child[1].style.visibility = 'hidden';
        child[2].style.visibility = 'hidden';
        child[3].style.visibility = 'hidden';
    }
},false);
list[0].addEventListener("click",function(){
    window.location.href='./bone-detection.html';
},false);
function setPage(){
    nav.addEventListener("click",function(event){
        switch(event.target.innerHTML)
        {
            case "历史骨质质量信息":window.location.href='./detection-history.html';break;
            case "历史预测次数统计":window.location.href='./detection-number.html';break;
            case "历史登录信息":window.location.href='./login-history.html';break;
            case "历史登录次数统计":window.location.href='./login-number.html';break;
        }
    },false);
}
