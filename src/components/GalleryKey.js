import React from "react";

export default function SideGalleryKey({ children }) {
  return (
    <React.Fragment>
      <li
        className="
            cursor-pointer
            relative 
            before:absolute 
            before:-bottom-1 
            before:left-1/2 
            before:-translate-x-1/2 
            before:w-0 
            before:h-0.5 
            before:opacity-0 
            before:transition-all 
            before:duration-500 
            before:bg-golden-sun
            hover:before:w-full 
            hover:before:opacity-100"
      >{children}</li>
    </React.Fragment>
  );
}
