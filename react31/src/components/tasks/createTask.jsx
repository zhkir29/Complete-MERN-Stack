import { useState } from "react";
const CreateTask = ({addNewTask}) =>{
    const [text,setText] = useState('Sample Task')

    return(
        <div>
            <label htmlFor = 'task'></label>
            <input id='task' placeholder="Type your text" value = {text} onChange={(event)=>setText(event.target.value)}/>
            <button onClick={()=>{addNewTask(text); setText('')}}>Add Task</button>
        </div>
    )
}

export default CreateTask;