import React from "react"
import { Link, NavLink } from "react-router-dom";
import "./style.css"

export default class Nav extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        {/*<Link to="/">Home页面</Link>*/}
                        <NavLink exact activeClassName="selected" activeStyle={{ color:'red' }} exact to="/">Home页面</NavLink>
                    </li>
                    <li>
                        {/*<Link to="/mine">Mine页面</Link>*/}
                        {/*<NavLink exact activeClassName="selected" to="/mine">Mine页面</NavLink>*/}
                        <NavLink
                            activeClassName="selected"
                            exact
                            to={{
                                pathname:"/mine",
                                search: "?sort=name",
                                hash: "#the-hash",
                                state: { flag: 'flag' } // 隐形传递参数
                            }}
                        >Mine页面</NavLink>
                    </li>
                    <li>
                        {/*<Link to="/mine/ucenter">UCenter页面</Link>*/}
                        <NavLink exact activeClassName="selected" to="/mine/ucenter/1005/Tom">UCenter页面</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}