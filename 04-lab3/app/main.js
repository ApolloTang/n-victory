import React from  'react';
import {render} from 'react-dom';
import './main.less';

// import LabTemplate from './00-lab-template/';
// render( <LabTemplate />, document.getElementById('root'));

// import SimpleBar from './01-simple-bar/';
// render( <SimpleBar />, document.getElementById('root'));

// import Component from './02-axis-n-bar/';
import Component from './03-animation/';


// // Demo from:
// // http://formidable.com/open-source/victory/docs/victory-bar Fig. 10
// // this animation is done using victoryGroup
// import Component from './04-animation-demo/';


// Demo from:
// http://formidable.com/open-source/victory/docs/victory-chart Fig.8
// this animation is done using victoryChart
// import Component from './05-animation-demo2/';

render( <Component />, document.getElementById('root'));
