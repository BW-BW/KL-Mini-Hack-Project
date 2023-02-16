import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import { Card, CardBody, Stack } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

function LandingPage() {
    return (
        <div>
            <div className="flex justify-center mt-2">
                <p>Don’t have an account yet?</p>
            </div>

            <Link href={`/buy/0x941661bd1134dc7cc3d107bf006b8631f6e65ad5/2700`}>
                <Card className="">
                    <CardBody className=" w-[300px] bg-[#F0DBDB] rounded-lg">
                        <Image
                            src="https://testing-data.reddio.com/images/2700.png"
                            width={300}
                            height={300}
                            alt=""
                            unoptimized={true}
                            className="rounded-lg"
                        />
                        <Stack mt="6" spacing="3">
                            <h1 className="pt-1 font-Montserrat font-black text-xl text-[#86C8BC]">
                                <text>
                                    {"REDDIO"} {"2700"}
                                </text>
                            </h1>
                            <div className="flex justify-between "></div>
                        </Stack>
                    </CardBody>
                </Card>
            </Link>
        </div>
    );
}

export default LandingPage;
