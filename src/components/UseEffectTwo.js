import React,{useState,useEffect} from 'react'

function UseEffectTwo() {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)
    const logMousePosition=(event)=>{
        console.log('Mouse Event')
        setX(event.clientX)
        setY(event.clientY)
    }
    useEffect(()=>{
        console.log("UseEffect")
        window.addEventListener('mousemove',logMousePosition)

        return ()=>{
            console.log("CleanUp")
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])
    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default UseEffectTwo
