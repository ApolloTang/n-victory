import React, {Component} from 'react'
import {
    VictoryBar,
    VictoryAxis
} from 'victory'
import styles from  './index.less'

class Chart extends React.Component {
    render() {
        return (
            <div className={styles.root}>
                <svg width="500" height="300">
                    <VictoryBar
                        standalone={false}
                        style={
                            {data: {width: 1, fill: "orange"} }
                        }
                        height={200}
                        width={300}
                        padding={{top:0, bottom:0, left:1, right:0} /* left must be at lease 1 else bar at x=0 won't render */}
                        domainPadding ={{x:0, y:0}}
                        domain={{x: [0, 50], y: [0, 60]}}
                        data={this.props.data}
                    />
                    {/*
                    <VictoryBar
                        standalone={false}
                        style={
                            {data: {width: 5, fill: "red"} }
                        }
                        width={400}
                        data={this.props.data}
                    />

                        */}
                    <VictoryAxis
                        standalone={false}
                        padding={0}
                        offsetY={200}
                        offsetX={0}
                        style={{
                            axis: {stroke: "red"},
                            grid: {strokeWidth: 1},
                            ticks: {stroke: "red"},
                            tickLabels: {fontSize: 12},
                            axisLabels: {fontsize: 16}
                        }}
                        label="x axis label"
                        domain={[0,1]}
                        tickValues={[ 0,.1,.3,.4,1]}
                        tickFormat = { (d)=>{
                            console.log(d);
                            return d;
                        }}
                        />
                </svg>
            </div>
        );
    }
}

export default class extends Component {
    render() {
        const data=[
            {x: 0,  y: 50},
            {x: 10, y: 20},
            {x: 20, y: 30},
            {x: 30, y: 40},
            {x: 40, y: 50},
            {x: 50, y: 60},
        ]
        return (
            <Chart
                data={data}
            />
        );
    }
}

