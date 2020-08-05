import React, { useState } from 'react';
import PropTypes from 'prop-types';


const SendTask = ({ handleSubmit }) => {
    const [term, setTerm] = useState('');

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                className='input'
                placeholder='Inserir uma tarefa'
                value={term}
                onChange={(e) => { setTerm(e.target.value) }}
            />
            <button className='btn btn-success'>Adicionar</button>
        </form>
    )
}

SendTask.propTypes = {
    handleSubmit: PropTypes.func,
    term: PropTypes.string,
};

SendTask.defaultProps = {
    handleSubmit: null,
    term: '',

};

export default SendTask;
