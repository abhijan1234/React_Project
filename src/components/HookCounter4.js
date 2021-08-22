import React,{useState} from 'react'

function HookCounter4() {
    const[number,setNum]=useState([])
    const setNumber=()=>{
        setNum([...number,{
            id: number.length,
            value: Math.floor(Math.random()*10)+1
        }
        ])
    }
    return (
        <div>
            <button onClick={setNumber}>Click</button>
            <ul>
                {number.map(num=>(
                    <li>key={num.id}{num.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default HookCounter4
