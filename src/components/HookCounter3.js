import React,{useState} from 'react'

function HookCounter3() {
    const [name,setName] = useState({firstname : '', lastname : ''})
    return (
        <form>
            <input type="text" value={name.firstname} onChange={(event)=>setName({ ...name,firstname: event.target.value})} />
            <input type="text" value={name.lastname} onChange={event => setName({...name,lastname: event.target.value})}/>
            <h2> First name = {name.firstname}</h2>
            <h2> Last name= {name.lastname}</h2>
        </form>
    )
}

export default HookCounter3
