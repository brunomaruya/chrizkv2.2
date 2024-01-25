import Image from "next/image";
import React from "react";
import image from "../../../public/images/Christian.jpg";
import { texts } from "./text";

export default function AboutMe() {
  return (
    <div className="mt-5   lg:mx-52">
      <h1 className="my-5 text-3xl">About me</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-5 lg:gap-20">
        <Image
          className="w-full lg:w-96"
          width={500}
          height={500}
          alt="image"
          src={image}
        />
        <div className="flex-1 ">
          <h1 className="text-2xl font-bold lg:text-4xl mb-1 text-primary-500">
            Chriztian Kenji
          </h1>
          <h6 className="text-md mb-5 font-semibold">
            Capturing Japan's Essence Through the Lens: A Photographer's Journey
          </h6>
          {texts.map((text, index) => (
            <p className="mb-3 text-sm lg:text-lg" key={index}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
