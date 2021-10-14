import React from 'react';
import { Link } from 'react-router-dom';
import { BsBagPlus, BsFillEyeFill } from 'react-icons/bs';
import './style.css';

const AddToCardButton = ({ href, addToCard, quickView }) => {
  return (
    <div  style={{ margin: '0.5rem' }}>
      <div className="addToCardButton">
        {addToCard && (
          <BsBagPlus style={{ fontSize: '1.2rem', color: '#fff' }} />
        )}
        {quickView && (
          <BsFillEyeFill style={{ fontSize: '1.5rem', color: '#fff' }} />
        )}
      </div>
    </div>
  );
};

export default AddToCardButton;
