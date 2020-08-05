
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';


const CheckButton = ({ onCheck, icon }) => {

    const style = {
        cursor: "pointer",
        marginLeft: "10px",
    };

    return (<FontAwesomeIcon icon={faCheck} onClick={onCheck} style={style} />)
}

CheckButton.propTypes = {
    onCheck: PropTypes.func,
};

CheckButton.defaultProps = {
    onCheck: null,
};

export default CheckButton;
