import React,{useState,useEffect} from 'react'

function UseEffectOne() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('')

    const clickHandle=(event)=>{
        setCount(count+1)
        console.log(count)
    }
    useEffect(()=>{
        console.log(`Updating`)
        document.title=`You clicked ${count} times`
    },[count])
    return (
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={clickHandle}>Click {count}</button>
        </div>
    )
}

export default UseEffectOne
