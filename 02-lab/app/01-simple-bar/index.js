import React, {Component} from 'react'
import { VictoryBar, } from 'victory'
import styles from  './index.less'

class Chart extends React.Component {
    render() {
        return (
            <div className={styles.root}>
            <svg width="1000" height="1000">
                <VictoryBar standalone={false}
                    style={
                        {data: {width: 15, fill: "orange"} }
                    }
                    width={200}
                    data={this.props.data}
                />
                <VictoryBar  standalone={false}
                    style={
                        {data: {width: 5, fill: "red"} }
                    }
                    width={200}
                    data={this.props.data}
                />
        </svg>
            </div>
        );
    }
}

export default class extends Component {
  render() {
     const data=[
        {x: 1, y: 1},
        {x: 2, y: 2},
        {x: 3, y: 3},
        {x: 4, y: 2},
        {x: 5, y: 2},
        {x: 6, y: 2},
     ]
    return (
        <Chart
            data={data}
        />
    );
  }
}

