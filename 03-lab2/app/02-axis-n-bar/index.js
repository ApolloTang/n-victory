import React, {Component} from 'react'
import {
    VictoryBar,
    VictoryAxis
} from 'victory'
import styles from  './index.less'

class Chart extends React.Component {
    render() {
        const svg_w = 300;
        const svg_h = 300;
        const range_w = svg_w;
        const range_h = svg_h;
        const padding_b = 50;
        const range_padding = {top:0, bottom: padding_b, left:0, right:0}
        // const xAxisOffSet_y = -(svg_h/2 - padding_b);
        const xAxisOffSet_y = 0;
        return (
            <div className={styles.root}>
                <svg width={svg_w} height={svg_h}>
                    <rect x={0} y={0} width={svg_w} height={svg_h} style={{'fill':'#ede'}} />
                    {/* Grid */}
                    <VictoryAxis
                        standalone={false}
                        padding={range_padding}
                        width={range_w}
                        height={range_h}
                        style={{
                            axis: {stroke: "transparent", strokeWidth:0 },
                            ticks: {stroke: "transparent", strokeWidth:0 },
                            tickLabels: {fontSize: 0},
                            grid: {stroke: "#bbf", strokeWidth:.5},
                            axisLabel: {fontSize: 0, fill:"tranparent"}
                        }}
                        domain={[0,.8]}
                        tickValues={[0,.1,.2,.3,.4,.5,.6,.7,.8]}
                        tickFormat = { (d)=>{
                            return 0; //0 is falsy
                        }}
                        />
                    {/* Bar 1 */}
                    <VictoryBar
                        standalone={false}
                        style={
                            {data: {width: 9, fill: "#faa"} }
                        }
                        width={range_w}
                        height={range_h}
                        padding={range_padding}
                        domain={{x: [0, 80], y: [0, 50]}}
                        data={this.props.data}
                    />
                    {/* Bar 2 */}
                    <VictoryBar
                        standalone={false}
                        style={
                            {data: {width: 1, fill: "red"} }
                        }
                        width={range_w}
                        height={range_h}
                        padding={range_padding}
                        domain={{x: [0, 80], y: [0, 50]}}
                        data={this.props.data}
                    />
                    {/* Major ticks */}
                    <VictoryAxis
                        standalone={false}
                        padding={range_padding}
                        offsetY={xAxisOffSet_y}
                        width={range_w}
                        style={{
                            axis: {stroke: "black", strokeWidth: .5},
                            ticks: {stroke: "black", strokeWidth: 1.5},
                            tickLabels: {fontSize: 9},
                            axisLabel: {fontSize: 15, fill:'red'},
                        }}
                        label="Abscissa"
                        domain={[0,.8]}
                        tickValues={[0,.1,.2,.3,.4,.5,.6,.7,.8]}
                        tickFormat = { (d)=>{
                            return d+""; // [BUG/FEATURE ?? ] must return type string; if return type num, 0 is falsy
                            // return `^\n>${d}<`;
                        }}
                        />
                    {/* Minor ticks */}
                    <VictoryAxis
                        standalone={false}
                        padding={range_padding}
                        offsetY={xAxisOffSet_y}
                        width={range_w}
                        style={{
                            axis: {stroke: "transparent", strokeWidth:0},
                            ticks: {stroke: "red", strokeWidth: .5},
                            tickLabels: {fontSize: 0},
                        }}
                        domain={[0,.8]}
                        tickValues={[.05,.15,.25,.35,.45,.55,.65,.75]}
                        tickFormat = { (d)=>{
                            return ""; // [BUG/FEATURE ?? ] must return type string; if return type num, 0 is falsy
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
            {x: 0,   y: 50},
            {x: 20,  y: 40},
            {x: 30,  y: 1},
            {x: 40,  y: 20},
            {x: 50,  y: 0},
            {x: 60,  y: 40},
            {x: 80,  y: 50},
        ]
        return (
            <Chart
                data={data}
            />
        );
    }
}

