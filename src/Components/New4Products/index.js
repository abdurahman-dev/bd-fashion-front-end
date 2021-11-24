import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';

const New4Products = () => {
  const pds = useSelector((state) => state.productReducer.products);
  const newProduct = pds.slice(-4).reverse();
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between md:gap-4">
      <div className="">
        <div className="rounded-lg border my-4 p-3 shadow-sm border-gray-500 ">
          <p className="text-2xl font-semibold  mb-2">New Products</p>
          {newProduct &&
            newProduct.map((item, i) => (
              <Link to={`/product/${item._id}`}>
                <div className="flex gap-2 border-t py-1 text-black">
                  <div>
                    <img
                      src={item.productImage[0]?.url}
                      alt="product img"
                      className="h-12 w-12"
                    />
                  </div>
                  <div>
                    <h4>{item.productName}</h4>
                    <p>
                      {'price: $'}
                      {item.productPrice}
                    </p>
                    <ReactStars
                      count={5}
                      value={item.ratings}
                      size={24}
                      color2={'#ffd700'}
                      edit={false}
                    />
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default New4Products;
