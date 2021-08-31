import React,{useState,useEffect} from 'react'
import axios from 'axios'
function DataFetching() {
    let [post,setPost]=useState({})
    let [Id,setId]=useState(1)
    let [ButtonClick,setButtonClick]=useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${ButtonClick}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[ButtonClick])
    return (
        <div>
            <input type="text" value={Id} onChange={e=>setId(e.target.value)}/>
            <button onClick={()=>setButtonClick(Id)}>Click</button>
            {post.title}
            {/*<ul>
                {
                    post.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul>*/}
            
        </div>
    )
}

export default DataFetching
