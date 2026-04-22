import React from 'react';
import VendorHeader from './VendorHeader';
import VendorFooter from './VendorFooter';
import { Outlet } from 'react-router-dom';

const VendorMaster = () => {
  return (
    <div>
      <VendorHeader/>
      <Outlet/>
      <VendorFooter/>
    </div>
  );
}

export default VendorMaster;
