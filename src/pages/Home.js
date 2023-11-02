import React from "react";
import Entry from "../components/Entry";
import Introduction from "../components/Introduction";
import SmallGallery from "../components/SmallGallery";

export default function Home() {
  return (
    <div className = "bg-white">
      <div className="bg-maui w-full h-screen bg-no-repeat bg-cover bg-fixed flex justify-end px-[110px] items-center max-medium-monitor:justify-center">
          <p className="text-3xl max-w-md font-thin text-white">
            Experience the <br></br><span className = "font-black text-6xl">BEAUTY & TRANQUILITY</span><br></br> of <i>Maui</i>
          </p>
      </div>
      <section className="inline-flex flex-col relative  w-full items-center">
        <img
          className=" w-full absolute bottom-[17px] pointer-events-none select-none"
          src="../../images/wave.svg"
          alt="wave"
        />
      </section>
      <section className="py-16 flex flex-col w-full  items-center">
        <p className="italic text-8xl font-thin text-zinc-200 ">aloha</p>
        <h2 className=" text-6xl font-extrabold bg-clip-text text-transparent text-center bg-beach">
          YOUR MAUI ADVENTURE <br></br> STARTS HERE
        </h2>
      </section>

      <div id="navbutton" className="z-10 bg-white flex justify-center border-solid border-y-0.5 border-golden-sun">
        <a
          href="#maui"
          className="w-[150px] p-1 border-l-0.5 border-solid border-golden-sun text-center hover:bg-golden-sun hover:text-white"
        >
          Maui Vista
        </a>
        <a
          href="#maui"
          className="w-[150px] p-1 border-x-0.5 border-solid border-golden-sun text-center hover:bg-golden-sun hover:text-white"
        >
          Hai Kale
        </a>
      </div>

      {/* Maui Vista Home Page Section */}
      <section>
      <div className="flex justify-center items-center bg-banner w-full bg-cover h-[100px]">
            <h1 className="text-4xl font-bold text-dark-sky-blue">
              MAUI VISTA - KIHEI
            </h1>
          </div>
        <div className="flex justify-center overflow-hidden my-10 ">
          <img className = "pointer-events-none select-none" src="https://i.ibb.co/y4DyBwC/sealife1.png" alt="tide pool background"></img>
          <Introduction
            subtitle={entries[0].subtitle}
            title={entries[0].title}
            summary={entries[0].summary}
          ></Introduction>
          <img className = "pointer-events-none select-none" src="https://i.ibb.co/RDL52b9/sealife2.png" alt="tide pool background"></img>
        </div>

        <Entry entry={entries[0]}></Entry>
        <SmallGallery></SmallGallery>
      </section>

      {/* Hai Kale Home Page Section */}
      <section className="bg-sand">
        <div className="flex justify-center items-center bg-banner w-full bg-cover h-[100px]">
          <h1 className="text-4xl font-bold text-dark-sky-blue">
            HAI KALE - LAHAINA
          </h1>
        </div>
        <section className="flex bg-whale w-full bg-cover h-screen bg-no-repeat justify-center">
          <Introduction
            subtitle={entries[1].subtitle}
            title={entries[1].title}
            summary={entries[1].summary}
          ></Introduction>
        </section>
        <Entry entry={entries[1]}></Entry>
        <SmallGallery></SmallGallery>
      </section>
      <section className="inline-flex flex-col relative  w-full items-center">
        <img
          className=" w-full absolute -top-[17px] pointer-events-none select-none"
          src="../../images/wave2.svg"
          alt="wave"
        />
      </section>
      
    </div>
  );
}

const entries = [
  {
    header: "MAUI VISTA - KIHEI",
    subtitle: "Heart of Kihei",
    title: "Discover Paradise Beyond Your Doorstep",
    summary:
      "Beyond the walls of your luxurious condo, a world of adventure and relaxation awaits. Immerse yourself in the local culture by exploring nearby markets, dining at world-class restaurants, and discovering the rich history and traditions that make Hawaii so unique.",
    location: "2191 South Kihei Road, Unit 3423",
    bedrooms: "2",
    bathrooms: "2",
    numberguest: "6",
    cost: "239",
  },
  {
    header: "HALE KAI - LAHAINA",
    subtitle: "Heart of Kihei",
    title: "Discover Paradise Beyond Your Doorstep",
    summary:
      "Beyond the walls of your luxurious condo, a world of adventure and relaxation awaits. Immerse yourself in the local culture by exploring nearby markets, dining at world-class restaurants, and discovering the rich history and traditions that make Hawaii so unique.",
    location: "2191 South Kihei Road, Unit 3423",
    bedrooms: "2",
    bathrooms: "2",
    numberguest: "6",
    cost: "239",
  },
];
