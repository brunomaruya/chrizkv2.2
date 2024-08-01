import Image from "next/image";
import React from "react";
import image from "../../../public/images/Christian.jpg";

import Texts from "./Texts";

export default function AboutMe() {
  return (
    <div className="mt-5 flex  items-center flex-col   ">
      <div>
        <h1 className="my-5 text-3xl">About me</h1>
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-5 lg:gap-20 sm:justify-center lg:w-[1000px] ">
          <Image
            className="w-full sm:w-60 md:w-96 "
            width={500}
            height={500}
            alt="image"
            src={image}
          />
          <div className="flex-1 ">
            <h1 className="text-2xl font-bold lg:text-4xl mb-1 text-primary-500">
              Christian Kenji
            </h1>
            <h6 className="text-md mb-5 font-semibold">
              Capturing Japan&apos;s Essence Through the Lens: A
              Photographer&apos;s Journey
            </h6>
            <Texts />
          </div>
        </div>
      </div>
    </div>
  );
}
