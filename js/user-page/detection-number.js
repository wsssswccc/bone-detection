//get: /predict_count
getData('https://www.easy-mock.com/mock/5c5414c1deae1e58bc943374/BnoeDetection/history-detection-time#!method=get')
    .then(draft, error => handleError(error));
function draft(response) {
    let data = response.data;
    //currenTime 是当前的月份
    let currentTime = new Date().getMonth() + 1;
    //month 是图标横坐标轴的数据
    let month = [];
    //historyTimes 是图标纵坐标轴的数据
    let historyTimes = [];
    for (let i = 1; i < 13; i++) {
        historyTimes.splice(0, 0, data[i]);
        let currentMonth = (currentTime - i + 1) < 1 ? (currentTime - i + 13) : (currentTime - i + 1);
        month.splice(0, 0, `${currentMonth}月`);
    }
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
                    data: ['访问次数']
                },
                xAxis: [{
                    type: 'category',
                    data: month
                }],
                yAxis: [{
                    type: 'value'
                }],
                series: [{
                    "name": "预测次数",
                    "type": "line",
                    "data": historyTimes
                }]
            };

            // 为echarts对象加载数据 
            myChart.setOption(option);
        }
    );

}
