import { useRouter } from 'next/router';
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import BreadCrumb from '@/components/common/Breadcrumb';

const ProductDetails = () => {
  const router = useRouter();
  const { asin } = router.query;

  const pathSegments = [
    { name: 'Home', href: '/', current: false },
    { name: 'Dashboard', href: '/ecommerce', current: false },
    { name: 'Product Details', href: `/ecommerce/product-details/${asin}`, current: true },
  ];


  return (
    <MainLayout>
      <h1 className='my-2 font-poppins text-2xl ml-1 text-white font-bold'>
        Product Details
      </h1>
      <BreadCrumb pathSegments={pathSegments} />
      <div className='text-white'>
        Details for product ASIN: {asin}
      </div>
    </MainLayout>
  );
};

export default ProductDetails;