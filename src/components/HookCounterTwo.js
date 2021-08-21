import React,{useState} from 'react'

function HookCounterTwo() {
    const initial=0
    const [count,setCount]=useState(initial)
    return (
        <div>
            Count : {count}
            <button onClick={() => setCount(prevCount => prevCount+1)}>increase</button>
            <button onClick={() => setCount(prevCount => prevCount-1)}>decrease</button>
            <button onClick={()=> setCount(initial)}>reset</button>
        </div>
    )
}

export default HookCounterTwo
