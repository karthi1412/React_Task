import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'

function UseMemo() {

    const [count, setCount] = useState(1);

    const result = useMemo(() => {
        return count * count * count
    })

    return (
        <div>
            <h4>Usememo</h4>
            <h2>Count : {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <h2>Result : {result}</h2>
        </div>
    )
}

export default UseMemo