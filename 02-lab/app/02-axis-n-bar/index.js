import React, {Component} from 'react'
import {
    VictoryBar,
    VictoryAxis
} from 'victory'
import styles from  './index.less'

class Chart extends React.Component {
    render() {
        const padding_Vbar = {top:0, bottom:50, left:0.01, right:0}
        //                                            ^--left padding cannot be zero else
        //                                               bar at x=0 won't render
        return (
            <div className={styles.root}>
                <svg width="300" height="300">
                    {/* Grid */}
                    <VictoryAxis
                        standalone={false}
                        padding={{top:0, bottom:0, left:padding_Vbar.left, right:0}}
                        offsetY={0}
                        offsetX={0}
                        width={300}
                        style={{
                            axis: {stroke: "transparent", strokeWidth: .5},
                            ticks: {stroke: "transparent", strokeWidth: .5},
                            tickLabels: {fontSize: 0},
                            grid: {stroke: "#bbf", strokeWidth:.5},
                            axisLabels: {fontSize: 7, fill:"red"} /* [BUG] can not set axisLable's style */
                        }}
                        label="xxx&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;yyy"
                        domain={[0,.8]}
                        tickValues={[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]}
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
                        height={300}
                        width={300}
                        padding={padding_Vbar}
                        domainPadding ={{x:0, y:0}}
                        domain={{x: [0, 80], y: [0, 50]}}
                        data={this.props.data}
                    />
                    {/* Bar 2 */}
                    <VictoryBar
                        standalone={false}
                        style={
                            {data: {width: 1, fill: "red"} }
                        }
                        height={300}
                        width={300}
                        padding={padding_Vbar}
                        domainPadding ={{x:0, y:0}}
                        domain={{x: [0, 80], y: [0, 50]}}
                        data={this.props.data}
                    />
                    {/* Major ticks */}
                    <VictoryAxis
                        standalone={false}
                        padding={{top:0, bottom:0, left:padding_Vbar.left, right:0}}
                        offsetY={0}
                        offsetX={0}
                        width={300}
                        style={{
                            axis: {stroke: "black", strokeWidth: .5},
                            ticks: {stroke: "black", strokeWidth: 1.5},
                            tickLabels: {fontSize: 7},
                            axisLabels: {fontSize: 7}, /* [BUG] can not set axisLable's fontsize */
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
                        padding={{top:0, bottom:0, left:padding_Vbar.left, right:0}}
                        offsetY={50}
                        offsetX={0}
                        width={300}
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

