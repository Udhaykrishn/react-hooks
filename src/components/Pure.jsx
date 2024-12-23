import React from 'react'

const Pure = React.memo((({name})=>{
    console.log(name)
    return(
        <>
            <h2>{name}</h2>
        </>
    )
}))

export default Pure
