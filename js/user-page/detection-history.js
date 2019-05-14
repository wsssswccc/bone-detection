//255.255/his_bone_quality
getData('https://easy-mock.com/mock/5c5414c1deae1e58bc943374/BnoeDetection/history-detection-result')
    .then(draft);
//绘图的回调函数
function draft(response) {
    require.config({
        paths: {
            echarts: '../../js/lib/dist'
        }
    });
    require(
        [
            'echarts',
            'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
        ],
        function (ec) {
            // 基于准备好的dom，初始化echarts图表
            var myChart = ec.init(document.getElementById('chart'));

            var option = {
                tooltip: {
                    show: true
                },
                legend: {
                    data: ['骨质质量']
                },
                xAxis: [{
                    type: 'category',
                    data: response.data.bone_quality.map((element,index)=>index+1)
                }],
                yAxis: [{
                    type: 'value'
                }],
                series: [{
                    "name": "骨质质量",
                    "type": "line",
                    "data": response.data.bone_quality
                }]
            };

            // 为echarts对象加载数据 
            myChart.setOption(option);
        }
    );
    showHistory(response.data.bone_quality);
}
//显示历史记录
function showHistory(quality){
    let HTML = '';
    let history = document.getElementById('history');
    for(let i = 0;i<quality.length;i++){
        HTML += `<tr>
                    <td>${i+1}</td>
                    <td>${quality[i]}</td>
                    <td><div class="details">查看详情</div></td>
                </tr>`;

    }
    history.innerHTML += HTML;
}


