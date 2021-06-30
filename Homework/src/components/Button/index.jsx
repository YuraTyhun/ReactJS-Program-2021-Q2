import React from 'react';
import PropTypes from 'prop-types';

const Button = ({title, className, children, onClick, type}) => (
    <button onClick={onClick} type={type} className={className}>{title}{children}</button>
);

Button.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
    type: PropTypes.string
};

Button.defaultProps = {
  className: '',
  title: '',
  children: '',
  onClick: () => {},
  type: 'button'
};

export default Button;