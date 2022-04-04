import React from "react";
import Navbar from '../../layouts/frontend/Navbar'
import { Helmet } from 'react-helmet';
const Home = () => {
    return (
        <>
            <Helmet>
                <title>IAMS | Home</title>
            </Helmet>
            <Navbar />
            <div className="container">
                <div className="row justify-content-center mt-4">
                    <h1>I am in Home Page</h1>
                </div>
            </div>
        </>
    );
}
export default Home;