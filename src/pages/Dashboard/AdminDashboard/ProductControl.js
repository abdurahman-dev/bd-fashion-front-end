import React, { useEffect, useState } from 'react';
import DashboardLayout from '../DashboardLayout';
import ProductModel from '../../../Ul/Modal/ProductModel';
import { useDispatch, useSelector } from 'react-redux';
import { newProductAdded } from '../../../Redux/Actions/product.action';
import toast, { Toaster } from 'react-hot-toast';
import AddProductModalInfo from '../../../Ul/Modal/ProductModalInfo';

const ProductControl = () => {
  const [productName, setProductName] = useState('');
  const [productSellerName, setProductSellerName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productStock, setProductStock] = useState(0);
  const [productPriceDiscount, setProductPriceDiscount] = useState(0);
  const [productImg, setProductImg] = useState([]);
  const [isVisible, setVisible] = useState(false);
  const [isVisibleMesg, setVisibleMesg] = useState(false);
  const dispatch = useDispatch();

  const productInfo = {
    setVisible,
    productName,
    productPrice,
    productImg,
    setProductName,
    setProductPrice,
    setProductImg,
    productStock,
    setProductStock,
    productSellerName,
    setProductSellerName,
    productPriceDiscount,
    setProductPriceDiscount,
    productDescription,
    setProductDescription,
    productCategory,
    setProductCategory,
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const addProduct = () => {
    const productInfo = {
      productName,
      productSellerName,
      productDescription,
      productCategory,
      productPrice,
      productStock,
      productImg,
    };
    dispatch(newProductAdded(productInfo));
    setVisibleMesg(true)
    if (!state.error) {
      setVisible(false);
      setProductName('');
      setProductSellerName('');
      setProductDescription('');
      setProductCategory('');
      setProductPrice('');
      setProductImg([]);
    }
  };

  const state = useSelector((state) => state.addProductReducer);

  useEffect(() => {
    if (state.product && isVisibleMesg) {
      setVisible(false);
      toast.success('Successfully created!', {
        duration: 4000,
        position: 'top-right',
      });
    }
  }, [isVisibleMesg,state.product]);

  return (
    <DashboardLayout>
      <Toaster />
      <div className="bg-gray-400 h-16 flex justify-between items-center px-4 rounded-md">
        <h2 className="text-3xl font-semibold">Products</h2>
        <button
          className="bg-white px-5 py-2 rounded-3xl"
          onClick={() => setVisible(true)}
        >
          {' '}
          <h4 className="font-medium">Add Product</h4>{' '}
        </button>
      </div>
      <div></div>
      <ProductModel isVisible={isVisible} setVisible={setVisible}>
        <AddProductModalInfo
          productInfo={productInfo}
          addProduct={addProduct}
        />
      </ProductModel>
    </DashboardLayout>
  );
};
export default ProductControl;
