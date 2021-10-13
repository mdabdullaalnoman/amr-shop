import React from 'react';
import Footer from '../Footer/Footer';
import Carousel from './Carousel';
import Header from './Header';
import Product from './Product';

const Home = () => {
    return (
        <div>
            <Header/>
            <Carousel/>
            <Product/>
            <Footer/>
        </div>
    );
};

export default Home;