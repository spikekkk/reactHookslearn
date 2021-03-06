import React, { useContext } from "react"
import { ColorContext, UPDATE_COLOR } from "./color"

function Buttons() {
    //将共享值取出来
    const { dispatch } = useContext(ColorContext)
    //使用dispatch发送action  :{type: ,color:""}
    return (
        <div>
            <button
                onClick={() => {
                    dispatch({ type: UPDATE_COLOR, color: "red" })
                }}>
                红色
            </button>
            <button
                onClick={() => {
                    dispatch({ type: UPDATE_COLOR, color: "yellow" })
                }}>
                黄色
            </button>
        </div>
    )
}

export default Buttons
