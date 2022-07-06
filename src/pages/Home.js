import React from 'react';

import HouseList from '../components/HouseList';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div className='min-h-[1800px]'>
      <Banner />
      <HouseList />
    </div>
  );
};

export default Home;