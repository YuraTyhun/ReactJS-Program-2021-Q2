import React from 'react';
import PropTypes from 'prop-types';

import './ListItem.scss';

const ListItem = ({ title, isActive, setFilter }) => {
    let className = isActive ? 'list-item active' : 'list-item';

    return (
        <li className={className} onClick={setFilter}>{title}</li>
    );
}

ListItem.propTypes = {
    title: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    setFilter: PropTypes.func.isRequired
};

export default ListItem;

