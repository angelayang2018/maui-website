import React from "react";
import Button from "./Button";

export default function SmallGallery() {
  return (
    <div className="py-20">
      <h2 className="text-center text-5xl italic text-peach-pink py-10">
        beauty
      </h2>
      <div className="flex justify-evenly flex-wrap-reverse">
        <div>
          <img
            className="py-10"
            src="https://i.ibb.co/317Ybv9/pool.png"
            alt="small pool"
          ></img>
          <img
            src="https://i.ibb.co/s6C7kzd/tennis.png"
            alt="tennis courts"
          ></img>
        </div>
        <div className = "flex items-center">
          <div className="px-10 relative flex flex-col h-[650px] ">
            <div className="sticky top-[300px] flex flex-col justify-center">
              <p className="max-w-xs">
                Our condos boast modern furnishings, spacious layouts, and fully
                equipped kitchens, ensuring that your stay is both comfortable
                and convenient.
              </p>
              <Button variant="outline">Reserve</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
