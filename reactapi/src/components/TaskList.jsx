import { useEffect, useState } from "react"
import axios from 'axios'


function TaskList(){
    const [data,setData]=useState([])
    const [editing,setEditing] = useState(false)
    const [editDtls,setEditDtls] = useState({id:'',titile:'',dis:''})
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/task/").then(res=>{
            console.log(res.data);
            setData(res.data)
        }).catch(error=>console.log(error.message))
    },[])
    const edittask = (task)=>{
        setEditing(true)
        setEditDtls(task)

    }
    const Updatedtls = (id,task)=>{
        setEditing(false)
        axios.put(`http://127.0.0.1:8000/api/task/${id}/`,task).then(res=>{
            setData(data.map((prv)=>prv.id===id? res.data : prv))
        }).catch(error=>console.log(error.message)
        )
    }
    return(
        <>
        <div className="container">
            
        <table className="table">
            <thead>
            <tr>
                <th>Task</th>
                <th>Dis</th>
            </tr>
            </thead>
            <tbody>
            {data.map((value,index)=>(
                <tr key={index}>
                <td>{value.titile}</td>
                <td>{value.dis}</td>
                <td><button onClick={()=>{edittask(value)}}className="btn btn-outline-primary">Edit</button></td>
                <td><button onClick={()=>{}}className="btn btn-outline-danger">Delete</button></td>                
                </tr>
            ))}
            </tbody>
        </table>
        {editing ? <EditForm curTask={editDtls} updatetask={Updatedtls}/>:null}
        </div>
        </>
    )
}

const EditForm=({curTask,updatetask})=>{
    console.log('EditForm',curTask);
    
    const [task,setTask] = useState(curTask)

    const handleChange = (e) =>{
        const {name,value} = e.target
        setTask({...task,[name]:value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        updatetask(task.id,task)
    }    

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" id="task" value={task.titile} onChange={handleChange}/>
                <input type="text" name="dis" id="dis" value={task.dis} onChange={handleChange}/>
                <input type="submit" value="Update" />
            </form>
        </>
    )
}
export default TaskList