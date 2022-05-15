# Javascript Project


### [Canvas JS Chart](https://canvasjs.com/javascript-charts/)
```
<div id="chartContainer" style="height: 300px; width: 100%;"></div>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://canvasjs.com/assets/script/jquery.canvasjs.min.js"></script>
<script>
    $(document).ready(function () {
        loadChart();
    })

    function loadChart() {
        var options = {
            theme: "light2",
            animationEnabled: true,
            title: {
                text: "Quaterly Sales by Region - 2016"
            },
            axisY: {
                suffix: "%"
            },
            toolTip: {
                shared: true
            },
            data: [
                {
                    type: "stackedArea100",
                    name: "East",
                    yValueFormatString: "#0.##\"%\"",
                    showInLegend: "true",
                    dataPoints: [
                        { label: "Q1", y: 21 },
                        { label: "Q2", y: 26 },
                        { label: "Q3", y: 23 },
                        { label: "Q4", y: 30 }
                    ]
                },
                {
                    type: "stackedArea100",
                    name: "West",
                    yValueFormatString: "#0.##\"%\"",
                    showInLegend: "true",
                    dataPoints: [
                        { label: "Q1", y: 20 },
                        { label: "Q2", y: 26 },
                        { label: "Q3", y: 23 },
                        { label: "Q4", y: 31 }
                    ]
                },
                {
                    type: "stackedArea100",
                    name: "Central",
                    yValueFormatString: "#0.##\"%\"",
                    showInLegend: "true",
                    dataPoints: [
                        { label: "Q1", y: 20 },
                        { label: "Q2", y: 26 },
                        { label: "Q3", y: 25 },
                        { label: "Q4", y: 30 }
                    ]
                },
                {
                    type: "stackedArea100",
                    name: "South",
                    yValueFormatString: "#0.##\"%\"",
                    showInLegend: "true",
                    dataPoints: [
                        { label: "Q1", y: 18 },
                        { label: "Q2", y: 25 },
                        { label: "Q3", y: 30 },
                        { label: "Q4", y: 26 }
                    ]
                }]
        };
        $("#chartContainer").CanvasJSChart(options);
    }
</script>
```
### [Apex Chart](https://apexcharts.com/javascript-chart-demos/)
```
<div id="chart" style="height: 300px; width: 100%;"></div>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
$(document).ready(function () {
        loadChart();
    })

    function loadChart() {
        var options = {
          series: [44, 55, 13, 43, 22],
          chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
    }
</script>
```
