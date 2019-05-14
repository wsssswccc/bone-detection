getData('https://easy-mock.com/mock/5c5414c1deae1e58bc943374/BnoeDetection/detection-result')
    .then(draft, error => handleError(error));
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
            'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
        ],
        function (ec) {
            // 基于准备好的dom，初始化echarts图表
            var myChart = ec.init(document.getElementById('chart'));
            var option = {
                title: {
                    text: '您的骨质疏松的概率',
                    subtext: '基于您填写的数据',
                    x: 'center'
                },
                tooltip: {

                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data: ['患骨质疏松', '不患骨质疏松']
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: { show: false },
                        dataView: { show: false, readOnly: false },
                        magicType: {
                            show: false,
                            type: ['pie', 'funnel'],
                            option: {
                                funnel: {
                                    x: '25%',
                                    width: '50%',
                                    funnelAlign: 'left',
                                    max: 1548
                                }
                            }
                        },
                        restore: { show: false },
                        saveAsImage: { show: false }
                    }
                },
                calculable: true,
                series: [{
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: [
                        { value: response.data.disease_prob, name: '患骨质疏松' },
                        { value: 1 - response.data.disease_prob, name: '不患骨质疏松' },
                    ]
                }]
            };
            // 为echarts对象加载数据 
            myChart.setOption(option);
        }
    );
    showAdvice(response.data.advices);
}
//用于显示意见的函数
function showAdvice(advice){
    var items = document.getElementsByClassName('items');
    items[0].innerHTML = advice.aid_treatment;
    items[1].innerHTML = advice.diet;
    items[2].innerHTML = advice.drug;
    items[3].innerHTML = advice.sport;
}