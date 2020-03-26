import React, { useContext, createContext } from "react"
const CountContext = createContext()
function Children1(props) {
    let count = useContext(CountContext)
    return <h2>Children{count}</h2>
}

export default Children1
