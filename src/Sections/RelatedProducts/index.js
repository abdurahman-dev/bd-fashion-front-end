import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Redux/Actions/product.action';
import ProductSlider from '../../Ul/GroupProductSlider';

const RelatedProducts = ({ catInfo }) => {
  const [pds, setPds] = useState([]);
  const dispatch = useDispatch();
  const pdss = useSelector((state) => state.productReducer.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    setPds(
      pdss.filter(
        (item) =>
          item.productCategory === catInfo.cat ||
          item.productSubCategory === catInfo.subCat
      )
    );
  }, [catInfo.cat, catInfo.subCat, pdss]);

  return (
    <div className="py-12">
      <div className="container mx-auto">
        <div className="text-black text-3xl font-bold">Related Products</div>
        <ProductSlider products={pds} slidesToShow={4} />
      </div>
    </div>
  );
};

export default RelatedProducts;
