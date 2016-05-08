import _ from 'lodash';
import test from 'vendor/t/';
console.log('xxx test: ', test);

import React, {Component} from 'react'

// import {
//     VictoryGroup,
//     VictoryBar
// } from 'victory'


import VictoryAnimation from 'vendor/victory-core/src/victory-animation/victory-animation.js'

import VictoryBar       from 'vendor/victory-chart/src/components/victory-bar/victory-bar.jsx'
import VictoryGroup     from 'vendor/victory-chart/src/components/victory-group/victory-group.jsx'

import styles from  './index.less'

const Comp =  class extends Component {
   constructor(props) {
    super(props);
    this.state = {
      data: this.getData(),
    };
  }

  getData() {
    const num = _.random(3, 5);
    return _.map(_.range(4), (index) => {
      return _.map(_.range(num), (i) => {
        return {x: i, y: _.random(2, 10)};
      })
    });
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        data: this.getData(),
      });
    }, 3000);
  }

  render() {
    return (
      <VictoryGroup
        height={600}
        offset={15}
        colorScale={"qualitative"}
        animate={{
          duration: 500,
          onExit: {
            duration: 1000,
            before: () => ({y: -1})
          },
        }}
      >
        {this.state.data.map((data, i) => {
          return (
            <VictoryBar
              data={data} key={i}
            />
          );
        })}
      </VictoryGroup>
    );
  }
}


export default Comp;
