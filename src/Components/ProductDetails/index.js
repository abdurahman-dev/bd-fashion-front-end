import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Slider from 'react-slick';
import products from '../../untils/Data/products';
import RelatedProducts from '../RelatedProducts';
import ReactStars from 'react-rating-stars-component';
import { category as Category } from '../../untils/Data/category';
import { BsTagFill, BsTag } from 'react-icons/bs';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { storeProduct } from '../../untils/Cart';
import { getSingleProduct } from '../../Redux/Actions/product.action';

const ProductDetails = () => {
  const pdId = useParams();
  const dispatch = useDispatch();
  const productReducer = useSelector(
    (state) => state.productSingleReducer.product
  );
  console.log(productReducer);
  useEffect(() => {
    dispatch(getSingleProduct('6172d59326432c58b84c9136'));
  }, [dispatch]);

  const [qntCount, setQntCount] = useState(1);

  const product = products.find((item) => item.slug === pdId.id);
  const images = product.image;

  const {
    name,
    id,
    stock,
    rating,
    discount,
    reviews,
    price,
    category,
    brand,
    description,
  } = product;
  const discountPrice =
    Number(discount) > 0 && ((Number(discount) / 100) * price).toFixed();
  const settings = {
    customPaging: function (i) {
      return (
        <a href=" ">
          <img src={images[i].Img} alt="" className="h-16 w-full" />
        </a>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    draggable: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const firstExample = {
    size: 30,
    value: rating,
    edit: false,
  };
  const categoryName = Category.find((item) => item.id == category);
  const handleQnty = (action) => {
    if (action == 'sub') {
      if (qntCount <= 1) {
        alert('quantity must be greater then one');
        return;
      } else {
        setQntCount(qntCount - 1);
      }
    }
    if (action == 'add') {
      console.log('add');
      if (qntCount >= stock) {
        alert(`There are ${stock} product in Stock`);
        return;
      } else {
        setQntCount(qntCount + 1);
      }
    }
  };
  const handleProductAddToCard = () => {
    storeProduct(id, qntCount);
  };
  useEffect(() => {
    setQntCount(1);
  }, [product]);
  return (
    <>
      <div className="py-20 ">
        <div className="container mx-auto">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <div className="justify-self-center" style={{ width: '94%' }}>
              <Slider {...settings}>
                {images.map((item, i) => (
                  <img src={item.Img} alt="" className="rounded img-height" />
                ))}
              </Slider>
              <div className="h-20"></div>
            </div>
            <div className="self-center">
              <div>
                <span
                  className={` px-4  rounded text-center text-white ${
                    Number(stock) ? 'bg-green-500' : 'bg-red-500'
                  }`}
                >
                  {Number(stock) ? ' In Stock ' : 'Stock Out'}
                </span>
              </div>
              <div className="py-2">
                <h2 className="text-black text-3xl font-medium">{name}</h2>
              </div>
              <div className="flex items-center">
                <div>
                  <ReactStars {...firstExample} />
                </div>
                <div className="ml-8">
                  <a
                    href="#rating"
                    className={`${
                      reviews.length ? 'text-yellow-500' : 'text-red-500'
                    }`}
                  >
                    {reviews.length} reviews
                  </a>
                </div>
              </div>
              <div>
                <span className="text-2xl font-medium text-red-600">
                  Price : $ {discountPrice ? discountPrice : product.price}
                </span>
                {Number(discount) > 1 && (
                  <span className="text-normal ml-3 text-gray-600">
                    {discount && `$${price}`} {discount}%off
                  </span>
                )}
              </div>
              <div className="text-lg py-1">
                <span>
                  <BsTagFill className="inline-block  text-xl" />
                </span>
                <span>
                  {' '}
                  Brand :{' '}
                  <Link to="/" className="underline">
                    {brand}
                  </Link>{' '}
                </span>
              </div>
              <div className="text-lg py-1">
                <span>
                  <BsTagFill className="inline-block  text-xl" />
                </span>
                <span>
                  {' '}
                  Category :{' '}
                  <Link to="/" className="underline">
                    {categoryName.categoryTitle}
                  </Link>{' '}
                </span>
              </div>
              <div className=" w-2/5 my-4">
                Quantity
                <div className="flex mt-2 justify-between text-center items-center w-full h-full">
                  <button
                    onClick={() => handleQnty('sub')}
                    className="border-2  flex-1"
                  >
                    -
                  </button>
                  <div className="border-2  flex-1">{qntCount}</div>
                  <button
                    onClick={() => handleQnty('add')}
                    className="border-2 flex-1"
                  >
                    +
                  </button>
                </div>
              </div>
              {Number(stock) ? (
                <div className="flex text-white py-4">
                  <button
                    onClick={handleProductAddToCard}
                    className="py-2 px-4 bg-yellow-600 rounded"
                  >
                    add to card
                  </button>
                  <button className="py-2 px-4 bg-green-600 rounded ml-4">
                    Buy Now
                  </button>
                </div>
              ): ""}
              <div className="py-4">
                <div className="grid gap-4 grid-cols-1 md:grid-cols-6">
                  <div className="col-span-6 md:col-span-1 text-lg font-medium">
                    Description
                  </div>
                  <div className="col-span-6 md:col-span-5">{description}</div>
                </div>
                {/* <span>Description : </span> <span>{description}</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts catId={productReducer.category} />
    </>
  );
};

export default ProductDetails;
