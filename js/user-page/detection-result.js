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
    function(ec) {
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
                    restore: { show:false},
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
                    { value: 0.4, name: '患骨质疏松' },
                    { value: 0.6, name: '不患骨质疏松' },
                ]
            }]
        };
        // 为echarts对象加载数据 
        myChart.setOption(option);
    }
);