import React, { useState, useCallback, useEffect } from "react"
function useWinSize() {
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    })

    // 这个方法使用useCallback，目的是为了缓存方法(useMemo是为了缓存变量)。
    const onResize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
    })
    useEffect(() => {
        window.addEventListener("resize", onResize)
        return () => window.removeEventListener("resize", onResize)
    }, [])
    return size
}

function Example9() {
    const size = useWinSize()
    return <div>页面Size:{size.width}</div>
}
export default Example9
