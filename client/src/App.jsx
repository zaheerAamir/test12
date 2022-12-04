import React from "react"
import axios from 'axios'
import { useEffect } from "react"
import { useState } from "react"
import Data from "./Data"


function App(){

    const [arr, setarr] = useState([])
    const getData = async() => {
        const Data = await axios.post('http://localhost:8000/user')
        const response = await Data.data
        console.log(Data.status)
        console.log(response)
        setarr([response])
    }

    useEffect(() => {
        getData()
    },[])

    

    return(
        <>
           {arr[0] && arr[0].map(element => 
            <Data
                api={element.API}
                Desc={element.Description}
                Auth={element.Auth}
                HTTPS={element.HTTPS}
                Cors={element.Cors}
                Link={element.Link}
                Category={element.Category}
            />
           )}
            {/* {arr && arr.map(element => <div>{element}</div>)} */}
        </>
    )
}
export default App