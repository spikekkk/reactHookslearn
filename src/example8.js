import React, { useRef, useState, useEffect } from "react"

function Example8() {
    const inputEl = useRef(null)
    const onButtonClick = () => {
        //1.0 使用 useRef改变 dom元素的值
        inputEl.current.value = "Hellow js"
        console.log("inputEl---", inputEl)
    }
    const [text, setText] = useState("js")
    //2.0使用useRef保存变量
    const textRef = useRef()
    useEffect(() => {
        textRef.current = text
        console.log("textRef.current", textRef.current)
    })
    return (
        <>
            <input ref={inputEl} type="text"></input>
            <button onClick={onButtonClick}>在input上展示文字</button>
            <br />
            <input
                type="text"
                value={text}
                onChange={e => {
                    setText(e.target.value)
                }}
            />
        </>
    )
}
export default Example8
