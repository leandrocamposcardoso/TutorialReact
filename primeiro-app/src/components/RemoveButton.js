
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';


const RemoveButton = ({ onDelete }) => {
    const style = {
        cursor: "pointer",
        marginLeft: "10px",
    };
    return (<FontAwesomeIcon icon={faTrash} onClick={onDelete} style={style}/>)
}

RemoveButton.propTypes = {
    onDelete: PropTypes.func,
};

RemoveButton.defaultProps = {
    onDelete: null,
};

export default RemoveButton;
