import React, { useEffect, useState } from 'react'

function UseEffect() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState();

    const [time, setTime] = useState(0);



    useEffect(() => {
        document.title = `You clicked ${count} times`
    }, []);

    useEffect(() => {
        let timer = setTimeout(() => {
            setTime((time) => time + 1)
        },1000)
        return (() => clearInterval(timer))
    },[]);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
            <input type='text' placeholder='Enter Your Name' onChange={(e) => setName(e.target.name)}></input>
            
            <h2>It have rendered {time} times</h2>

        </div>
    )
}

export default UseEffect