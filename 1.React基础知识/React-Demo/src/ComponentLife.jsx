import React from 'react'

export default class ComponentLife extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            count:10
        }
    }

    componentWillMount(){
        console.log("componentWillMount");
    }

    componentDidMount(){
        console.log("componentDidMount");
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        return true;
    }

    componentWillUpdate(){
        console.log("componentWillUpdate");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    componentWillReceiveProps(){
        console.log("componentWillReceiveProps");
    }

    componentWilUnmount(){
        console.log("componentWilUnmount");
    }

    changeHandler = () =>{
        this.setState({
            count: this.state.count+=1
        })
    }

    clickChange = () => {
        this.props.clickChanges('子组件传过来的数据');
    }

    render(){
        const { count } = this.state;
        return(
            <div>
                生命周期函数: { count} - {this.props.title}
                <button onClick={this.changeHandler}>修改count</button>
                <button onClick={this.clickChange}>修改title</button> {/*子传父*/}
            </div>
        )
    }
}