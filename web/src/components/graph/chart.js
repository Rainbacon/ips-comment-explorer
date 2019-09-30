import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'
import { connect } from 'react-redux';

class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.chartOptions = {
            type: "line",
            series: [{
                data: props.dataPoints,
                name: ""
            }],
            xAxis: {
                type: 'datetime'
            }
        }
    }

    render() {
        return (
            <div className="ips-comment-chart">
                <HighchartsReact highcharts={Highcharts} options={this.chartOptions} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { comments } = state;
    let chartData = {};
    comments.forEach(comment => {
        if (chartData[comment.creation_date]) {
            chartData[comment.creation_date]++;
        } else {
            chartData[comment.creation_date] = 1;
        }
    });
    return {
        dataPoints: Object.keys(chartData).map(k => { 
            return { x: new Date(k), y: chartData[k] }
        })
    };
}

export default connect(mapStateToProps)(Chart);