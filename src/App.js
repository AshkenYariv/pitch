import React from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home'
import Create from './Create'
import BlogDetails from './BlogDetails';


mapboxgl.accessToken = 'pk.eyJ1IjoiamFyaXZhc2hrZW5henkiLCJhIjoiY2wxd2x2dXpuMDZ6bjNjcDhxNHJpODU3ciJ9.wJrxwloDiZyGmA6QGzh3Sw';

const App = () => {
    return (
        <div className='App'>
            <Router>
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/add_field" element={<Create />} />
                        <Route path="/detailed_field/:id" element={<BlogDetails />} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                </div>
            </Router>
        </div>
            
    );
}
   
export default App;
