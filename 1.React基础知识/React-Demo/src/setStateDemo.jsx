import React from 'react'

export default class SetStateDemo extends React.Component{

    constructor() {
        super();
        this.state = {
            count:0
        }
    }

    async increment(){
        //方法1，异步改同步
        /*this.setState({
            count:this.state.count+1;
        }, () => {
            console.log(this.state.count);
        })*/

        //方法2
        await this.setStateAsync({count:this.state.count+1});
        console.log(this.state.count)
    }

    setStateAsync(state){
        return new Promise((resolve)=>{
            this.setState(state, resolve);
        })
    }

    render(){
        return(
            <div>
                setState是同步还是异步的问题
                <p>{ this.state.count }</p>
                <button onClick={this.increment.bind(this)}>增加count</button>
            </div>
        )
    }
}