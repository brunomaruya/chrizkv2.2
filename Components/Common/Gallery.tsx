"use client";
import React, { useEffect, useState } from "react";
import { storage } from "@/app/appwrite";
import Image from "next/image";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ScrollReveal from "./ScrollReveal";
import { CircularProgress } from "@nextui-org/react";

interface IFiles {
  $id: string;
}
interface IUrls {
  src: string;
}

export default function Gallery({
  bucket_id,
  title,
}: {
  bucket_id: string;
  title: string;
}) {
  const [index, setIndex] = useState(-1);
  const [urls, setUrls] = useState<IUrls[]>([]);
  const [files, setFiles] = useState<IFiles[]>([]);
  const promise = storage.listFiles(bucket_id);
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  useEffect(() => {
    promise.then(
      function (response) {
        setFiles(response.files);
        // Success
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  }, []);

  useEffect(() => {
    if (files.length > 1) {
      files.map((file: IFiles) => {
        const id = file.$id;
        const result = storage.getFileView(bucket_id, id);

        setUrls((prev) => [...prev, { src: result.href }]);
      });
    }
  }, [files]);

  return (
    <div>
      <Lightbox
        index={index}
        slides={urls}
        open={index >= 0}
        close={() => setIndex(-1)}
      />{" "}
      {urls.length > 0 ? (
        <div>
          <h1 className="my-5 text-3xl">{title} </h1>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {urls.map((url, index) => (
              <ScrollReveal key={index}>
                <Image
                  className="mb-3"
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
              </ScrollReveal>
            ))}
          </Masonry>
        </div>
      ) : (
        <div className="w-full flex justify-center ">
          <CircularProgress />
        </div>
      )}
    </div>
  );
}
