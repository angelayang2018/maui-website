import React from "react";

export default function MovingText({ words }) {
  return (
    <div className="relative flex w-full overflow-hidden pointer-events-none select-none py-10">
      <div className=" animate-slide infinite  whitespace-nowrap">
        {words.map((word, index) => (
          <span key={index} className=" text-8xl">
            {word} <span className="text-golden-sun px-10">☼</span>
          </span>
        ))}
      </div>
      <div className="absolute top-10 animate-slide2 infinite whitespace-nowrap">
      {words.map((word, index) => (
          <span key={index} className=" text-8xl">
            {word} <span className="text-golden-sun px-10">☼</span>
          </span>
        ))}
      </div>
    </div>
  );
}
