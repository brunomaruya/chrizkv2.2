import React from "react";
import image1 from "../../../public/images/travel photos/DSC00007 1.png";
import image2 from "../../../public/images/travel photos/DSC00121 1.png";
import image3 from "../../../public/images/travel photos/DSC00455 1.png";
import image4 from "../../../public/images/travel photos/DSC00485 1.png";
import image5 from "../../../public/images/travel photos/DSC04557 1.png";
import image6 from "../../../public/images/travel photos/DSC05340 1.png";
import Image from "next/image";

export default function TravelComp() {
  return (
    <div className="mt-32 margin-default">
      <h1 className="text-4xl mb-6">Travels</h1>
      <div className="grid grid-rows-2 grid-cols-4 gap-4 h-[20rem] md:h-[40rem]">
        <Image
          className="row-span-1 col-span-1 object-cover w-full h-full"
          width={500}
          height={500}
          alt="image"
          src={image1}
        />
        <Image
          className="row-span-2 col-span-1 object-cover w-full h-full"
          width={500}
          height={500}
          alt="image"
          src={image2}
        />
        <Image
          className="col-span-2 row-span-1 object-cover w-full h-full"
          width={500}
          height={500}
          alt="image"
          src={image3}
        />
        <Image
          className="col-span-1 row-span-1 object-cover w-full h-full"
          width={500}
          height={500}
          alt="image"
          src={image4}
        />
        <Image
          className="col-span-1 row-span-1 object-cover w-full h-full"
          width={500}
          height={500}
          alt="image"
          src={image5}
        />
        <Image
          className="col-span-1 row-span-1 object-cover w-full h-full"
          width={500}
          height={500}
          alt="image"
          src={image6}
        />
      </div>
    </div>
  );
}
