import Done from "./Done"
import ToDo from "./ToDo"
import InProgress from "./InProgress"
import Error from "./Error";
import getFirebase from "../utils/Fetch";
import SubmitButton from "./SubmitButton";
import { useEffect, useState } from "react";


export function App() {
     const [submitbutton, setSubmitButton] = useState([]);
    const [firebase, setFireBase] = useState({done: [], todo:[], inprogress:[]});
    const [status, setStatus] = useState('');
    
    // useEffect(()=>{
    //     getFirebase().then(task=>{setFireBase(task)})
    // }, [])
    useEffect(()=>{
        getFirebase()
            .then(task =>{ 
                setFireBase(task);
                setStatus('success')
            })
            .catch( ()=>{
                setStatus('error');
            })

    }, [])

    return(
        <div>
         <SubmitButton setSubmitButton={setSubmitButton}/>
         <br/>
         {status === 'error' && <Error/>}
         {status === 'success' && firebase.done.map(taskDone => <Done key ={taskDone.id} taskDone={taskDone}/>)}
         {status === 'success' && firebase.inprogress.map(taskInProgress => <InProgress key ={taskInProgress.id} 
        taskInProgress={taskInProgress}/>)}
            {status === 'success' && firebase.todo.map(task => <ToDo key ={task.id} 
        task={task}/>)}
        </div>
    )
}