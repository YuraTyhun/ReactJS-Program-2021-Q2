import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';
import Logo from '../Logo';
import notFoundLogo from '../../assets/images/not-found.png';

import './NotFoundPage.scss';

const NotFoundPage = () => (
    <div className="not-found-page-container">
        <div className="not-found-page-header">
            <Logo />
        </div>
        <div className="not-found-page-main">
            <h1 className="not-found-page-title">Page Not Found</h1>
            <img src={notFoundLogo} alt="not found" className="not-found-page-logo"/>
            <Link to="/">
                <Button title="GO BACK TO HOME" className="not-found-page-btn"/>
            </Link>
        </div>
        <div className="not-found-page-footer footer-container">
            <Logo />
        </div>
    </div>
);

export default NotFoundPage;