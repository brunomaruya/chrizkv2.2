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
      {/* <Gallery
        bucket_id={
          process.env.NEXT_PUBLIC_PORTRAITS_BUCKET_KEY
            ? process.env.NEXT_PUBLIC_PORTRAITS_BUCKET_KEY
            : ""
        }
        title="Travel"
      /> */}
      {urls && (
        <div>
          <Lightbox
            index={index}
            slides={urls}
            open={index >= 0}
            close={() => setIndex(-1)}
          />
          {urls.length > 0 ? (
            <div>
              <h1 className="my-5 text-3xl">{title} </h1>
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {urls.map((url, index) => (
                  // <ScrollReveal key={index}>
                  <Image
                    key={index}
                    className="mb-3 hover:cursor-pointer"
                    loading="lazy"
                    onClick={() => {
                      setIndex(index);
                      console.log(url);
                    }}
                    // priority={true}

                    width={500}
                    height={500}
                    alt="image"
                    src={url.src}
                  />
                  // </ScrollReveal>
                ))}
              </Masonry>
            </div>
          ) : (
            <div className="w-full mt-72 flex justify-center items-center">
              <CircularProgress />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
