import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import { Card, CardBody, Stack, SimpleGrid } from "@chakra-ui/react";
import ProfileCard from './profilecard';
import Footer from './footer';
import Banner from './banner';
import { Link } from 'react-router-dom';

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

                    <Link to="/profile">
                        <Card className="mt-[70px] bg-[#F0DEFD] rounded" >
                            <div className="relative w-40 h-40 bg-[#F0DEFD]">
                                <img alt="..."
                                    src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                                    //src={imageURL}
                                    className="shadow-xl rounded-full h-auto align-middle border-none" />
                            </div>
                            <div className="items-center justify-center bg-[#F0DEFD]">
                                <div className="text-center p-1">
                                    <p className=' text-[#6D67E4] text-xl font-Poppins font-medium'>Jenna</p>
                                </div>
                                <div className="text-center p-2">
                                    <p className=' text-[#6D67E4] text-xl font-Poppins font-medium'>Stones</p>
                                </div>
                            </div>
                        </Card>
                    </Link>

                    <Link to="/profile">
                        <Card className="mt-[70px] bg-[#F0DEFD] rounded" >
                            <div className="relative w-40 h-40 bg-[#F0DEFD]">
                                <img alt="..."
                                    src="https://avatars.githubusercontent.com/u/89936242?height=180&v=4&width=180"
                                    //src={imageURL}
                                    className="shadow-xl rounded-full h-auto align-middle border-none" />
                            </div>
                            <div className="items-center justify-center bg-[#F0DEFD]">
                                <div className="text-center p-1">
                                    <p className=' text-[#6D67E4] text-xl font-Poppins font-medium'>Brian</p>
                                </div>
                                <div className="text-center p-2">
                                    <p className=' text-[#6D67E4] text-xl font-Poppins font-medium'>Joseph</p>
                                </div>
                            </div>
                        </Card>
                    </Link>

                    <Link to="/profile">
                        <Card className="mt-[70px] bg-[#F0DEFD] rounded" >
                            <div className="relative w-40 h-40 bg-[#F0DEFD]">
                                <img alt="..."
                                    src="https://www.meshcc.com/wp-content/uploads/2022/02/Alex-Foord-e1644436249973.jpg"
                                    //src={imageURL}
                                    className="shadow-xl rounded-full h-auto align-middle border-none" />
                            </div>
                            <div className="items-center justify-center bg-[#F0DEFD]">
                                <div className="text-center p-1">
                                    <p className=' text-[#6D67E4] text-xl font-Poppins font-medium'>Alex</p>
                                </div>
                                <div className="text-center p-2">
                                    <p className=' text-[#6D67E4] text-xl font-Poppins font-medium'>Foord</p>
                                </div>
                            </div>
                        </Card>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default LandingPage;
