import Hero from "@/components/hero";
import homepic from "/public/home.jpg";
import "./globals.css"
const Home = () => {
  return (
    <>
      <Hero imgData={homepic} imgAlt="car factory" title="professional could hosting " />
    </>
  );
};

export default Home;