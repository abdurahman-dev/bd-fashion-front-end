import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../DashboardLayout';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteSingleProduct,
  newProductAdded,
} from '../../../../Redux/Actions/product.action';
import toast, { Toaster } from 'react-hot-toast';
import AddProductModalInfo from '../../../../Ul/Modal/ProductModalInfo';
import { Modal } from 'react-bootstrap';
import { requiredErrorHandle } from '../../../../helper/toastNotification';
import MyTable from '../../../../Ul/TableList/Table';
import ConformDelete from '../../../../Ul/ConformDelete';
import { searchProductHandle } from '../../../../Components/ProductsShow/productFilterHelper';

const ProductControl = () => {
  const [productName, setProductName] = useState('');
  const [productSellerName, setProductSellerName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productSubcategory, setProductSubcategory] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productStock, setProductStock] = useState(0);
  const [productPriceDiscount, setProductPriceDiscount] = useState(0);
  const [productImg, setProductImg] = useState([]);

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [productDltId, setProductDltId] = useState('');
  const dispatch = useDispatch();

  const productInfo = {
    setVisible,
    productName,
    setProductName,
    productPrice,
    setProductPrice,
    productImg,
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
    productSubcategory,
    setProductSubcategory,
    category,
    subcategory,
  };

  const initialState = useSelector((state) => state.adminInitialData);
  useEffect(() => {
    if (initialState) {
      setProducts(initialState.products.reverse());
      setCategory(initialState.category);
      setSubcategory(initialState.subcategories);
    }
  }, [initialState]);

  //add product function
  const addProduct = () => {
    if (productName === '') {
      return requiredErrorHandle('Product Name Required');
    } else if (productPrice <= 0) {
      return requiredErrorHandle('Product Price Required');
    } else if (
      productCategory === '' ||
      productCategory === 'Select Category'
    ) {
      return requiredErrorHandle('Product Category  Required');
    } else if (
      productSubcategory === '' ||
      productSubcategory === 'Select Subcategory'
    ) {
      return requiredErrorHandle('Product Subcategory Required');
    } else if (productSellerName === '') {
      return requiredErrorHandle('Vendor Name Required');
    } else if (productDescription === '') {
      return requiredErrorHandle('Product Description Required');
    } else if (productImg.length <= 0) {
      return requiredErrorHandle('Product Image Required');
    }
    const productInfo = {
      productName,
      productSellerName,
      productDescription,
      productCategory,
      productPriceDiscount,
      productSubcategory,
      productPrice,
      productStock,
      productImg,
    };

    dispatch(newProductAdded(productInfo));
    setVisible(false);
    setProductName('');
    setProductSellerName('');
    setProductDescription('');
    setProductCategory('');
    setProductPrice('');
    setProductImg([]);
    toast.success('Successfully created!', {
      duration: 4000,
      position: 'top-right',
    });
  };
  const handleDelete = (id) => {
    setVisible(true);
    setIsDelete(true);
    setProductDltId(id);
  };

  const conformDlt = async () => {
    dispatch(deleteSingleProduct(productDltId));
    setVisible(false);
  };

  return (
    <DashboardLayout>
      <Toaster />
      <div className="bg-gray-400 h-16 flex justify-between items-center px-4 rounded-md">
        <h2 className="text-3xl font-semibold">Products</h2>
        <button
          className="bg-white px-4 py-2 rounded-2xl"
          onClick={() => {
            setVisible(true);
            setIsDelete(false);
          }}
        >
          {' '}
          <h4 className="font-medium">Add Product</h4>{' '}
        </button>
      </div>
      <div className="flex">
          
      </div>
      <div className=" h-10 md:w-1/6 md:h-10 mb-4 ml-auto mt-4">
          <input
            type="text"
            onChange={(e) => {
              setProducts(searchProductHandle(e.target.value, initialState.products));
            }}
            placeholder="Search Product"
            className="bg-gray-50 w-full h-full px-2 ring-2 ring-gray-500 ring-opacity-50 rounded-md outline-none focus:shadow-lg"
          />
        </div>
      <div className="mt-4">
        <MyTable data={products} products handleDelete={handleDelete} />
      </div>
      <Modal
        show={isVisible}
        onHide={() => setVisible(false)}
        size={!isDelete ? 'lg' : ''}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {isDelete ? (
          <ConformDelete
            onCancel={() => setVisible(false)}
            conformDlt={conformDlt}
          />
        ) : (
          <>
            <Modal.Header closeButton>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-700">
                Add Product
              </h2>
            </Modal.Header>

            <Modal.Body>
              {' '}
              <AddProductModalInfo
                productInfo={productInfo}
                addProduct={addProduct}
              />
            </Modal.Body>
          </>
        )}
      </Modal>
    </DashboardLayout>
  );
};
export default ProductControl;
