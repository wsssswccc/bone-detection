getData('https://easy-mock.com/mock/5c5414c1deae1e58bc943374/BnoeDetection/bone_analysis')
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
                    text: '用户患病概率',
                    subtext: '基于用户填写的数据',
                    x: 'center'
                },
                tooltip: {

                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data: ['患病概率>=0.5', '患病概率<0.5']
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
                                    width: '55%',
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
                    radius: '50%',
                    center: ['50%', '50%'],
                    data: [
                        { value: response.data.disease_prob, name: '患病概率>=0.5' },
                        { value: 1 - response.data.disease_prob, name: '患病概率<0.5' },
                    ]
                }]
            };
            // 为echarts对象加载数据 
            myChart.setOption(option);
        }
    );
    showAdvice(response.data.result);
}
//用于显示意见的函数
function showAdvice(result){
    var items = document.getElementsByClassName('items');
    items[0].innerHTML += result.avg_quality;
    items[1].innerHTML += result.less_prob;
    items[2].innerHTML += result.more_prob;
}