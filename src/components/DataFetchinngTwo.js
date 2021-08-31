import React,{useReducer,useEffect} from 'react'
import axios from 'axios'
const initialState={
    loading : true,
    error: '',
    post :''
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'FETCH_SUCCESSFUL':
            return {
                loading:false,
                error:'',
                post:action.payload
            }
        case 'FETCH_FAIL':
            return {
                loading:false,
                error:'something went wrong',
                post:''
            }
    }
}

function DataFetchinngTwo() {
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response =>{
            dispatch({type:'FETCH_SUCCESSFUL',payload:response.data})
        })
        .catch(error=>{
            dispatch({type:'FETCH_FAIL'})
        })
    },[])
    const [newState,dispatch]=useReducer(reducer,initialState)
    return (
        <div>
            {newState.loading ? 'Loading':newState.post.title}
            {newState.error ? newState.error : null}

        </div>
    )
}

export default DataFetchinngTwo
