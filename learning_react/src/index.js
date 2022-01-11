import React from 'react'; // babel.js uses react library - React.createElement
import ReactDOM from 'react-dom'; // render virtual dom elements into real dom

const element = <h1>Hello World</h1>;
//console.log(element);
ReactDOM.render(element,document.getElementById('root'));
