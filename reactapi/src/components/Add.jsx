import axios from "axios"
import { usestate } from "react"

function Add(){
    const [titile,setTitile] = usestate('')
    const [dis,setDis] = usestate('')

    const handlesubmit = (e)=>{
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/api/task/',{titile,dis}).then((res)=>{
            setTitile('')
            setDis('')
        }).catch(error=>console.log(error.message)
        )
    }


    return(
        <form onSubmit={handlesubmit}>
            <input type="text" name="titile" id="task" value={titile} onChange={(e)=>setTitile(e.target.value)}/>
            <input type="text" name="description" id="discription" value={dis} onChange={(e)=>setDis(e.target.value)} />
            <input type="submit" value="add" />
        </form>
    )

}

export default Add