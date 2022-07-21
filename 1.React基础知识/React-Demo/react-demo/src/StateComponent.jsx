import React from 'react'

export default class StateComponent extends React.Component{
    /**
     * 组件中的状态：state
     * 以前我们操作页面的元素的变化，都是修改DOM，操作DOM
     * 但是有了React优秀的框架，我们不在推荐操作DOM，页面元素的改变使用State进行处理
     */

    constructor(props) {
        super(props);
        //定义
        this.state = {
            count: 10,
            flag: true
        }
    }

    increment(){
        //setState
        this.setState({
            count:this.state.count+=1
        })
    }

    decrement(){
        this.setState({
            count:this.state.count-=1
        })
    }

    clickHandler = ()=>{
        console.log(this);
    }

    render(){
        let showView = this.state.flag ? '我是孙悟空' : '我是假孙悟空'
        return(
            <div>
                <h3>组件的State</h3>
                <p>{ this.state.count }</p>
                <button onClick={this.increment.bind(this) }>增加</button>
                <button onClick={this.decrement.bind(this) }>减少</button>
                <button onClick={this.clickHandler }>关于this</button>
                <p>{ showView }</p>
            </div>
        )
    }
}