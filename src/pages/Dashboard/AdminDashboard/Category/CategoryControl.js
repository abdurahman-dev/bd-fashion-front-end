import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'cloudinary-react';
import { Modal } from 'react-bootstrap';
import {
  AddCategory,
  updateCategory,
} from '../../../../Redux/Actions/Admin/category.action';
import { getInitialData } from '../../../../Redux/Actions/Admin/initialData.action';
import DashboardLayout from '../../DashboardLayout';
import loadingImg from '../../../../images/load-loading.gif';
import Axios from 'axios';
import {
  requiredErrorHandle,
  requiredSuccessHandle,
} from '../../../../helper/toastNotification';
import { Toaster } from 'react-hot-toast';

const CategoryControl = () => {
  const [isVisible, setVisible] = useState(false);
  const [modalTitle, setModalTile] = useState('');
  const [updateId, setUpdateId] = useState('');
  const [modalInputPlaceholder, setModalInputPlaceholder] = useState('');
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [name, setName] = useState('');
  const [image, setImage] = useState({
    url: '',
    publicId: '',
  });
  const dispatch = useDispatch();

  const cat = useSelector((state) => {
    return state.adminInitialData;
  });

  useEffect(() => {
    if (cat.success) {
      setCategories(cat.category);
      setSubcategories(cat.subcategories);
    }
  }, [cat.category, cat.success, cat.subcategories]);

  const handleCategory = (cat) => {
    if (cat === 'category') {
      setModalTile('Add Category');
      setModalInputPlaceholder('Enter Category Name');
    } else {
      setModalTile('Add Subcategory');
      setModalInputPlaceholder('Enter subcategory Name');
    }
    setVisible(true);
    setName('');
  };

  // handle update category and subcategory
  const HandleCategoryUpdate = (item, title) => {
    setVisible(true);
    setModalTile(title);
    setUpdateId(item._id);
    setName(item.name);
    setModalInputPlaceholder(title);
  };

  //handle submit
  const addCategory = (title) => {
    //new create category
    if (title === 'Add Category') {
      if (!name.length > 0) {
        return requiredErrorHandle('Category Name Required');
      } else if (!image.url.length > 0) {
        return requiredErrorHandle('Category Image Required');
      }
      dispatch(AddCategory({ name, image }, 'category'));
      requiredSuccessHandle('Category Added Successfully');
    }
    //new create subcategory
    if (title === 'Add Subcategory') {
      if (!name.length > 0) {
        return requiredErrorHandle('Subcategory Name Required');
      }
      dispatch(AddCategory(name, 'subcategory'));
    }
    //update category
    if (title === 'Update Category') {
      if (!name.length > 0) {
        return requiredErrorHandle('Category Name Required');
      }
      dispatch(updateCategory(name, 'categoryUpdate', updateId));
    }
    if (title === 'Update Subcategory') {
      dispatch(updateCategory(name, 'subcategoryUpdate', updateId));
    }
    if (cat.success) {
      dispatch(getInitialData());
    }
    //update subcategory
    setVisible(false);
    setName('');
    setImage({});
  };

  return (
    <DashboardLayout>
      <Toaster />
      <div className="flex flex-col md:flex-row justify-between md:space-x-4">
        <div className="w-full mb-2">
          <div className="bg-gray-400 h-16 flex justify-between items-center px-4 rounded-md">
            <h2 className="text-lg md:text-3xl font-semibold">Category</h2>
            <button
              className="bg-white px-5 py-2 rounded-3xl"
              onClick={() => handleCategory('category')}
            >
              {' '}
              <h4 className="font-medium">Add Category</h4>{' '}
            </button>
          </div>
          <div className="mt-2">
            <ul className="flex flex-wrap ">
              {categories.map((item, i) => (
                <li
                  key={i}
                  onClick={() => HandleCategoryUpdate(item, 'Update Category')}
                  className="cursor-pointer text-blue-500 hover:text-gray-600 mr-8 mb-4"
                >
                  {' '}
                  <span className="text-black">{i + 1}</span> {`. ${item.name}`}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full">
          <div className="bg-gray-400 h-16 md:h-16 flex justify-between items-center px-4 rounded-md">
            <h2 className="text-lg md:text-3xl font-semibold">Sub Category</h2>
            <button
              className="bg-white px-5 py-2 rounded-3xl"
              onClick={handleCategory}
            >
              {' '}
              <h4 className="font-medium">Add SubCat</h4>{' '}
            </button>
          </div>
          <div className="mt-2">
            <ul className="flex flex-wrap ">
              {subcategories.map((item, i) => (
                <li
                  key={i}
                  onClick={() =>
                    HandleCategoryUpdate(item, 'Update Subcategory')
                  }
                  className="cursor-pointer text-blue-500 hover:text-gray-600 mr-8 mb-4"
                >
                  {' '}
                  <span className="text-black">{i + 1}</span> {`. ${item.name}`}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Modal show={isVisible} onHide={() => setVisible(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
              {modalTitle}
            </h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CatModalInfo
            modalTitle={modalTitle}
            setVisible={setVisible}
            addCategory={addCategory}
            setName={setName}
            name={name}
            CatImg={image}
            setCatImage={setImage}
            modalInputPlaceholder={modalInputPlaceholder}
          />
        </Modal.Body>
      </Modal>
    </DashboardLayout>
  );
};

export default CategoryControl;

// if you want ,you can declared with separate folder

const CatModalInfo = ({
  modalTitle,
  setVisible,
  addCategory,
  setName,
  name,
  CatImg,
  setCatImage,
  modalInputPlaceholder,
}) => {
  const [imgUploadSuccess, setImgUploadSuccess] = useState(false);
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
    setCatImage({
      url: result.data.url,
      publicId: result.data.public_id,
    });
  };
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="ml-2 mb-3">
        <label>
          {`${modalTitle} Name`}
          <span className="text-red-600"> *</span>
        </label>{' '}
        <br />
        <input
          type="text"
          placeholder={modalInputPlaceholder}
          className="mt-2 border-2 border-gray-700 w-4/5  h-10 rounded-md px-2  focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50 focus:border-gray-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {(modalTitle === 'Add Category' || modalTitle === 'Update Category') && (
        <>
          <div className="ml-2">
            <label>
              Category Images<span className="text-red-600"> *</span>
            </label>{' '}
            <br />
            {modalTitle === 'Add Category' && (
              <input
                type="file"
                onChange={handleProductImage}
                className="mt-2 border-2 border-gray-700 w-4/5  h-10 rounded-md px-2  focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50 focus:border-gray-400"
              />
            )}
          </div>
          {CatImg?.url?.length > 0 && (
            <Image
              cloudName="dpqv2divs"
              publicId={CatImg?.url}
              className="rounded-full w-16 h-16 mr-2 mt-2"
            />
          )}

          <div>
            {imgUploadSuccess && (
              <img src={loadingImg} className="w-28 h-28" alt="loading img" />
            )}
          </div>
        </>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 mb-4 ml-2 md:ml-0">
        <div></div>
        <div className="w-4/5 ">
          <button
            className="border-2 w-full border-green-400 bg-green-500 rounded-lg text-white px-1 py-1 text-xl font-medium"
            onClick={() => addCategory(modalTitle)}
          >
            save
          </button>
        </div>
        <div className="w-4/5 ">
          <button
            onClick={() => setVisible(false)}
            className="border-2 border-red-600 w-full bg-red-500 rounded-lg text-white px-2 py-1 text-xl font-medium"
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};
