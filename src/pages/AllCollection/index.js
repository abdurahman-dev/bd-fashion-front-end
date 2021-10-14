import React from 'react';
import Layout from '../../Components/Layout';
import CollectionsGrid from './CollectionsGrid';
const AllCollection = () => {
    return (
        <Layout pageTitle={'Collection'}>
            <CollectionsGrid/>
        </Layout>
    );
};

export default AllCollection