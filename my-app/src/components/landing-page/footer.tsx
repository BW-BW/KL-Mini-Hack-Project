import { FC } from "react";

const Footer: FC = () => {
    return (
        <div className="flex items-center justify-between bg-[#ADD8E6] h-[100px] border border-solid]">
            <div className="ml-[120px]">
                <p>Copyright 2023, Designed by <strong>Only Hands</strong></p>
            </div>

            <div className="flex mr-[120px]">
                <p className="mx-[15px]">Privacy Policy</p>
                <p className="mx-[15px]">Cookies</p>
                <p className="mx-[15px]">Terms & Condition</p>
            </div>
        </div>
    )
}

export default Footer;