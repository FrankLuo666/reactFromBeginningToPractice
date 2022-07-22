import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app";

// document.getElementById('root')获取要插入的容器
// jsx语法：<h1>Hello React</h1>
// const react = "React";

// ()：如果存在标签结构，并且标签结构要换行，需要用()括起来
/*
function tick(){
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    )

    ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000);*/

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<h1>Hello</h1>, document.getElementById('root'));
