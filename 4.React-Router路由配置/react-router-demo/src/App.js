import React from 'react';
import Home from "./pages/Home"
import Mine from "./pages/Mine"
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Nav from "./components/Nav/index"
import UCenter from "./pages/UCenter"
import NotFound from "./pages/NotFound"
import Demo from "./pages/Demo"
import Shop from "./pages/Shop"
import Book from "./pages/Book"

import WEBBook from "./pages/WEBBook"
import JavaBook from "./pages/JavaBook"

/**
 * HashRouter:锚点链接
 * BrowserRouter:h5新特性 / history.push   如果上线之后，需要后台做一些处理：重定向处理 404bug
 */

/**
 * /mine/ucenter  包含了 /mine
 * 使用 strict 和 exact 来精准定位
 */

function App() {
  return (
    <div className="App">
        <Router>
            <Nav />
            <Switch>
                <Redirect from="/hellomine" to="mine" /> //重定向
                <Route exact path="/" component={ Home }></Route>
                <Route strict exact path="/mine" component={ Mine }></Route>
                <Route strict exact path="/mine/ucenter/:id?/:name?" component={ UCenter }></Route>
                {/*<Route path="/demo" render={ ()=> <div>Hello Demo</div>}></Route>*/}
                <Route path="/demo" render={ (props) => <Demo {...props} name="你好"/> }></Route>
                <Route strict exact path="/shop" component={ Shop }></Route>

                {/* <Route path="/book" component={ Book }></Route> */}
                {/* 路由嵌套：*/}
                <Book>
                    <Switch>
                        <Route path="/book/webbook" component={ WEBBook}></Route>
                        <Route path="/book/javabook" component={ JavaBook}></Route>
                    </Switch>
                </Book>
                <Route component={ NotFound }></Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
