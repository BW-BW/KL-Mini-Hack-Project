import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import { Card, CardBody, Stack, SimpleGrid } from "@chakra-ui/react";
import ProfileCard from './profilecard';
import Footer from './footer';
import Banner from './banner';


interface Data {
    text1: string;
    text2: string;
    url: string;
}

function LandingPage() {
    const text1 = "Hello";
    const url1 = "https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg";

    return (
        <div>
            <Banner />
            <div className="bg-[#DBF3FA] h-[450px]">
                <div className="bg-[#DBF3FA] flex justify-center gap-5 ">
                    <ProfileCard></ProfileCard>
                    <ProfileCard></ProfileCard>
                    <ProfileCard></ProfileCard>
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default LandingPage;
