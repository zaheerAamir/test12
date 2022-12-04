import React from 'react'

function Data(props){
    return(
        <>
           <div className='block'>
                <p>API: {props.api}</p>
                <p>Description: {props.Desc}</p>
                <p>Auth: {props.Auth}</p>
                <p>HTTPS: {props.HTTPS}</p>
                <p>Cors: {props.Cors}</p>
                <p>Link: {props.Link}</p>
                <p>Category: {props.Category}</p>
            </div>
        </>
    )
}

export default Data