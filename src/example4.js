import React, { useState, createContext, useContext } from "react"

import Children1 from "./child"

const CountContext = createContext() //1.0 创建上下文
// function Counter() {
//     let count = useContext(CountContext)
//     return <h2>子组件{count}</h2>
// }

function Example4() {
    const [count, setCount] = useState(0) //es6 数组结构方法

    return (
        <div>
            <p>click{count}</p>
            <button onClick={() => setCount(count + 1)}>点我</button>
            <CountContext.Provider value={count}>
                <Children1 />
            </CountContext.Provider>
        </div>
    )
}

export default Example4
