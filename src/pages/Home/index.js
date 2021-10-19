import React from 'react';
import ProductSlider from '../../Ul/GroupProductSlider';
import Header from '../../Components/Header';
import SubHeader from '../../Components/Header/subHeader';
import Layout from '../../Components/Layout';
import products from '../../untils/Data/products';
import NewProducts from '../../Components/NewProducts';
import BestSellers from '../../Components/BestSeller';
import MenuBanners from './HomeMenuBanners';
import FeaturedProducts from '../../Components/FeaturedProducts';


const Home = () => {
  const ToDaysProduct = products.filter(
    (item, i) => item.tags.new === true
  );
  return (
    <Layout pageTitle="BD Fashion">
      <Header />
      <SubHeader />
    <BestSellers/>
    <MenuBanners/>
      {ToDaysProduct.length > 0 &&  <NewProducts products={ToDaysProduct}/>}
      <FeaturedProducts/>
    </Layout>
  );
};

export default Home;
