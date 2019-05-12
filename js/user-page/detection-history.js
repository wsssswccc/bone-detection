//import{getData,handleError,handleData}from 'ajax.js';

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
                data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
            }],
            yAxis: [{
                type: 'value'
            }],
            series: [{
                "name": "骨质质量",
                "type": "line",
                "data": [0.3, 0.5, 0.7, 0.7, 0.6, 0.5, 0.7, 0.88, 0.9, 0.78, 0.93, 0.89]
            }]
        };

        // 为echarts对象加载数据 
        myChart.setOption(option);
    }
);
let responseData;



