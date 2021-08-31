import React,{useReducer} from 'react'

const initialState={
    firstCount : 0
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment' :
            return {firstCount:state.firstCount+action.value}
        case 'decrement' :
            return {firstCount:state.firstCount-action.value}
        case 'reset':
            return initialState
    }
}

function UseReducerTwo() {
    const [newState,dispatch]=useReducer(reducer,initialState)
    return (
        <div>
            <div>Count = {newState.firstCount}</div>
            <button onClick={()=>dispatch({type : 'increment',value : 1})}>Increment</button>
            <button onClick={()=>dispatch({type : 'decrement',value : 1})}>Decrement</button>
            <button onClick={()=>dispatch({type : 'increment',value : 5})}>Increment 5</button>
            <button onClick={()=>dispatch({type : 'decrement',value :5})}>Decrement 5</button>
            <button onClick={()=>dispatch({type : 'reset'})}>Reset</button>

        </div>
    )
}

export default UseReducerTwo
