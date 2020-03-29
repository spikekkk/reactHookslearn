import React, { createContext, useReducer } from "react"

export const ColorContext = createContext({})

export const UPDATE_COLOR = "UPDATE_COLOR"
//1.0声明reducer
const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_COLOR:
            return action.color
        default:
            return state
    }
}
export const Color = props => {
    // reducer传递两个参数：第一个函数，第二个默认参数
    const [color, dispatch] = useReducer(reducer, "blue")
    return (
        // 改变共享的值--将color和dispatch传递出去
        <ColorContext.Provider value={{ color, dispatch }}>
            {props.children}
        </ColorContext.Provider>
    )
}

//使用userReducer进行业务逻辑的编写--相当于构建了redux
