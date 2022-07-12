import React from 'react';
import Movies from './Movies';
import Navbar from './Navbar';
import Search from './Search';

const Home = () => {
    // const name = useContext(AppContext);
  return (
    <>
    {/* <Navbar /> */}
    <Search />
    <Movies />
    </>
  )
}

export default Home