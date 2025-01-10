import axios from "axios"
import { useState } from "react"

function Add(){
    const [titile,setTitle] = useState ('')
    const [dis,setDis] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/api/task/",{titile,dis}).then((res)=>{
            setTitle('')
            setDis('')
        }).catch(error=>console.log(error.message)
        )

    }

    return(
        <form onSubmit={handleSubmit} >
            <input type="text" name="title" id="task" value={titile} onChange={(e)=>setTitle(e.target.value)}/>
            <input type="text" name="description" id="description" value={dis} onChange={(e)=>setDis(e.target.value)}/>
            <input type="submit" value="add"/>

        </form>
    )
}
export default Add