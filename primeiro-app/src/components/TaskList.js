
import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task'


const TaskList = ({ task, onDelete }) => {
    const tasks = task.map((todo, index) => {
        return <Task content={todo} key={index} id={index} onDelete={onDelete} />
    })
    return (
        <div className='list-wrapper'>
            {tasks}
        </div>
    );
}

TaskList.propTypes = {
    task: PropTypes.array,
    onDelete: PropTypes.func,
};

TaskList.defaultProps = {
    task: [],
    onDelete: null,
};

export default TaskList;
