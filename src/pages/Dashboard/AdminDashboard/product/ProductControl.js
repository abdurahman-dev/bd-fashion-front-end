import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../DashboardLayout';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteSingleProduct,
  newProductAdded,
} from '../../../../Redux/Actions/product.action';
import AddProductModalInfo from '../../../../Ul/Modal/ProductModalInfo';
import { Modal } from 'react-bootstrap';
import {
  requiredErrorHandle,
  requiredSuccessHandle,
} from '../../../../helper/toastNotification';
import MyTable from '../../../../Ul/TableList/Table';
import ConformDelete from '../../../../Ul/ConformDelete';
import { searchProductHandle } from '../../../../Components/ProductsShow/productFilterHelper';
import axiosInstance from '../../../../helper/axios';

const ProductControl = () => {
  const [productName, setProductName] = useState('');
  const [productSellerName, setProductSellerName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productSubCategory, setProductSubCategory] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productStock, setProductStock] = useState(0);
  const [productPriceDiscount, setProductPriceDiscount] = useState(0);
  const [productImg, setProductImg] = useState([]);
  const [productDltId, setProductDltId] = useState('');

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [isProductUpdate, setIsProductUpdate] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isVisible, setVisible] = useState(false);
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
    productSubCategory,
    setProductSubCategory,
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
      productSubCategory === '' ||
      productSubCategory === 'Select Subcategory'
    ) {
      return requiredErrorHandle('Product Subcategory Required');
    } else if (productSellerName === '') {
      return requiredErrorHandle('Vendor Name Required');
    } else if (productDescription === '') {
      return requiredErrorHandle('Product Description Required');
    } else if (productImg.length <= 0) {
      return requiredErrorHandle('Product Image Required');
    } else if (productStock === '' || productStock < 0) {
      return requiredErrorHandle('Product Stock Required');
    }

    const productInfo = {
      productName,
      productSellerName,
      productDescription,
      productCategory,
      productPriceDiscount,
      productSubCategory,
      productPrice,
      productStock,
      productImg,
    };
    if (isProductUpdate) {
      //update product
      const updateProduct = async () => {
        try {
          const res = await axiosInstance.post(
            `/admin/product/${productDltId}`,
            productInfo
          );

          if (res.status === 200) {
            setProducts(res.data.products.reverse());
          }
        } catch (err) {
          console.log(err);
          return requiredErrorHandle(err.message);
        }
      };
      updateProduct();
    } else {
      //add product function
      dispatch(newProductAdded(productInfo));
    }
    setVisible(false);
    setProductName('');
    setProductSellerName('');
    setProductDescription('');
    setProductCategory('');
    setProductPrice('');
    setProductImg([]);
    requiredSuccessHandle(
      `${isProductUpdate ? 'Updated Successfully' : 'Successfully created!'}`
    );
  };
  const handleDelete = (id) => {
    setVisible(true);
    setIsDelete(true);
    setProductDltId(id);
  };
  //after conformDelete button
  const conformDlt = async () => {
    dispatch(deleteSingleProduct(productDltId));
    setVisible(false);
  };
  const handleProductUpdate = (pd) => {
    setVisible(true);
    setIsDelete(false);
    setIsProductUpdate(true);
    setProductName(pd.productName);
    setProductSellerName(pd.productSellerName);
    setProductDescription(pd.productDescription);
    setProductCategory(pd.productCategory);
    setProductSubCategory(pd.productSubCategory);
    setProductPrice(pd.productPrice);
    setProductStock(pd.productStock);
    setProductPriceDiscount(pd.productPriceDiscount);
    setProductImg(pd.productImage);
    setProductDltId(pd._id);
  };
  const handleAddProduct = () => {
    setVisible(true);
    setIsDelete(false);
    setIsProductUpdate(false);
    setProductName('');
    setProductSellerName('');
    setProductDescription('');
    setProductCategory('');
    setProductSubCategory('');
    setProductPrice('');
    setProductStock('');
    setProductPriceDiscount('');
    setProductImg([]);
    setProductDltId('');
  };
  return (
    <DashboardLayout>
      <div className="bg-blue-300 h-16 flex justify-between items-center px-4 rounded-md">
        <h2 className="text-3xl font-semibold text-white">Products</h2>
        <button
          className="bg-white px-4 py-2 rounded-2xl"
          onClick={handleAddProduct}
        >
          {' '}
          <h4 className="font-medium">Add Product</h4>{' '}
        </button>
      </div>
      <div className="flex"></div>
      <div className=" h-10 md:w-1/6 md:h-10 mb-4 ml-auto mt-4">
        <input
          type="text"
          onChange={(e) => {
            setProducts(
              searchProductHandle(e.target.value, initialState.products)
            );
          }}
          placeholder="Search Product"
          className="bg-gray-50 w-full h-full px-2 border-blue-500 ring-2 ring-blue-500 ring-opacity-50 rounded-md outline-none focus:shadow-lg"
        />
      </div>
      <div className="mt-4">
        <MyTable
          handleUpdate={handleProductUpdate}
          data={products}
          products
          handleDelete={handleDelete}
        />
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
                {isProductUpdate ? 'Update Product' : 'Add Product'}
              </h2>
            </Modal.Header>

            <Modal.Body>
              {' '}
              <AddProductModalInfo
                productInfo={productInfo}
                addProduct={addProduct}
                isProductUpdate={isProductUpdate}
              />
            </Modal.Body>
          </>
        )}
      </Modal>
    </DashboardLayout>
  );
};
export default ProductControl;
