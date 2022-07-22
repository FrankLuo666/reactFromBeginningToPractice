import React from "react"

export default class Book extends React.Component{
    render(){
        return(
            <div>
                Book Page:
                {/*  路由嵌套显示的位置  */}
                { this.props.children }
            </div>
        )
    }
}