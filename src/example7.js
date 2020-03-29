import React, { useState, useMemo } from "react"
//父组件任何一个状态发生改变  子组件都会进行重新渲染
//可以使用useMemo解决 重复渲染的问题
function Example7() {
    const [xiaohong, setXiaohong] = useState("小红在待客状态")
    const [zhilin, setZhiling] = useState("志玲在待客状态")
    return (
        <div>
            <button
                onClick={() => {
                    setXiaohong(Math.round(Math.random()))
                }}>
                小红
            </button>
            <button
                onClick={() => {
                    setZhiling(Math.round(Math.random() * 10))
                }}>
                志玲
            </button>
            <ChildComponent name={xiaohong}> {zhilin}</ChildComponent>
        </div>
    )
}

function ChildComponent({ name, children }) {
    function changeXiaohong(name) {
        console.log("她来了小红她来了")
        return name + "她来了"
    }
    //使用useMemo进行 判断 当name：即点击小红   进行改变的时候 才会渲染这个方法
    const actionXiaohong = useMemo(() => changeXiaohong(name), [name])
    return (
        <>
            <div>{actionXiaohong}</div>
            <div>{children}</div>
        </>
    )
}

export default Example7
