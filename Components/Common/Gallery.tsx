"use client";
import React, { useEffect, useState } from "react";
import { storage } from "@/app/appwrite";
import Image from "next/image";

interface IFiles {
  $id: string;
}

export default function Gallery({ bucket_id }: { bucket_id: string }) {
  const [urls, setUrls] = useState<URL[]>([]);
  const [files, setFiles] = useState<IFiles[]>([]);
  const promise = storage.listFiles(bucket_id);

  useEffect(() => {
    promise.then(
      function (response) {
        setFiles(response.files);
        console.log(response); // Success
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
        const result = storage.getFilePreview(bucket_id, id);

        setUrls((prev) => [...prev, result]);
      });
    }
  }, [files]);

  return (
    <div>
      {files
        ? urls.map((url) => (
            <Image width={500} height={500} alt="image" src={url.toString()} />
          ))
        : "loading..."}
    </div>
  );
}
