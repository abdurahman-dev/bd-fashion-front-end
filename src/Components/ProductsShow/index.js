import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ProductCard from '../../Ul/ProductCard';
import { category } from '../../untils/Data/category';
import products from '../../untils/Data/products';

const ProductsShow = () => {
  const query = useParams();
  const findCategory = query.categoryId;
  const [title, setTitle] = useState('');
  const [product, setProduct] = useState(null);
  const [gridCol, setGridCol] = useState(4);
  const [brand, setBrand] = useState([]);

  const FindBrand = () => {
    let brands = [];
    products.forEach((item, i) => (brands[i] = item.brand));
    return [...new Set(brands)];
  };
  useEffect(() => {
    setBrand(FindBrand());
    const categories = category.find((item, i) => item.id === findCategory);
    const product = products.filter((item) => item.category === findCategory);
    setTitle(categories.categoryTitle);
    setProduct(product);
    if (product.length <= 2) {
      setGridCol(2);
      return;
    }
    // eslint-disable-next-line eqeqeq
    if (product.length == 3) {
      setGridCol(3);
      return;
    } else {
      setGridCol(4);
    }
  }, [findCategory]);

  const handleFeatureChange = (e) => {
    const catProducts =  products.filter((item) => item.category === findCategory)
    if (e === 'default') {
      setProduct(catProducts);
      if (catProducts.length <= '2') {
        setGridCol(2);
        return;
      }
      if (catProducts.length === 3) {
        setGridCol(3);
        return;
      } else {
        setGridCol(4);
      }
    } else if (
      e === 'onSale' ||
      e === 'trending' ||
      e === 'flashSale' ||
      e === 'new'
    ) {
      const product = catProducts.filter((item) => item.tags[e] === true);
      setProduct(product);
      if (product.length <= '2') {
        setGridCol(2);
        return;
      }
      if (product.length === 3) {
        setGridCol(3);
        return;
      } else {
        setGridCol(4);
      }
    } else {
      const pSlug = [];
      catProducts.forEach((item, i) => (pSlug[i] = item.slug));
      pSlug.sort();
      const stPd = [];
      pSlug.forEach(
        (item, i) => (stPd[i] = catProducts.find((pd, i) => pd.slug === item))
      );
      // ascending
      if (e === 'ascending') {
        setProduct(stPd);
        if (stPd.length <= '2') {
          setGridCol(2);
          return;
        }
        if (stPd.length === 3) {
          setGridCol(3);
          return;
        } else {
          setGridCol(4);
        }
      }
      if (e === 'descending') {
        setProduct(stPd.reverse());
        if (stPd.reverse().length <= '2') {
          setGridCol(2);
          return;
        }
        if (stPd.reverse().length === 3) {
          setGridCol(3);
          return;
        } else {
          setGridCol(4);
        }
      }

      // Lower Price to Higher
      const lowerPd = catProducts.sort((a, b) => (a.price > b.price ? 1 : -1));
      if (e === 'lowerPrice') {
        setProduct(lowerPd);
        if (lowerPd.length <= '2') {
          setGridCol(2);
          return;
        }
        if (lowerPd.length === 3) {
          setGridCol(3);
          return;
        } else {
          setGridCol(4);
        }
      }
      if (e === 'upperPrice') {
        setProduct(lowerPd.reverse());
        if (lowerPd.reverse().length <= '2') {
          setGridCol(2);
          return;
        }
        if (lowerPd.reverse().length === 3) {
          setGridCol(3);
          return;
        } else {
          setGridCol(4);
        }
      }
    }
  };

  const handleClick = (count) => {
    setGridCol(count);
  };


  return (
    <div className="container mx-auto bg-gray-200 py-12">
      <div className="flex flex-col md:flex-row">
        <div className="flex-initial border-2 border-white order-2 md:order-1 w-5/5 md:w-1/5 ">
          <div className="pt-4 pl-4">
            <h1> FILTER BY</h1>
            <div>
              <h4 className="text-lg font-medium"> Categories</h4>
              <ul>
                {category.map((item, i) => {
                  return (
                    <Link
                      key={i}
                      to={`/category/${item.id}`}
                     
                    >
                      <li className="my-1 cursor-pointer hover:text-blue-600">
                        {item.categoryTitle}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-initial order-1 md:order-2 bg-white w-5/5 md:w-4/5">
          <div className="text-center text-4xl font-bold my-2">{title}</div>
          <div className="p-4 bg-gray-400">
            <div className="ml-auto flex justify-between ">
              <div>
                <div>
                  <span className="text-white">Sort By : </span>

                  <select
                    onChange={(e) => handleFeatureChange(e.target.value)}
                    style={{ border: '2px solid #fff', borderRadius: '3px' }}
                    className="focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="default">Feature</option>
                    <option value="onSale">On Sale</option>
                    <option value="new">New</option>
                    <option value="flashSale">flash Sale</option>
                    <option value="trending">Trending</option>
                    <option value="ascending">Name: A-Z</option>
                    <option value="descending">Name: Z-A</option>
                    <option value="lowerPrice">Price: lower price</option>
                    <option value="upperPrice">Price: upper price</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center hidden md:block">
                <button
                  onClick={() => handleClick(2)}
                  className="text-white mx-2"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="7.5" height="18"></rect>
                    <rect x="10.5" width="7.5" height="18"></rect>
                  </svg>
                </button>
                <button
                  onClick={() => handleClick(3)}
                  className="text-white mx-2"
                >
                  {/* <BsGrid3X2GapFill style={{fontSize: '1.5rem', color: '#fff'}}/> 
                
                */}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="4.5" height="18"></rect>
                    <rect x="6.75" width="4.5" height="18"></rect>
                    <rect x="13.5" width="4.5" height="18"></rect>
                  </svg>
                </button>
                <button
                  onClick={() => handleClick(4)}
                  className="text-white mx-2 self-center"
                >
                  {/* <BsGrid3X3GapFill style={{fontSize: '1.1rem', color: '#fff'}}/> */}
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
          <div className="p-4">
            <div
              className={`grid gap-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-${gridCol}`}
            >
              {product &&
                product.map((item, i) => (
                  <ProductCard product={item} key={i} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsShow;
