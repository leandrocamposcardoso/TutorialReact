
import React from 'react';

const TodoList = ({ numTodos }) => (
    <div className='card-header'>
        <h1>Tarefas</h1>
        <h3 className='card-header-title header'>
            Você possui  {numTodos} tarefas
    </h3>
    </div>
)

export default TodoList;
