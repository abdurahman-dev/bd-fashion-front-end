import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import Axios from 'axios';
import { Image } from 'cloudinary-react';
import { Spinner } from 'react-bootstrap';

const AddProductModalInfo = ({ productInfo, addProduct }) => {
  const [imgUploadSuccess, setImgUploadSuccess] = useState(false);
  const {
    setVisible,
    productName, setProductName,
    productPrice, setProductPrice,
    productImg, setProductImg,
    productStock,setProductStock,
    productSellerName,setProductSellerName,
    productPriceDiscount,setProductPriceDiscount,
    productDescription, setProductDescription,
    productCategory,setProductCategory,
    productSubcategory,setProductSubcategory,
    category,
    subcategory,
  } = productInfo;

  // const state = useSelector((state) => state.addProductReducer);

  // useEffect(() => {
  //   if (state.error) {
  //     const errorMessage = state.error.response.data.error;
  //     const msg = errorMessage.split(',');
  //     toast.error(msg[0], {
  //       duration: 4000,
  //       position: 'top-right',
  //     });
  //   }
  // }, [state.error]);

  const handleProductImage = async (e) => {
    setImgUploadSuccess(true);
    const form = new FormData();
    form.append('file', e.target.files[0]);
    form.append('upload_preset', 'hv0yt2b8');
    const result = await Axios.post(
      'https://api.cloudinary.com/v1_1/dpqv2divs/image/upload',
      form
    );
    setImgUploadSuccess(false);
    setProductImg([...productImg, result.data.url]);
  };
  return (
    <div className="p-4">
        <div>
          <label className="text-xl font-medium">
            Product Name <span className="text-red-600"> *</span>{' '}
          </label>{' '}
          <br />
          <input
            type="text"
            value={productName}
            placeholder="Product Name"
            onChange={(e) => setProductName(e.target.value)}
            className="mt-2 border-2 border-gray-700 w-4/5 md:w-3/5 h-10 rounded-md px-2  focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50 focus:border-gray-400"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
          <div>
            <label className="text-md font-medium">
              Product Price <span className="text-red-600"> *</span>{' '}
            </label>{' '}
            <br />
            <input
              type="number"
              value={productPrice}
              min="1"
              placeholder="Product Price"
              onChange={(e) => setProductPrice(e.target.value)}
              className="mt-2 border-2 border-gray-700 w-4/5  h-10 rounded-md px-2  focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50 focus:border-gray-400"
            />
          </div>
          <div>
            <label className="text-md font-medium">
              Product Quantity <span className="text-red-600"> *</span>{' '}
            </label>{' '}
            <br />
            <input
              type="number"
              min="1"
              value={productStock}
              onChange={(e) => setProductStock(e.target.value)}
              className="mt-2 border-2 border-gray-700 w-4/5  h-10 rounded-md px-2  focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50 focus:border-gray-400"
            />
          </div>
          <div>
            <label className="text-md font-medium ">
              Product Price Discount{' '}
            </label>{' '}
            <br />
            <input
              type="number"
              min="1"
              value={productPriceDiscount}
              onChange={(e) => setProductPriceDiscount(e.target.value)}
              className="mt-2 border-2 border-gray-700 w-4/5  h-10 rounded-md px-2  focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50 focus:border-gray-400"
            />
            <span className="text-sm font-light text-red-600">
              (Remember It wil be % discount)
            </span>
          </div>
          <div>
            <label className="text-md font-medium">
              Product Category<span className="text-red-600"> *</span>
            </label>{' '}
            <br />
            <select
            value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
              className="mt-2 border-2 border-gray-700 w-4/5 rounded-md px-2  focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50 focus:border-gray-400"
            >
               <option >Select Category</option>
              {
                category.map((item,i)=> {
                  return ( <option key={i} value={item.name}>{item.name}</option>)
                })
              }
            </select>
          </div>
          <div>
            <label className="text-md font-medium">
              Product Subcategory<span className="text-red-600"> *</span>
            </label>{' '}
            <br />
            <select
              value={productSubcategory}
              onChange={(e) => setProductSubcategory(e.target.value)}
              className="mt-2 border-2 border-gray-700 w-4/5 rounded-md px-2  focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50 focus:border-gray-400"
            >
              <option >Select Subcategory</option>
              {subcategory.map((item,i)=> {
                return <option key={i} value={item.name}>{item.name}</option>
              })}
            </select>
          </div>
          <div>
            <label className="text-md font-medium">
              Vendor<span className="text-red-600"> *</span>
            </label>{' '}
            <br />
            <input
              type="text"
              value={productSellerName}
              placeholder="Seller Name"
              onChange={(e) => setProductSellerName(e.target.value)}
              className="mt-2 border-2 border-gray-700 w-4/5  h-10 rounded-md px-2  focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50 focus:border-gray-400"
            />
          </div>
        </div>
        <div className="mt-2">
          <label className="text-md font-medium">
            Product Description<span className="text-red-600"> *</span>
          </label>{' '}
          <br />
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            cols="30"
            rows="10"
            className="mt-2 border-2 border-gray-700 w-4/5 rounded-md px-2  focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50 focus:border-gray-400"
          ></textarea>
        </div>

        <div>
          <label className="text-md font-medium">
            Product Images<span className="text-red-600"> *</span>
          </label>{' '}
          <br />
          <input
            type="file"
            onChange={handleProductImage}
            className="mt-2 border-2 border-gray-700 w-4/5 md:w-2/5 h-10 rounded-md px-2  focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50 focus:border-gray-400"
          />
        </div>

        {productImg && (
          <div className="flex mt-2 flex-wrap">
            {productImg.map((img, i) => (
              <Image
                key={i}
                cloudName="dpqv2divs"
                publicId={img}
                className="rounded-full w-16 h-16 mr-2"
              />
            ))}
            <div>
              {imgUploadSuccess && (
               <Spinner animation="border" role="status">
               <span className="visually-hidden">Loading...</span>
             </Spinner>
              )}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div></div>
          <div className="w-4/5 ">
            <button
              onClick={addProduct}
              className="border-2 w-full border-green-400 bg-green-500 rounded-lg text-white px-10 py-1 text-xl font-medium"
            >
              save
            </button>
          </div>
          <div className="w-4/5 ">
            <button
              onClick={() => setVisible(false)}
              className="border-2 border-red-600 w-full bg-red-500 rounded-lg text-white px-10 py-1 text-xl font-medium"
            >
              cancel
            </button>
          </div>
        </div>
      </div>
  );
};

export default AddProductModalInfo;
