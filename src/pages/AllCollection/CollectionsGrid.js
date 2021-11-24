import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategory } from '../../Redux/Actions/Admin/category.action';

const CollectionsGrid = () => {
  const [cat, setCategories] = useState([]);

  const dispatch = useDispatch();
  const catState = useSelector((state) => state.categoryReducer);
  const pdState = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(getCategory());
   
  }, [dispatch]);

  useEffect(() => {
   setCategories((catState.categories).reverse())
  }, [catState.categories]);


  const totalProduct = (catId) => {
    return pdState.products.filter((item, i) => item.productCategory === catId);
  };
  return (
    <div className="py-12">
      {/* page Title */}
      <div className="text-center">
        <p className="mb-2 text-5xl font-medium text-black">
          Collections
        </p>
        <p>Choose Your needs</p>
      </div>
      {/* grid */}

      <div className="container  mx-auto grid gap-4  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-4">
        
        {
          cat.reverse().map((item,i)=>{
            return(
              <div key={i} className="pt-5 cursor-pointer ">
            <Link to={``}>
              <div className='text-black'>
                <div className="bg-gray-300 p-3 hover:shadow-2xl transition duration-300 ease-in-out">
                  <img
                    src={item.imageUrl}
                    alt=""
                    className="object-fill rounded h-60 w-full"
                  />
                </div>
                <div className="px-5 py-2">
                  <div>
                    <p className="text-2xl font-medium">{item.name}</p>
                  </div>
                  <div>{totalProduct(item.name).length} total product</div>
                </div>
              </div>
            </Link>
          </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default CollectionsGrid;
