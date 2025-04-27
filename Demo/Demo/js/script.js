// 初始化 ECharts 实例
const chartDom = document.getElementById('forecast-chart');
const myChart = echarts.init(chartDom);

// 示例数据：2018–2024 为历史，2025–2030 为预测
const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];
const usExports = [
  12.51, 12.77, 12.33, 14.43, 15.53, 15.25, 16.01,  // 2018–2024（历史）
  16.80, 17.10, 17.05, 17.65, 18.10, 18.00         // 2025–2030（预测）
];

const usImports = [
  13.12, 13.35, 12.65, 14.89, 16.03, 15.62, 16.41,  // 历史
  16.90, 17.20, 17.15, 17.75, 18.30, 18.20         // 预测
];

const chinaExports = [
  16.42, 17.23, 17.93, 21.73, 23.97, 23.70, 25.45,  // 历史
  26.30, 27.00, 26.80, 27.50, 28.10, 27.90         // 预测
];

const chinaImports = [
  14.09, 14.31, 14.23, 17.37, 18.10, 17.99, 18.39,  // 历史
  19.00, 19.30, 19.20, 19.80, 20.20, 20.10         // 预测
];

const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'cross' },
    textStyle: { color: '##1a76c2' }
  },
  legend: {
    data: ['美国出口', '美国进口', '中国出口', '中国进口'],
    top: 60,
    textStyle: { color: '#fff', fontSize: 16 }
  },
  grid: {
    left: '5%', right: '5%', bottom: '10%', top: '15%'
  },
  xAxis: {
    type: 'category',
    data: years,
    name: '年份',
    boundaryGap: false,
    nameTextStyle: { color: '#fff', fontSize: 16 },
    axisLine: { lineStyle: { color: '#fff' } },
    axisLabel: { color: '#fff', fontSize: 14 }
  },
  yAxis: {
    type: 'value',
    name: '贸易额 (亿美元)',
    nameTextStyle: { color: '#fff', fontSize: 16 },
    axisLine: { lineStyle: { color: '#fff' } },
    axisLabel: { color: '#fff', fontSize: 14 },
    splitLine: { lineStyle: { color: 'rgba(255,255,255,0.2)' } }
  },
  series: [
    {
      name: '美国出口',
      type: 'line',
      data: usExports,
      smooth: true,
      lineStyle: { width: 3 },
      itemStyle: { color: '#FF5733' },
    },
    {
      name: '美国进口',
      type: 'line',
      data: usImports,
      smooth: true,
      lineStyle: { width: 3 },
      itemStyle: { color: '#33A1FF' }
    },
    {
      name: '中国出口',
      type: 'line',
      data: chinaExports,
      smooth: true,
      lineStyle: { width: 3 },
      itemStyle: { color: '#33FF57' }
    },
    {
      name: '中国进口',
      type: 'line',
      data: chinaImports,
      smooth: true,
      lineStyle: { width: 3 },
      itemStyle: { color: '#FF33A8' }
    }
  ]
};

// 使用刚指定的配置项和数据显示图表
myChart.setOption(option);

// 让图表在窗口大小变化时自适应
window.addEventListener('resize', () => {
  myChart.resize();
});
