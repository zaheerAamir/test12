import React from "react"
import axios from 'axios'


async function App(){
    const response = await axios.post('http://localhost:8000/user')
    console.log(response.data)
    return(
        <>
           <p>Hello</p>
        </>
    )
}
export default App