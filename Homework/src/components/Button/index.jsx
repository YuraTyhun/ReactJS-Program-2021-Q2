import React from 'react';
import PropTypes from 'prop-types';

const Button = ({title, className, children, onClick, type, disabled}) => (
    <button 
      onClick={onClick} 
      type={type} 
      className={className} 
      disabled={disabled}
    >
      {title}{children}
    </button>
);

Button.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
    type: PropTypes.string,
    disabled: PropTypes.bool
};

Button.defaultProps = {
  className: '',
  title: '',
  children: '',
  onClick: () => {},
  type: 'button',
  disabled: false
};

export default Button;