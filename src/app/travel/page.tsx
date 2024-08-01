"use client";
import React, { useEffect, useState } from "react";
import Gallery from "../../../Common/Gallery";
import { CircularProgress } from "@nextui-org/react";
import { title } from "process";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import Image from "next/image";
import "yet-another-react-lightbox/styles.css";

export default function Travel() {
  const [index, setIndex] = useState(-1);

  const urls = [
    { src: "/images/travel photos/DSC00007 1.png" },
    { src: "/images/travel photos/DSC00455 1.png" },
    { src: "/images/travel photos/DSC00485 1.png" },
    { src: "/images/travel photos/DSC00121 1.png" },
    { src: "/images/travel photos/DSC04557 1.png" },
    { src: "/images/travel photos/DSC05340 1.png" },
  ];

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <div>
      <Gallery folder="travel/" title="Travel" />
    </div>
  );
}
