import _ from 'lodash';
import test from 'vendor/t/';

import React, {Component} from 'react'

// import {
//     VictoryGroup,
//     VictoryBar
// } from 'victory'


import VictoryBar       from 'vendor/victory-chart/src/components/victory-bar/victory-bar.js'
import VictoryGroup     from 'vendor/victory-chart/src/components/victory-group/victory-group.js'

import styles from  './index.less'

const Comp =  class extends React.Component {
   constructor(props) {
    super(props);
    // this.state = {
    //   data: this.getData(),
    // };
    //
    this.data1 = this.data1.bind(this);
    this.data2 = this.data2.bind(this);
    this.data3 = this.data3.bind(this);
    this.state = {
       data: []
    }
  }

  data1() {
    console.log('data1')
    this.setState({
      data: [
        {x: 0,   y: 50},
        {x: 40,  y: 10},
        {x: 80,  y: 50}
      ]
    });
  }

  data2() {
    console.log('data2')
    this.setState({
      data: [
        {x: 0,   y: 10},
        {x: 40,  y: 50},
        {x: 80,  y: 10},
        {x: 50,  y: 10},
      ]
    });
  }

  data3() {
    console.log('data3')
    this.setState({
      data: [
        {x: 0,   y: 10},
        {x: 40,  y: 50},
      ]
    });
  }

  getData() {
    const n = _.random(4, 10)
    return _.map(_.range(n), (i) => {
      return {
        x: i,
        y: _.random(2, 10)
      };
    });
  }

  componentDidMount() {
    // setInterval(() => {
    //   this.setState({
    //     data: this.getData()
    //   });
    // }, 2000);
  }

  render() {
    return (
      <div>
        <VictoryGroup height={500}
          animate={{duration: 1000}}>
          <VictoryBar
            data={this.state.data}
            style={{
              data: {
                fill: "tomato", width: 12
              }
            }}
            animate={{
              onExit: {
                duration: 500,
                before: () => {
                  console.log('onExit, before')
                  return {
                    y: 0,
                    fill: "orange",
                    label: "BYE"
                  }
                },
                after: () => {
                  console.log('onExit, after')
                  return {
                    fill: "orange",
                    label: "exit after"
                  }
                }
              },
              onEnd: {
                duration: 500,
                before: () => {
                  console.log('onEnter, before');
                  return {
                    y: 0,
                    fill: "blue",
                    label: "hello"
                  }
                },
                after: () => {
                  console.log('onEnter, after');
                  return {
                    fill: "red",
                    label: ""
                  }
                }
              }
            }}
          />
        </VictoryGroup>
        <button type="button" onClick={this.data1}>1</button>
        <button type="button" onClick={this.data2}>2</button>
        <button type="button" onClick={this.data3}>3</button>
      </div>
    );
  }
}

export default Comp;
