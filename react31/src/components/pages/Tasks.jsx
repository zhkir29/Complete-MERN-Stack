import { useState } from "react";
import shortId from "../utils/shorid";
import Layout from "../Layout/Layout";
import CreateTask from "../tasks/createTask";
import ShowTask from "../tasks/ShowTask";
const Tasks = () =>{
    const [tasks,setTasks] = useState([]);
    const[visibility,setVisibility] = useState('all');
    const addNewTask = (text) => {
        if(text){
            const task =  {
                text,
                isCompleted:false,
                createdAt: new Date(),
                id: shortId()
            }
            setTasks([task,...tasks]);
        }else{
            alert('Invalid Input')
        };
        
    }
    return (
        <Layout>
            <h1>To Do List</h1>
            <CreateTask addNewTask={addNewTask}/>
            <ShowTask tasks = {tasks}/>
        </Layout>
    )
}

export default Tasks;