import React from "react";

export default function Introduction(text) {
  return (
    <div className="min-w-1/2 flex w-1/2 flex-col justify-center">
      <h3 className=" text-center text-peach-pink">{text.subtitle}</h3>
      <h2 className="text-center text-golden-sun">{text.title}</h2>
      <br></br>
      <p className="text-justify">{text.summary}</p>
    </div>
  );
}
