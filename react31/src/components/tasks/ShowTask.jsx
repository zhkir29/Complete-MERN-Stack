const ShowTask = ({tasks}) =>{
    console.log(tasks)
    return(
        <div>
            {
                tasks.length>0 ? 
                <ul>
                    {tasks.map((task)=>{ return (<li key = {task.id}>{task.text}</li>)})}
                </ul>
                :'There is no task.'
            }
        </div>
    )
}

export default ShowTask;