import React from 'react';
import { BsBagPlus, BsFillEyeFill } from 'react-icons/bs';
import './style.css';

const AddToCardButton = ({ addToCard, quickView,onClick,disable }) => {
  return (
    <div  disabled style={{ margin: '0.5rem' }} onClick={onClick} >
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
