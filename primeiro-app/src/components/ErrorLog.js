
import React from 'react';
import PropTypes from 'prop-types';


const ErrorLog = ({ message }) => {
    const style = {
        color: "red",
        fontSize: 16,
    };
    return (
        <p style={style}>{message}</p>
    )
}

ErrorLog.propTypes = {
    message: PropTypes.string,
};

ErrorLog.defaultProps = {
    message: '',
};

export default ErrorLog;
