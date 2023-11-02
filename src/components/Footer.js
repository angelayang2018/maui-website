import React from "react";

export default function Footer() {
  return (
    <footer className = "sticky bottom-0 -z-10">

        <hr className = "mt-[120px] mx-14"/>
      <div className = "grid grid-cols-6 gap-4 p-16 text-left">
        <h1 className = "col-span-2 max-medium-monitor:col-span-6 place-self-center"> Hawaiian Paradise</h1>
        <div className = "max-medium-monitor:col-span-3 text-sm place-self-center">
          <h2 className = "underline">Location</h2>
          <p>Maui Vista</p>
          <p>2191 S Kihei Rd #3423 <br></br>Kihei, HI 96753</p>
        </div>
        <div className = "max-medium-monitor:col-span-3 text-sm place-self-center">
          <h2 className = "underline">Location</h2>
          <p>Hai Kale</p>
          <p>2191 S Kihei Rd #3423 <br></br>Kihei, HI 96753</p>
        </div>
        <div className = "max-medium-monitor:col-span-3 text-sm place-self-center">
            <h2 className = "underline">Contact Information</h2>
            <p>abc123@gmail.com</p>
            <p>123-456-7890</p>
        </div>
        <div className = "max-medium-monitor:col-span-3 text-sm place-self-center">
            <h2 className = "underline">Resources</h2>
            <p>Contact</p>
            <p>View Listing</p>
            <p>Maui Vista</p>
            <p>Hai Kale</p>
        </div>
      </div>
      <div className="flex flex-col py-2 text-white justify-center items-center bg-gradient-to-r from-dark-sky-blue via-peach-pink to-golden-sun">
        <p>Copy Right © 2023</p>
        <p className = "text-xs">
          Made with ❤️ by{" "}
          <a href="https://www.linkedin.com/in/angela-yangg/">Angela Yang</a>
        </p>
      </div>
    </footer>
  );
}
