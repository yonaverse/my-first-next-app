import { StaticImageData } from "next/image";
import Image from "next/image";

interface HelloProps {
    imgData: StaticImageData;
    imgAlt: string;
    title: string;

}

const Hero = (props: HelloProps) => {
    return (
        <div className=" relative h-screen">
            <div className="absolute -z-10 inset-0">
                <Image
                    src={props.imgData}
                    alt={props.imgAlt}
                    fill
                    style={{ objectFit: "cover" }} />
            </div>
            <div className="pt-48 justify-center felx items-center">
                <h1 className="text-white text-6xl text-center">
                    {props.title}

                </h1>
            </div>

        </div>
    );
};

export default Hero;