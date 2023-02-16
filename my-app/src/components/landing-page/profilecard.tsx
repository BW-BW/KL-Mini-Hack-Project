import { FC } from "react";
import { Card, CardBody, Stack } from "@chakra-ui/react";
import Image from "next/image";
import img from "./Thumbnail/d6.png";


export default function ProfileCard() {

    return (
        <Card maxW="sm">
            <CardBody className=" bg-[#F0DBDB] rounded-lg">
                <Stack mt="10" spacing="3">
                    <h1 className="pt-1 font-Montserrat font-black text-xl text-[#86C8BC]">
                        <text>
                            {"test"} {"test"}
                        </text>
                    </h1>
                    <div className="flex justify-between "></div>
                </Stack>
            </CardBody>
        </Card>
    );
}