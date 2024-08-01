"use client";
import React, { useEffect, useState } from "react";
// import { storage } from "@/app/appwrite";
import Image from "next/image";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { CircularProgress } from "@nextui-org/react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "@/app/firebase";

interface IFiles {
  $id: string;
}
interface IUrls {
  src: string;
}

export default function Gallery({
  folder,
  title,
}: {
  folder: string;
  title: string;
}) {
  const [index, setIndex] = useState(-1);
  const [urls, setUrls] = useState<IUrls[]>([]);
  const [files, setFiles] = useState<IFiles[]>([]);
  const [imageList, setImageList] = useState<any[]>([]);

  const listRef = ref(storage, folder);

  useEffect(() => {
    listAll(listRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setUrls((prev) => [...prev, { src: url }]);
          console.log(url);
        });
      });
    });
  }, []);
  // const promise = storage.listFiles(bucket_id);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="mt-[80px]">
      {urls ? (
        <div>
          <Lightbox
            index={index}
            slides={urls}
            open={index >= 0}
            close={() => setIndex(-1)}
          />
          <h1 className="my-5 text-3xl">{title} </h1>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
            key={"aa"}
          >
            {urls.map((url, index) => (
              // <ScrollReveal key={index}>
              <>
                <Image
                  key={url.src}
                  className="mb-3 hover:cursor-pointer"
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
              </>

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
  );
}
