import React from 'react'

const AddTask = (props) => {
    const [taskInput, setTaskInput] = React.useState('')

    const handleInputChange = (event) => setTaskInput(event.target.value)

    const handleAddTask = () => {
        props.addTask(taskInput)
        setTaskInput('')
    }

    return (
        <div className='addForm'>
            <input className='addForm_input' type="text" placeholder={ props.placeholder } value={ taskInput } onChange={ handleInputChange }/>
            <button className='addForm_btn' onClick={ handleAddTask }>add task</button>
        </div>
    )
}

export default AddTask