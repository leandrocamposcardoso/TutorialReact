
import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ content, onDelete, id }) => (
    <div className='list-item'>
        {content}
        <button className="delete is-pulled-right" onClick={() => {onDelete(id)}} >x</button>
    </div>
)

Todo.propTypes = {
    content: PropTypes.string,
    onDelete: PropTypes.func,
};

Todo.defaultProps = {
    content: null,
    onDelete: null,
};

export default Todo;
