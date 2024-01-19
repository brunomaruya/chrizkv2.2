import Image from "next/image";
import React from "react";
import image from "../../../public/images/travel photos/DSC00007 1.png";

export default function AboutMe() {
  return (
    <div className="mt-5">
      {/* <h1 className="my-5 text-3xl">About me</h1> */}
      <div className="flex justify-between gap-5">
        <Image
          className="flex-1"
          width={500}
          height={500}
          alt="image"
          src={image}
        />
        <div className="flex-1 ">
          <h1 className="text-4xl mb-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
            vel!
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            eligendi itaque dolorum dolor fugit amet tenetur officia est, eaque
            ducimus nam molestias nulla distinctio aspernatur praesentium sed
            accusamus? Tempore, explicabo!
          </p>
        </div>
      </div>
    </div>
  );
}
