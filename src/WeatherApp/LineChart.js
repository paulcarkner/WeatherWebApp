import Style from './LineChart.module.css';
import React from 'react';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(...registerables);
Chart.register(ChartDataLabels);


export default class LineChart extends React.Component {
    constructor(props) {
        super(props)
        this.canvas = React.createRef();
    }

    canvasChart = null;

    componentDidMount() {
        let major = this.props.major;
        this.canvasChart = new Chart(this.canvas.current, {
            type: 'line',
            data: {
                labels: this.props.data.map(d => d.x),
                datasets: [{
                    //labels: this.props.data.map(d => d.temp + "C"),
                    data: this.props.data.map(d => d.y),
                    fill: false,
                    borderColor: '#fff8',
                    borderDash: [5, 5],
                    borderWidth: 2,
                    pointRadius: 0,
                    tension: 0.1
                    
                }]
            },
            options: {
                animation: {
                    duration: 0
                },
                layout: {
                    padding: { top: 15 }
                },
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    datalabels: {
                        color: 'white',
                        clip: false,
                        align: 'top',
                        offset: -2,
                        formatter: (d, context) => {
                            if (context.dataIndex % parseInt(this.props.major) != 0) return null;
                            return d + this.props.append;
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            color: '#fff4',
                            drawBorder: false,
                            //drawOnChartArea: false,
                            tickColor: 'white'
                        },
                        ticks: {
                            color: 'white',
                            callback: function (val, index) {
                                // Hide the label of every 2nd dataset
                                return index % parseInt(major) === 0 ? this.getLabelForValue(val) : '';
                            }
                        }
                    },
                    y: {
                        display: false,
                        suggestedMin: parseInt(this.props.min),
                        suggestedMax: parseInt(this.props.max)
                    }
                }
            }
        });
    }

    componentWillUnmount() {
        this.canvasChart.destroy();
    }

    componentDidUpdate(prevProps) {
        if (this.props == prevProps) return;
        this.canvasChart.destroy();
        this.componentDidMount();
    }

    render() {
        return <canvas className={Style.chart} ref={this.canvas} />;
    }
}