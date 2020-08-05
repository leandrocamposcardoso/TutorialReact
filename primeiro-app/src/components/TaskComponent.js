import React, { useState } from 'react';
import Header from './Header'
import TaskList from './TaskList'
import SendTask from './SendTask'
import Message from './ErrorLog'

const TaskComponent = () => {
    const [tasks, setTasks] = useState(['Tarefa 1', 'Tarefa 2', 'Tarefas 3']);
    const [message, setMessage] = useState('')

    const validation = (task) => {
        if (task === null || task === "") {
            setMessage('*Valor não pode ser nulo')
            return false
        }
        else if (tasks.includes(task)) {
            setMessage('*Elemento já existe na lista')
            return false
        }
        setMessage('')
        return true
    }

    const handleDelete = (index) => {
        const newArr = [...tasks];
        newArr.splice(index, 1);
        setTasks(newArr);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const value = e.target[0].value
        if (validation(value) === false) {
            return
        }
        const newArr = [...tasks, e.target[0].value]
        setTasks(newArr);

    }

    return (
        <div className='wrapper'>
            <div className='card frame'>
                <Header numTodos={tasks.length} />
                <TaskList task={tasks} onDelete={handleDelete} />
                {
                    tasks.length === 0 && <Message message='Sem tarefas na lista' />
                }
                <SendTask handleSubmit={handleSubmit} />
                <Message message={message} />

            </div>
        </div>
    )
}

export default TaskComponent;
