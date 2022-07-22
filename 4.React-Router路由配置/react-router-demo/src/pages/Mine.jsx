import React from "react"
import qs from "qs"
import MineDemo from './MineDemo'

const Mine = (props) =>{
    /*http://localhost:8080/#/mine?name=tom&age=18*/
    // const params = new URLSearchParams(props.location.search);
    // console.log(params.get("name"));
    // console.log(params.get("age"));

    // const value = qs.parse(props.location.search);
    // console.log(value);
    // console.log(value.name);
    // console.log(value.age);

    // console.log(props);

    const clickHandle = () =>{
        // props.history.push("/");
        // push 叠加的上一次的页面依然存在内中， replace是替换，上一次的页面不存在了
        props.history.replace("/")
    }

    return(
        <div>
            Mine page
            <button onClick={ clickHandle }>回到Home页面</button>
            <MineDemo />
        </div>
    )
}

export default Mine