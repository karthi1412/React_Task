import React, { useState } from 'react'

function Statetask() {

    const [number, setNumber] = useState(0);

    const [person, setPerson] = useState("Karthick")
    const [age, setAge] = useState(25)
    const [course, setCourse] = useState("Frontend")

    const [user,setUser] = useState({
        employee:"id01",
        name:"John",
        department:"Tech",
        designation:"Developer",
        salary:20000
    });

    function changesal(){
        setUser({
            ...user,
            salary:30000
        })
    }


    return (
        <div>
            <div>
                <h3>Number Count : {number}</h3>
                <button onClick={() => setNumber(number + 1)}>Increment</button>
                <button onClick={() => setNumber(number - 1)}>Decrement</button>
                <button onClick={() => setNumber(0)}>Reset</button>
            </div>
            <div>
                <p>Name : {person}</p>
                <button onClick={()=>{setPerson("Jd")}}>Change Name</button>
                <p>Age : {age}</p>
                <button onClick={()=>{setAge(26)}}>Change Age</button>
                <p>Course : {course}</p>
                <button onClick={()=>{setCourse("FullStack")}}>Change Course</button>
            </div>
            <div>
                <p>Employee : {user.employee}</p>
                <p>Name : {user.name}</p>
                <p>Department : {user.department}</p>
                <p>Designation : {user.designation}</p>
                <p>Salary : {user.salary}</p>
                <button onClick={changesal}>Change Salary</button>
            </div>
        </div>
    )
}

export default Statetask