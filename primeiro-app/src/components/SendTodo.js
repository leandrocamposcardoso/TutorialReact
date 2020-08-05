import React, { useState } from 'react';
import PropTypes from 'prop-types';


const SendTodo = ({ handleSubmit }) => {
    const [term, setTerm] = useState('oi');


    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                className='input'
                placeholder='Enter Item'
                value={term}
                onChange={(e) => { setTerm(e.target.value) }}
            />
            <button className='button'>Submit</button>
        </form>
    )
}

SendTodo.propTypes = {
    handleSubmit: PropTypes.func,
    term: PropTypes.string,
};

SendTodo.defaultProps = {
    handleSubmit: null,
    term: '',

};

export default SendTodo;
