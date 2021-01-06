import React from 'react'


const Task = (props) => {

   

    return (
        <div className='task'>
            <ul>
                {props.tasks.map(
                    task =>
                    <li key={task.item}>
                        {task.item}
                     <span>
                         <button>Done</button>
                     </span>   
                    </li>
                )}
            </ul>        
        </div>
    )
}

export default Task