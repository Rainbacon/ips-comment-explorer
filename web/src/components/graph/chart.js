import React from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';

class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.chartData = {
            labels: [],
            datasets: [{
                data: props.dataPoints
            }]
        }
    }

    render() {
        return (
            <div className="ips-comment-chart">
                <Line height={400}
                      width={100}
                      options={ {maintainAspectRatio: false} }
                      data={this.chartData} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { comments } = state;
    return {
        dataPoints: comments
    };
}

export default connect(mapStateToProps)(Chart);