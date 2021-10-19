import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const MainButton = ({ title, href }) => {
  return (
    <div style={{ margin: '1rem 0' }}>
        <Link to={href} className="mainButton">
        {title ? title : 'button'}
        <span className='overLay'></span>
        </Link>
    </div>
  );
};

export default MainButton;
