import _ from 'lodash';
import test from 'vendor/t/';
console.log('xxx test: ', test);

import React, {Component} from 'react'

// import {
//     VictoryGroup,
//     VictoryBar
// } from 'victory'


import VictoryBar       from 'vendor/victory-chart/src/components/victory-bar/victory-bar.jsx'
import VictoryGroup     from 'vendor/victory-chart/src/components/victory-group/victory-group.jsx'

import styles from  './index.less'

const Comp =  class extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      data: this.getData(),
    };
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
    setInterval(() => {
      this.setState({
        data: this.getData()
      });
    }, 2000);
  }

  render() {
    return (
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
              before: () => ({
                y: 0,
                fill: "orange",
                label: "BYE"
              })
            }
          }}
        />
      </VictoryGroup>
    );
  }
}

export default Comp;
