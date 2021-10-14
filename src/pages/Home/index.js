import React from 'react';
import ProductSlider from '../../Ul/GroupProductSlider';
import Header from '../../Components/Header';
import SubHeader from '../../Components/Header/subHeader';
import Layout from '../../Components/Layout';
import products from '../../untils/Data/products';
import NewProducts from '../../Components/NewProducts';
import BestSellers from '../../Components/BestSeller';
import MenuBanners from './HomeMenuBanners';

const Home = () => {

  const ToDaysProduct = products.filter(
    (item, i) => item.tags.new === true
  );
console.log(ToDaysProduct);
  return (
    <Layout pageTitle="BD Fashion">
      <Header />
      <SubHeader />
    <BestSellers/>
    <MenuBanners/>
      {ToDaysProduct.length > 0 &&  <NewProducts products={ToDaysProduct}/>}
    </Layout>
  );
};

export default Home;
