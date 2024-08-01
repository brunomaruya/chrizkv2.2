"use client";
import React, { useEffect, useState } from "react";
// import { storage } from "@/app/appwrite";
import Image from "next/image";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ScrollReveal from "./ScrollReveal";
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
  bucket_id,
  title,
}: {
  bucket_id: string;
  title: string;
}) {
  const [index, setIndex] = useState(-1);
  const [urls, setUrls] = useState<IUrls[]>([]);
  const [files, setFiles] = useState<IFiles[]>([]);
  const [imageList, setImageList] = useState<any[]>([]);

  const listRef = ref(storage, "images/");
  useEffect(() => {
    listAll(listRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev: any) => [...prev, url]);
          setUrls((prev) => [...prev, { src: url }]);
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

  // useEffect(() => {
  //   promise.then(
  //     function (response) {
  //       setFiles(response.files);
  //       // Success
  //     },
  //     function (error) {
  //       console.log(error); // Failure
  //     }
  //   );
  // }, []);

  // useEffect(() => {
  //   if (files.length > 1) {
  //     files.map((file: IFiles) => {
  //       const id = file.$id;
  //       const result = storage.getFileView(bucket_id, id);
  //       console.log(result.href);
  //       setUrls((prev) => [...prev, { src: result.href }]); //720
  //     });
  //   }
  // }, [files]);

  return (
    <div>
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
