import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../Ul/ProductCard';

const NewProducts = () => {
  const [products, setProducts] = useState([]);

  const pd = useSelector((state) => state.productReducer);
  useEffect(() => {
    if (pd.products.length > 0) {
      setProducts(pd.products.slice(-8).reverse());
    }
  }, [pd.products]);

  return (
    <div className=" py-12">
      <div className="container mx-auto">
        <div className="text-center mb-2 capitalize">
          <h2 className="text-4xl font-semibold mb-2">New Arrivals</h2>
          <p>Browse the collection of top Products</p>
        </div>
        <div className=''>
          {
            products.length>0 ? <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
              {
                products.map((item,i)=>{
                  return(
                    <ProductCard key={i} product={item}/>
                  )
                })
              }
            </div>: <div><h4>No Product</h4></div>
          }
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
