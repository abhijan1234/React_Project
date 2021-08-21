import React from 'react'
import ChildNameList from './ChildNameList'

function NameList() {
    const arr=['Yuri','babi']
    const name=arr.map(x =><h2>{x}</h2>)
    return (
        <ChildNameList list={name} />
    )
}

export default NameList
