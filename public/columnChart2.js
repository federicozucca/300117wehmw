var ColumnChart2 = function (tempLog) {
  var container = document.querySelector('#column-chart2');

  var chart = new Highcharts.Chart({
    chart:{
      type: "column",
      renderTo: container
      },
      title:{
        text: "Wind Speed Forcasted every 3 hours [mph]"
      },
      series: [{name: "Wind Speed Forcasted",
        data: tempLog2.data

      }],
      xAxis: {
        categories: tempLog2.categories
      }
  });

}