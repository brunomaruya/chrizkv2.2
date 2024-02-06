import React from "react";
import Gallery from "../../../Components/Common/Gallery";

export default function Travel() {
  return (
    <div>
      <Gallery
        bucket_id={
          process.env.NEXT_PUBLIC_PORTRAITS_BUCKET_KEY
            ? process.env.NEXT_PUBLIC_PORTRAITS_BUCKET_KEY
            : ""
        }
        title="Travel"
      />
    </div>
  );
}
