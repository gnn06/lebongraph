const ChartJs = require('node-chartjs')
const fs = require('fs');

const cjs = new ChartJs(1000, 500)

const opn = require('opn')

const annoncesString = fs.readFileSync(process.stdin.fd, 'utf-8');

const annonces = JSON.parse(annoncesString);

const data = annonces.results.map(function (item) {
    return {
        x: item.attributes.mileage,
        y: item.price
    };
});

const lineConfig = {
    type: 'scatter',
    data: {
        // labels: [1, 2, 3, 4, 5, 6, 7],
        datasets: [{
            backgroundColor: 'red',
            borderColor: 'red',
            label: 'Occasions',
            data: data,
            fill: false,
            showLine: false,
            pointRadius: 10,
            pointBackgroundColor: 'rgba(255, 0, 0, 0.5)',
            // cubicInterpolationMode: 'monotone',
            // borderCapStyle: 'round'
        }]
    },
    options: {
        plugins: [{
            beforeDraw: function (chartInstance) {
                const ctx = chartInstance.chart.ctx

                const width = chartInstance.chart.width
                const height = chartInstance.chart.height

                ctx.fillStyle = "white";
                ctx.fillRect(0, 0, width, height);

            }
        }],
        // layout: {
        //     padding: 10,
        //     lineHeight: 1
        // },
        legend: {
            display: true,
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'kilomètre'

                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'prix'

                }
            }]
        },
        linearGradientLine: true,
    }
}

cjs.makeChart(lineConfig)
    .then(res => {
        cjs.drawChart()

        cjs.toFile('test.line.png')
            .then(_ => {
                opn('test.line.png')
            })
    });
