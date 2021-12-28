import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router';
import { getCategory } from '../../Redux/Actions/Admin/category.action';
import InputRange from 'react-input-range';
import New4Products from '../New4Products/index';
import {
  handleFilterByCategory,
  handleShortChange,
  priceRangeFilter,
  productShowCase,
  searchProductHandle,
} from './productFilterHelper';
import 'react-input-range/lib/css/index.css';
import { Link } from 'react-router-dom';

const ProductsShow = () => {
  // let { catTitle } = useParams();

  const [allProduct, setAllProduct] = useState();
  const [product, setProduct] = useState([]);
  const [val, setVal] = useState({ min: 0, max: 2500 });
  const [category, setCategory] = useState([]);
  const [catFilter, setCatFilter] = useState('');

  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.productReducer);
  const { categories } = useSelector((state) => state.categoryReducer);

  useEffect(() => {
    dispatch(getCategory());
    if (products) {
      setAllProduct(products);
      setProduct(products);
    }
  }, [dispatch, products]);
  useEffect(() => {
    if (categories) {
      setCategory(categories);
    }
  }, [categories]);

  const handlePdOfCategory = (title) => {
    const pd = allProduct.filter((item) => item.productCategory === title || item.productSubCategory === title);
    return pd.length;
  };
  const handleFilterClear = () => {
    setCatFilter('')
    setProduct(allProduct);
    setVal({
      min: 0,
      max: 2500,
    });
  };
  return (
    <>
      {shopHeader(catFilter,handleFilterClear)}
      <div className=" bg-gray-100 py-12 px-4">
        <div className=" h-10 md:w-1/6 md:h-10 mb-4 ">
          <input
            type="text"
            onChange={(e) => {
              setProduct(searchProductHandle(e.target.value, allProduct));
            }}
            placeholder="Search Product"
            className="bg-gray-50 w-full h-full px-2 ring-2 ring-gray-500 ring-opacity-50 rounded-md outline-none focus:shadow-lg"
          />
        </div>
        <div className="flex flex-col-reverse justify-between md:flex-row md:gap-4">
          <div className="flex-initial w-5/5 md:w-1/5">
            <div className="  border-2 border-gray-400 shadow-sm rounded-md mb-4">
              <div className="p-2 pl-4">
                <div>
                  <h4 className="text-3xl font-medium border-b-2 mb-3 pb-2">
                    Category
                  </h4>
                  <ul>
                    {category.length > 0 &&
                      category.map((item, i) => (
                        <li
                          onClick={() => {
                            setCatFilter(item.name)
                            setProduct(
                              handleFilterByCategory(allProduct, item)
                            );
                          }}
                          key={i}
                          className="h-12 transition duration-300 ease-in-out rounded mb-1 border-2 border-gray-200 flex items-center justify-between px-2 cursor-pointer hover:border-blue-600 hover:text-blue-600 hover:shadow-sm "
                        >
                          <div className="font-medium">{item.name}</div>
                          <div className="bg-gray-400 text-gray-50 w-7 h-7 rounded-full flex justify-center items-center">
                            {handlePdOfCategory(item.name)}
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-2 border-gray-400 rounded-lg hover:shadow-lg ">
              <div className="p-4 pl-4">
                <div>
                  <h4 className="text-3xl font-medium border-b-2 pb-2 mb-3">
                    Fill by price
                  </h4>
                  <div className="pt-4">
                    <InputRange
                      maxValue={5000}
                      minValue={0}
                      value={val}
                      onChange={(a) => {
                        setProduct(priceRangeFilter(val, allProduct));
                        setVal({
                          min: a.min,
                          max: a.max,
                        });
                      }}
                    />
                  </div>
                  <div className="mt-5 flex justify-center">
                    <button
                      onClick={handleFilterClear}
                      className="px-4 py-2 bg-blue-800 text-gray-50 rounded-md uppercase"
                    >
                      Clear Filter
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <New4Products />
          </div>
          <div className="flex-initial  w-5/5 md:w-4/5">
            <div className="p-4  bg-gray-300">
              <div className="ml-auto flex justify-between ">
                <div>
                  <div className="bg-gray-50 px-2 py-1  rounded-lg ring-2 ring-gray-900 ring-opacity-40 ">
                    <span className="text-black text-sm">Sort By : </span>
                    <select
                      onChange={(e) => {
                        setProduct(handleShortChange(e.target.value, product));
                      }}
                      className="outline-none cursor-pointer focus:outline-none border-0 focus:ring-0"
                    >
                      short by
                      <option value="default">Featured</option>
                      <option value="ascending">Name: A-Z</option>
                      <option value="descending">Name: Z-A</option>
                      <option value="lowerPrice">Low Price</option>
                      <option value="upperPrice">Upper Price</option>
                      <option value="upperRating">Rating 5★</option>
                    </select>
                  </div>
                </div>
                <div className=" items-center hidden md:flex">
                
                  <button
                    className="text-white mx-2 self-center"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="3" height="18"></rect>
                      <rect x="5" width="3" height="18"></rect>
                      <rect x="10" width="3" height="18"></rect>
                      <rect x="15" width="3" height="18"></rect>
                    </svg>
                  </button>
                  <button
                    className="text-white mx-2 self-center transform rotate-90"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="3" height="18"></rect>
                      <rect x="5" width="3" height="18"></rect>
                      <rect x="10" width="3" height="18"></rect>
                      <rect x="15" width="3" height="18"></rect>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {productShowCase(product)}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsShow;

const shopHeader = (catFilter,handleFilterClear) => {
  return (
    <div className="bg-gray-300">
      <div className="container mx-auto">
        <div className="flex items-center h-auto py-4  md:h-48 w-full">
          <div className="flex justify-between w-full items-center h-full">
            <div>
              <h2 className="text-5xl font-semibold">Shop</h2>
              <div className="mt-4">
                <Link to="/" className="text-gray-600 hover:text-black">
                  Home
                </Link>{' '}
                {'>'} Shop
              </div>
            </div>
            <div>
              {catFilter && (
                <div className="bg-gray-50 text-2xl  px-4 py-1 group rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-2 transition duration-300 ease-in-out">
                  <span onClick={handleFilterClear} className="pr-2 text-gray-50 text-2xl group-hover:text-gray-900 cursor-pointer">
                    ×
                  </span>
                  {catFilter}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
