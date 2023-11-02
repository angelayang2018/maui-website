import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      const elements = document.querySelectorAll('.underlineLink');
      

      if (currentScrollPos > 0) {
        document.getElementById("navbar").style.backgroundColor = "white";
        document.getElementById("navbar").style.color = "black";
        document.getElementById("navbar").style.borderBottom =
          "0.5px solid #C08D29";
      } else {
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("navbar").style.color = "white";
        document.getElementById("navbar").style.border = "0px";
        elements.forEach(element => {
          element.classList.remove('before:bg-golden-sun');
          element.classList.add('before:bg-white');
        });
      }

      if (prevScrollPos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("navbar").style.color = "white";
        document.getElementById("navbar").style.top = "-104px";
        document.getElementById("navbar").style.border = "0px";
        elements.forEach(element => {
          element.classList.remove('before:bg-white');
          element.classList.add('before:bg-golden-sun');
        });
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const [isOpen, setOpen] = useState(false);
  const toggleMenu = (param) => {
    if (typeof param === "boolean") setOpen(param);
    else setOpen(!isOpen);
  };

  return (
    <nav>
      <div
        id="navbar"
        className="z-20 w-full text-white flex px-20 py-10 max-small-phone:px-10 justify-between fixed transition-all duration-700 translate-y-0 ease-hesistant"
      >
        <div className="flex mr-auto invisible max-medium-monitor:hidden">
          <Link to="/contact" className="pr-10">
            <p>Contact Us</p>
          </Link>
          <Link to="/listing">
            <p>View Listings</p>
          </Link>
        </div>
        <Link to="/">
          <h1 className = "hover:text-golden-sun transition-all duration-700 ease-hesistant">Hawaiian Paradise</h1>
        </Link>
        <div className="max-medium-monitor:hidden flex ml-auto justify-center">
          <Link to="/contact" className="pr-10 ">
            <p
              className="
              underlineLink
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
            before:bg-white 
            hover:before:w-full 
            hover:before:opacity-100"
            >
              Contact Us
            </p>
          </Link>
          <Link to="/listing">
            <p
              className="
            underlineLink 
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
            before:bg-white 
            hover:before:w-full 
            hover:before:opacity-100"
            >
              View Listings
            </p>
          </Link>
        </div>
        <FontAwesomeIcon
          className="medium-monitor:hidden cursor-pointer hover:animate-pulse"
          icon={faBars}
          onClick={toggleMenu}
        />
      </div>
      {isOpen ? (
        <div className="text-white medium-monitor:hidden flex flex-col justify-center z-10 w-full h-screen fixed bg-dark-sky-blue top-0 left-0">
          <Link onClick={() => toggleMenu(false)} to="/contact">
            <p className="text-center hover:bg-darker-sky-blue text-4xl py-10">
              Contact Us
            </p>
          </Link>
          <Link onClick={() => toggleMenu(false)} to="/listing">
            <p className="text-center text-4xl py-10 hover:bg-darker-sky-blue ">
              View Listings
            </p>
          </Link>
        </div>
      ) : null}
    </nav>
  );
}
