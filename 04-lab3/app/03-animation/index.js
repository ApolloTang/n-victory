import test from 'vendor/t/';
console.log('xxx test: ', test);

import React, {Component} from 'react'

import {
    VictoryAnimation
} from 'victory'

import styles from  './index.less'

export default class extends Component {
    constructor() {
        super();
        this.data1 = this.data1.bind(this);
        this.data2 = this.data2.bind(this);
        this.state = {
            z: 0,
            bars: []
        }
    }
    data1() {
        console.log('data1')
        this.setState({
            data: {
                z: 10,
                bars: [
                    {x: 0,   y: 50},
                    {x: 20,  y: 40},
                    // {x: 30,  y: 1},
                    // {x: 40,  y: 20},
                    // {x: 50,  y: 0},
                    // {x: 60,  y: 40},
                    // {x: 80,  y: 50}
                ]
            }
        });
    }
    data2() {
        console.log('data2')
        this.setState({
            data: {
                z: 20,
                bars: [
                    {x: 0,   y: 0},
                    {x: 20,  y: 30},
                    // {x: 30,  y: 1},
                    // {x: 40,  y: 40},
                    // {x: 50,  y: 0},
                    // {x: 60,  y: 30},
                    // {x: 80,  y: 0}
                ]
            }
        });
    }
    render() {
        // console.log('this.state: ', this.state.data)
        const data = this.state.data || [];
        // const data = [
        //   { x: 0 },
        //   { x: 10},
        // ]

        // const data = {
        //     data:[
        //         {x: 0,   y: 50},
        //         {x: 20,  y: 40},
        //         {x: 30,  y: 1},
        //         {x: 40,  y: 20},
        //         {x: 50,  y: 0},
        //         {x: 60,  y: 40},
        //         {x: 80,  y: 50}
        //     ]
        // }
        //<Chart data={data} />
        const a = 'a11'
        return (
            <div>
                <VictoryAnimation data={data} duration={500}>
                    {
                        (data) => {
                            console.log(data);
                            return (
                                <div>
                                <p> {a}  </p>

                                </div>
                                );
                        }
                    }
                </VictoryAnimation>
                <button type="button" onClick={this.data1}>1</button>
                <button type="button" onClick={this.data2}>2</button>
            </div>
        );
    }
}

