import React from "react";
import { Helmet } from 'react-helmet';
const Home = () => {

    const name = localStorage.getItem('auth_name')
    return (
        <>
            <Helmet>
                <title>IAMS | {name} | Home</title>
            </Helmet>
            <h4>Hi, {name}</h4>
      
        </>
    );
}
export default Home