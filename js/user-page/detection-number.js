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
    function(ec) {
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
                data: ["1月", "2月", "3月", "4月", "5月", "6月","7月", "8月", "9月", "10月", "11月", "12月"]
            }],
            yAxis: [{
                type: 'value'
            }],
            series: [{
                "name": "访问次数",
                "type": "line",
                "data": [5, 20, 40, 10, 10, 20,20,10,45,32,12,5]
            }]
        };

        // 为echarts对象加载数据 
        myChart.setOption(option);
    }
);