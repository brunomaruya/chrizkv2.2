"use client";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Hero() {
  const router = useRouter();

  return (
    <div className="bg-hero  child-div">
      <div className=" flex  items-center pt-36 justify-center md:justify-end md:pr-[100px] lg:pr-[200px]">
        <div className="flex flex-col items-center md:items-start xl:mr-40 2xl:mr-72">
          <span className="text-xl">Hello</span>
          <span className="text-7xl">I&apos;m Chris</span>
          <span>A freelancer Photographer</span>
          <Button
            color="primary"
            className="w-fit mt-5"
            onClick={() => router.push("/about-me")}
          >
            About me
          </Button>
        </div>
      </div>
    </div>
  );
}
