import Image from "next/image";
import scale from '/public/scale.jpg'
import Hero from "@/components/hero";
const Page = () => {
  return (
    <>
      <Hero imgData={scale} imgAlt="scale to infinity" title="scale to infinity" />
    </>
  );
};

export default Page;