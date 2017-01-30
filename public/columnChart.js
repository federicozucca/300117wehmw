var ColumnChart = function (tempLog) {
  var container = document.querySelector('#column-chart');

  var chart = new Highcharts.Chart({
    chart:{
      type: "column",
      renderTo: container
      },
      title:{
        text: "Temperature Forcasted every 3 hours [°C]"
      },
      series: [{name: "Temperature Forcasted",
        data: tempLog.data
      }],
      xAxis: {
        categories: tempLog.categories
      }
  });

}