import { FC } from "react";

const Banner: FC = () => {
    return (
        <div className="bg-[#DBF3FA]">
            <div className="min-h-96 px-4 pt-8 ">
                <div className="flex items-center max-w-7xl m-auto">
                    <div>
                        <h1 className="text-[#FB2576] text-7xl font-Volkhov font-bold">
                            The Next <br></br> Onlyfans On WEB3
                        </h1>
                        <p className="text-[#6D67E4] text-xl font-Poppins font-medium py-5">
                            Introducing our newest platform for unique and one-of-a-kind NFTs!
                            <br /> Explore a diverse content which is made by diverse people around the world!
                            <br />
                            all verified on the blockchain for authenticity.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex max-w-7xl m-auto gap-4 px-4 mt-4">
                <div>
                    <h3 className="text-[#C58940] font-Poppins font-bold text-xl">
                        10000+
                    </h3>
                    <h3 className="text-[#C58940] font-Poppins font-bold text-xl">
                        Content
                    </h3>
                </div>
                <div>
                    <h3 className="text-[#C58940] font-Poppins font-bold text-xl">
                        1000+
                    </h3>
                    <h3 className="text-[#C58940] font-Poppins font-bold text-xl">
                        Artist
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Banner;