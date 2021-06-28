import React from 'react';
import PropTypes from 'prop-types';

import './ListItem.scss';

const ListItem = ({ title }) => (
    <li className="list-item">{title}</li>
);

ListItem.propTypes = {
    title: PropTypes.string
};

export default ListItem;

