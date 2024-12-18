import Hero from "@/components/hero";
import good from '/public/reliable.jpg'
const Page = () => {
  return (
    <>
      <Hero imgData={good} imgAlt="reliable" title="99.99% uptime" />
    </>
  );
};

export default Page;