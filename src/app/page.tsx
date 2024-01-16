import Image from "next/image";
import Hero from "../../Components/Pages/Home/Hero";
import image from "../../public/images/home-image-bg.jpg";
import TravelComp from "../../Components/Pages/Home/TravelComp";

export default function Home() {
  return (
    <>
      <Hero />
      <TravelComp />
    </>
  );
}
