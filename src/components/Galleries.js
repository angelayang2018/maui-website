import React from "react";
import GalleryKey from "./GalleryKey";

export default function Galleries() {

  const [activeGallery, setActiveGallery] = useState('Downstairs Room')
  return (
    <div className="">
      
        <ul className="flex justify-evenly">
          <GalleryKey>Downstairs Room</GalleryKey>
          <GalleryKey>Upstairs Room</GalleryKey>
          <GalleryKey>Living Room</GalleryKey>
          <GalleryKey>Kitchen</GalleryKey>
          <GalleryKey>Balcony</GalleryKey>
          <GalleryKey>Amenities</GalleryKey>
          <GalleryKey>Explore Kihei</GalleryKey>
        </ul>

        <div></div>
      
    </div>
  );
}
