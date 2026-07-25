import React from "react";

import Hero from "../about/Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

import Navbar from "../Navbar";
import Footer from "../Footer";
import OpenAccount from "../OpenAccount";

function PricingPage(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <LeftSection/>
        <RightSection/>
        <Universe/>
        <OpenAccount/>
        <Footer/>
        </>
    );
}