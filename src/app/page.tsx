import Image from "next/image";
import homepic from "/public/home.jpg";
import "./globals.css"
const Home = () => {
  return (
    <>
      <h1>hello from home</h1>
      <div className="absolute -z-10 inset-0">
        <Image
          src={homepic}
          alt="home"
          fill
          style={{ objectFit: "cover" }} />
      </div>

    </>
  );
};

export default Home;