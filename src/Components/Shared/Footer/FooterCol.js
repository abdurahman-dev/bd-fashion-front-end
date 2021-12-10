import React from 'react';
import { Link } from 'react-router-dom';

const FooterCol = ({ item, title }) => {
  const scrollControl=()=>{
    window.scrollTo({
        top: 100,
        left: 100,
        behavior: 'smooth'
      });
  }
  return (
    <div>
      <div className='mb-2'>
          <h3 className='text-black text-2xl font-medium'>{title}</h3>
      </div>
      <div>
        <ul>
          {item.map((item) => (
            <li key={Math.random()} onClick={scrollControl} className='hover:underline'>
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterCol;
