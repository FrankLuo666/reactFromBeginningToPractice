import React from 'react'

// props不可以被修改
export default class MyNav extends React.Component{
    render(){
        return(
            <div>
                {/* jsx语法 */}
                <h3>{ this.props.title }</h3>
                <ul>
                    {
                        this.props.nav.map((element,index) =>{
                            return <li key={index}>{element}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}