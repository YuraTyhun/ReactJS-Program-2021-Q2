/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  title, className, onClick, type, disabled, iconSrc, iconAlt
}) => (
  <button
    onClick={onClick}
    type={type}
    className={className}
    disabled={disabled}
  >
    {title}
    { iconSrc && <img src={iconSrc} alt={iconAlt} /> }
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  iconSrc: PropTypes.string,
  iconAlt: PropTypes.string
};

Button.defaultProps = {
  className: '',
  title: '',
  onClick: () => {},
  type: 'button',
  disabled: false,
  iconSrc: '',
  iconAlt: ''
};

export default Button;
