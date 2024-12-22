import React from 'react';
import Navbar from './component/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Hero from './component/Hero';
import HeroT from './component/HeroT';
import Manu from './component/Manu';
import ManuCard from './component/ManuCard';
import Amazing from './component/Amazing';
import Choose from './component/Choose';
import Customers from './component/Customers';
import Footer from './component/Footer';
const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <HeroT/>
            <Manu/>
            <ManuCard/>
            <Amazing/>
            <Choose/>
            <Customers/>
            <Footer/>
        </div>
    );
}

export default App;
