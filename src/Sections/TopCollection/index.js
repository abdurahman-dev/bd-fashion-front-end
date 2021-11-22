import React, { useEffect, useState } from 'react';
import ProductSlider from '../../Ul/GroupProductSlider';
import { useSelector } from 'react-redux';

const TopCollection = () => {
  const [showProduct, setShowProduct] = useState([]);
  const statePd = useSelector((state) => state.productReducer);

  useEffect(() => {
    setShowProduct(statePd.products);
  }, [statePd.products]);

  const catPd = (title) => {
    if (title === 'All') {
      setShowProduct(statePd.products);
    }
    if (title === 'Men') {
      setShowProduct(statePd.products.filter((item)=> item.productSubCategory === 'Men'))
    }
    if(title === 'Women')setShowProduct(statePd.products.filter((item)=> item.productSubCategory === 'Women'))
    if(title === 'Children')setShowProduct(statePd.products.filter((item)=> item.productSubCategory === 'Children'))

  };

  return (
    <div className=" py-20 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-2 capitalize">
          <h2 className="text-4xl font-semibold mb-2">Our Top Collection</h2>
          <p>Browse the collection of top Products</p>
        </div>
        <div className="text-center mb-2 capitalize text-xl font-medium cursor-pointer">
          <span className="mr-2  hover:underline" onClick={() => catPd('All')}>
            All
          </span>{' '}
          <span className="mr-2 hover:underline" onClick={() => catPd('Men')}>
            Men
          </span>{' '}
          <span className="mr-2 hover:underline" onClick={() => catPd('Women')}>
            Women
          </span>{' '}
          <span className="mr-2 hover:underline" onClick={() => catPd('Children')}>
            {' '}
            Children
          </span>
        </div>
        <ProductSlider products={showProduct} groupTitle={''} slidesToShow={4} />
      </div>
    </div>
  );
};

export default TopCollection;
