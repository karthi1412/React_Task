import React, { useEffect, useRef } from 'react'

function UseRef() {
    const inputRef = useRef(null);

    const valueRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    }, []);
    const clearfun = () => {
        valueRef.current.value = ""
    }

    return (
        <div>
            <input type='text' placeholder='Enter your name'
                ref={inputRef}
            ></input>
            <hr></hr>
            <input type='text' placeholder='Enter your name'
                ref={valueRef}
            ></input>
            <button onClick={clearfun}> Clear Input</button>
        </div>
    )
}

export default UseRef