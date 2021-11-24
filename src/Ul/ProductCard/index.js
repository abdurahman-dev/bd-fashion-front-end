import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';
import './style.css';
import AddToCardButton from '../AddToCardButton';
import { storeProduct } from '../../untils/Cart/index';
import { Modal } from 'react-bootstrap';
import SingleProductInfo from '../../Components/SingleProductInfo';

const ProductCard = ({ product, height }) => {
  const [hover, setHover] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);



  const discountPrice =
    Number(product.discount) > 1 &&
    (Number(product.discount) / 100) * product.price;

  //check if the product is new -7days

  const isNewPd = (d) => {
    const sevenDays = Date.now() - 60 * 60 * 24 * 1000 * 7;
    const pD = new Date(d);
    const pdDate = pD.getTime();
    if (pdDate > sevenDays) return true;
  };
  const handleProduct = (pd) => {
    storeProduct(pd.id, 1);
    console.log('add pd');
  };

  const handleQuickView = (pd) => {
    console.log(pd);
    setModalShow(true);
  };
  return (
    <div className="m-4">
      <div className="w-full rounded-md cardMain">
        <img
          src={
            hover ? product?.productImage[1].url : product?.productImage[0].url
          }
          alt=""
          className={`w-96 h-72`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
        {product.productStock === 0 && (
          <div className="bg-red-600 text-white rounded-r absolute text-center left-0 top-2  w-20 ">
            Stock Out
          </div>
        )}
        {isNewPd(product.createdAt) === true && (
          <div
            className={`bg-black text-white rounded-r absolute text-center left-0 ${
              product.productStock === 0 ? 'top-10' : 'top-2'
            } w-20 `}
          >
            New
          </div>
        )}
        {/* {product.discount > 0 && (
            <div className="bg-green-600 text-white rounded-l absolute text-center right-0 top-0 w-20 ">
              {product.discount}%
            </div>
          )} */}
        <div className="hoverButton flex justify-center w-full">
          <div className="flex justify-between items-center">
            <AddToCardButton
              addToCard={false}
              quickView={true}
              onClick={() => handleQuickView(product)}
            />
            {product.productStock >= 1 && (
              <AddToCardButton
                addToCard={true}
                quickView={false}
                onClick={() => handleProduct(product)}
              />
            )}
          </div>
        </div>
      </div>
      <Link to={`/product/${product._id}`}>
        <div className="mt-1">
          <div className="text-center flex justify-center">
          <ReactStars count={5} value={product.ratings} size={24} color2={'#ffd700'}  edit={false}/>
          </div>
          <span className="text-md text-gray-500">
          {product.productCategory}
          </span>
          <div>
            <h3 className="text-xl text-gray-900 hover:text-gray-700">
              {product.productName}
            </h3>
          </div>
          <div className='flex justify-between'>
          <span className="text-lg  text-gray-900">
            Price: <strong>${discountPrice ? discountPrice : product.productPrice}</strong>
          </span>
          
          </div>
        </div>
      </Link>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
  </Modal.Header>
        <div className="p-4">
          <SingleProductInfo pd={product} quickView/>
        </div>
      </Modal>
    </div>
  );
};

export default ProductCard;
