import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import RelatedProducts from '../RelatedProducts';
import {  useSelector } from 'react-redux';
import SingleProductInfo from '../SingleProductInfo';

const ProductDetails = () => {
  const [pd,setPd]=useState({})
  const pdId = useParams();
  const pds = useSelector(
    (state) => state.productReducer.products
  );
  useEffect(() => {
    if(pds){
      const product = pds.find((item) => item._id === pdId.id);
      if(product){
        setPd(product)
      }
    }
  }, [pdId.id, pds]);

  return (
    <>
    <div className="py-20">
    <div className="container">
    <SingleProductInfo pd={pd}/>
    </div>
    </div>
      {/* <RelatedProducts catId={productReducer.category} /> */}
    </>
  );
};

export default ProductDetails;

