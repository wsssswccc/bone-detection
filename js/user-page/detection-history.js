function getData(url, data) {
    return fetch(url, data)
        .then(
            //如果响应成功，成为resolveed状态
            response => {
                //判断响应是否返回成功的状态码
                if (!response.ok) {
                    const error = new Error(`请求失败! 状态码: ${response.status}, 失败信息: ${response.statusText}`);
                    error.response = response;
                    return Promise.reject(error);
                } else {
                    return response.json();
                }
            },
            //如果响应失败，成为rejected状态
            () => {
                const error = new Error('网络错误');
                alert('网络错误！');
                throw error;
            }
        )
}
getData('https://www.easy-mock.com/mock/5c5414c1deae1e58bc943374/BnoeDetection/history-detection-result#!method=get')
    .then(data => console.log(data), error => { handleError(error) })
//处理响应异常的函数   
function handleError(error) {
    //do something to handle error
    console.log(error);

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



