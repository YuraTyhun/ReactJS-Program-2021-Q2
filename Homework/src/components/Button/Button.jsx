import React from 'react';
import PropTypes from 'prop-types';

const Button = ({title, className, children, onClick}) => (
    <button onClick={onClick} className={className}>{title}{children}</button>
);

Button.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func
};

Button.defaultProps = {
  className: '',
  title: '',
  children: '',
  onClick: () => {}
};

export default Button;