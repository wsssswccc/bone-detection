//侧边导航栏模块
(function () {
    const sideBar = function () {
        /*
            <div class="logo">BoneDetection</div>
            <ul class="nav">
                <li>医生账户导入</li>
                <li>系统使用信息</li>
                <li>修改建议</li>
                <li>用户预测信息<img src="../../resource/img/plus.png" alt="" id="cutover"></li>
                <li class="child">平均骨质质量评估</li>
                <li class="child">各因素分析</li>               
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
let imgStatus = "PLUS";
cutover.addEventListener("click",function(){
    if (imgStatus == "PLUS") {
        cutover.src = '../../resource/img/minus.png';
        imgStatus = "MINUS";     
        Array.prototype.forEach.call(child,(element)=>{
            element.style.visibility = 'visible';
        });
        setPage();
    } else {
        cutover.src = '../../resource/img/plus.png';
        imgStatus = "PLUS";
        Array.prototype.forEach.call(child,(element)=>{
            element.style.visibility = 'hidden';
        });
    }
},false);
//页面的切换
list[0].addEventListener("click",function(){
    window.location.href='./doctors.html';
},false);
list[1].addEventListener("click",function(){
    window.location.href='./system_use.html';
},false);
list[2].addEventListener("click",function(){
    window.location.href='./modify_suggestion.html';
},false);
function setPage(){
    nav.addEventListener("click",function(event){
        switch(event.target.innerHTML)
        {
            case "平均骨质质量评估":window.location.href='./bone_analysis.html';break;
            case "各因素分析":window.location.href='./factor_analysis.html';break;
        }
    },false);
}
