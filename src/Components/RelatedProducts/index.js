import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Redux/Actions/product.action';
import ProductSlider from '../../Ul/GroupProductSlider';
import products from '../../untils/Data/products';

const RelatedProducts = ({ catId }) => {
  const [pds, setPds] = useState([]);
  const dispatch = useDispatch();
  const pdss = useSelector((state) => state.productReducer.products);
  useEffect(() => {
    dispatch(getProducts());
    const pd = pdss.filter((item) => item.category === catId);
    setPds(pd)
  }, [dispatch,catId]);


  console.log(pds);
  // const pd = products.filter((item) => item.category === catId);
  return (
    <div className="py-1">
      <div className="container mx-auto">
        <div className="text-black text-4xl font-bold">Related Products</div>
        <ProductSlider products={products} slidesToShow={4} />
        <div>
        {pds && pds.map(()=><p>item from mongodb...</p>)}
      </div>
      </div>
      
    </div>
  );
};

export default RelatedProducts;
