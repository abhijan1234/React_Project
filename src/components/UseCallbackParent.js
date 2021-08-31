import React,{useState,useCallback} from 'react'
import UseCallbackButton from './UseCallbackButton'
import UseCallbackCount from './UseCallbackCount'
import UseCallbackTitle from './UseCallbackTitle'
function UseCallbackParent() {
    const [age,setAge]=useState(20)
    const [salary,setSalary]=useState(20000)
    const ageHandler=useCallback(()=>{
        setAge(age+1)
    },[age])
    const salaryHandler=useCallback(()=>{
        setSalary(salary+5000)
    },[salary])
    return (
        <div>
            <UseCallbackTitle />
            <UseCallbackCount text="age" count={age}/>
            <UseCallbackButton handleClick={ageHandler}>Increase Age</UseCallbackButton>
            <UseCallbackCount text="salary" count={salary} />
            <UseCallbackButton handleClick={salaryHandler}>Increase Salary</UseCallbackButton>
        </div>
    )
}

export default UseCallbackParent
