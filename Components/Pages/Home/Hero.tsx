import { Button } from "@nextui-org/react";
import React from "react";

export default function Hero() {
  return (
    <div className="bg-hero hero-left">
      <div className=" flex  items-center pt-36 justify-center md:justify-end md:pr-[100px] lg:pr-[200px]">
        <div className="flex flex-col items-center lg:items-start ">
          <span className="text-xl">Hello</span>
          <span className="text-8xl">I'm Chris</span>
          <span>A freelancer Photographer</span>
          <Button color="primary" className="w-fit mt-5">
            About me
          </Button>
        </div>
      </div>
    </div>
  );
}
