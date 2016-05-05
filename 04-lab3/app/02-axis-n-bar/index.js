import test from 'vendor/t/';
console.log('xxx test: ', test);

import React, {Component} from 'react'

// import {
//     VictoryBar
//     // , VictoryAxis
// } from 'victory'

import VictoryAxis from 'vendor/victory-chart/src/components/victory-axis/victory-axis.jsx'
import VictoryBar from 'vendor/victory-chart/src/components/victory-bar/victory-bar.jsx'

import styles from  './index.less'

class Chart extends React.Component {
    render() {
        const svg_w = 300;
        const svg_h = 200;
        const range_w = svg_w;
        const range_h = svg_h;
        const padding_b = 50;
        const padding_t = 20;
        const padding_side = 20;
        const range_padding = {top:padding_t, bottom: padding_b, left:padding_side, right:padding_side}
        const xAxisOffSet_y = padding_b;
        return (
            <div className={styles.root}>
                <svg width={svg_w} height={svg_h}>
                    <rect x={0} y={0} width={svg_w} height={svg_h} style={{'fill':'#ede'}} />
                    {/* Grid */}
                    <g className="grid">
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
                    </g>
                    {/* Bar 1 */}
                    <g className="bar-1">
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
                    </g>
                    {/* Bar 2 */}
                    <g className="bar-2">
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
                    </g>
                    {/* Major ticks */}
                    <g className="major-ticks">
                        <VictoryAxis
                            standalone={false}
                            padding={range_padding}
                            offsetY={xAxisOffSet_y}
                            width={range_w}
                            height={range_h}
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
                    </g>
                    {/* Minor ticks */}
                    <g className="minor-ticks">
                        <VictoryAxis
                            standalone={false}
                            padding={range_padding}
                            offsetY={xAxisOffSet_y}
                            width={range_w}
                            height={range_h}
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
                    </g>
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

