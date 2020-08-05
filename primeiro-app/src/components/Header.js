
import React from 'react';

const TodoList = ({ numTodos }) => (
    < div className='card-header' >
        <h1 className='card-header-title header'>
            You have {numTodos} Todos
    </h1>
    </div >
)

export default TodoList;
