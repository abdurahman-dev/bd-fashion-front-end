import React from 'react';
import Header from '../../Sections/Header';
import SubHeader from '../../Sections/Header/subHeader';
import Layout from '../../Components/Layout';
import NewProducts from '../../Sections/NewProducts';
// import MenuBanners from './HomeMenuBanners';
import FeaturedProducts from '../../Sections/FeaturedProducts';
import ChooseCategories from '../../Sections/ChooseCategories';
import SunglassesBanner from '../../Sections/LastBanner';
import TopCollection from '../../Sections/TopCollection';
import SiteInfoTwo from '../../Sections/SiteInfo';
import InfoOne from '../../Sections/SiteInfo/InfoOne';

const Home = () => {
  return (
    <Layout pageTitle="BD Fashion">
      <Header />
      <SubHeader />
      <TopCollection />
      {/* <MenuBanners /> */}
      <ChooseCategories />
      <FeaturedProducts />
      <InfoOne/>
      <SunglassesBanner />
      <NewProducts />
      <SiteInfoTwo/>
    </Layout>
  );
};

export default Home;
