import React,{useState} from 'react'
import UseEffectTwo from './UseEffectTwo'
function UseEffectThree() {
    const [display,setDisplay]=useState(true)
    return (
        <div>
            <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
            {display && <UseEffectTwo />}
        </div>
    )
}

export default UseEffectThree
