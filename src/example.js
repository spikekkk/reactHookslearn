import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
function Index() {
    useEffect(() => {
        console.log("老弟你来了---------index")
        return () => {
            console.log("走了老弟-----------index")
        }
    }, [])
    return <h2>JSPang.com</h2>
}

function List() {
    useEffect(() => {
        console.log("老弟你来了-------list")
        return () => {
            console.log("走了老弟--list")
        }
    }, [])
    return <h2>List-Page</h2>
}

function Example() {
    const [count, setCount] = useState(0) //es6 数组结构方法
    useEffect(() => {
        console.log(`UseEffect===>You clicked ${count} times`)
        return () => {
            console.log("===========================================")
        }
    }, [count])
    return (
        <div>
            <p>click{count}</p>
            <button onClick={() => setCount(count + 1)}>点我</button>
            <Router>
                <ul>
                    <li>
                        {" "}
                        <Link to="/">首页</Link>{" "}
                    </li>
                    <li>
                        <Link to="/list/">列表</Link>{" "}
                    </li>
                </ul>
                <Route path="/" exact component={Index} />
                <Route path="/list/" component={List} />
            </Router>
        </div>
    )
}

export default Example
