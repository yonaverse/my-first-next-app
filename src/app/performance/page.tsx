import Image from "next/image";
import per from '/public/performance.jpg'
import Hero from "@/components/hero";
const Page = () => {
  return (
    <>
      <Hero imgData={per} imgAlt="Performance" title="super fast cloud hosting " />

    </>
  );
};

export default Page;