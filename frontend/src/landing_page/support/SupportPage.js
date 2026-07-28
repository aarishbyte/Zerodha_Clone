import React from 'react';
import CreateTicket from './CreateTicket';
import Hero from './Hero';
import Navbar from '../Navbar';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';

function SupportPage() {
    return ( 
        <>
        <Hero/>
        <CreateTicket/>
       
        <OpenAccount/>
       
        </>
     );
}

export default SupportPage;