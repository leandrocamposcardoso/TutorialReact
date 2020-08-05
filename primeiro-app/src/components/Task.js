import PropTypes from 'prop-types';
import RemoveButton from './RemoveButton'
import CheckButton from './CheckButton'
import React, { useState } from 'react';

const Task = ({ content, onDelete, id }) => {
    const [style, setStyle] = useState({})
    const checkHandler = () => {
        setStyle({
            textDecoration: 'line-through',
            color: 'red'
        })
    }
    return (
        <>
            <div className='list-item' style={style}>
                {content}
                <RemoveButton onDelete={() => { onDelete(id) }} />
                <CheckButton onCheck={checkHandler} />
                <hr />
            </div>
        </>
        )
}

Task.propTypes = {
    content: PropTypes.string,
    onDelete: PropTypes.func,
};

Task.defaultProps = {
    content: null,
    onDelete: null,
};

export default Task;
