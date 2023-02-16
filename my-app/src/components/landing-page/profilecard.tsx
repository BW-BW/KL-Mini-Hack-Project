import { FC } from "react";
import { Card, CardBody, Stack } from "@chakra-ui/react";
import img from "./Thumbnail/d6.png";
import { Link } from 'react-router-dom';
interface Data {
    text1: string;
    text2: string;
    url: string;
}

export default function ProfileCard(imageURL: any) {
    return (
        <Link to="/profile">
            <Card className="mt-[70px] bg-[#F0DEFD] rounded" >
                <div className="relative w-40 h-40 bg-[#F0DEFD]">
                    <img alt="..."
                        src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                        //src={imageURL}
                        className="shadow-xl rounded-full h-auto align-middle border-none" />
                </div>
                <div className="items-center justify-center bg-[#F0DEFD]">
                    <div className="text-center p-4">
                        Text1
                    </div>
                    <div className="text-center p-4">
                        Text2
                    </div>
                </div>
            </Card>
        </Link>
    );
}