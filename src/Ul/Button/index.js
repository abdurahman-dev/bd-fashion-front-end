import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const MainButton = ({ title, href }) => {
  return (
    <div className='btnMain'>
       <Link to={href? href : null} >
       <div className="mainButton">
       {title ? title : 'button'}
        <span className='overLay'></span>
        </div>
       
        
        </Link>
      
       
    </div>
  );
};

export default MainButton;
