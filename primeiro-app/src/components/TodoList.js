
import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo'


const TodoList = ({ task, onDelete }) => {
    const todos = task.map((todo, index) => {
        return <Todo content={todo} key={index} id={index} onDelete={onDelete} />
    })
    return (
        <div className='list-wrapper'>
            {todos}
        </div>
    );
}


TodoList.propTypes = {
    task: PropTypes.array,
    onDelete: PropTypes.func,
};

TodoList.defaultProps = {
    task: [],
    onDelete: null,
};

export default TodoList;
