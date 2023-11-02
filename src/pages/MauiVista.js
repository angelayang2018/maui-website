import React from "react";
import KeyEntry from "../components/KeyEntry";
import Button from "../components/Button";
import TableEntry from "../components/TableEntry";
import MovingText from "../components/MovingText";
import CollapseTableEntry from "../components/CollapseTableEntry";
import Galleries from "../components/Galleries";

export default function MauiVista() {
  const words = [
    "Picturesque",
    "Beachside",
    "Tropical",
    "Idyllic",
    "Comfortable",
    "Sunny",
  ];

  return (
    <div className="bg-white">
      <img
        className="w-full"
        src="https://i.ibb.co/W0LcjQ0/mauivista.webp"
        alt="Maui Vista Balcony and Living Room"
      />

      <div className="flex flex-wrap justify-evenly my-20">
        <img
          src="https://i.ibb.co/Ht4dYtN/vistaliving.png"
          alt="Maui Vista Living Room"
        />
        <div className="flex flex-col justify-evenly items-center max-w-xs">
          <h2 className="text-3xl">Welcome to Maui Vista 3421</h2>
          <br></br>
          <p>
            Great location in the heart of Kihei with Ocean Views! This
            2bedroom/2 bath condo with second level is the perfect accommodation
            for small families or couples traveling together.
          </p>
          <br></br>
          <p>
            Take in the gorgeous ocean views from your private lanai! Enjoy your
            morning coffee or favorite beverage. Dine alfresco and watch a
            magical Maui sunset.
          </p>
        </div>
      </div>

      <MovingText words={words}></MovingText>

      <div className="flex items-center justify-center flex-wrap bg-sand my-20 py-20">
        <div className="w-1/2 p-10">
          <table className=" w-full min-h-[800px]">
            <tbody>
              <TableEntry
                header="Location"
                data="2191 South Kihei Road, Unit 3423"
              ></TableEntry>
              <CollapseTableEntry
                header="Bedrooms"
                data="2"
                collapsedata="The primary bed offers the perfect retreat after a busy day. With queen bed, standing AC, ceiling fan and TV. The second level offers an additional bedroom with queen bed and bath with shower. The living room has a sofa bed. "
              ></CollapseTableEntry>
              <CollapseTableEntry
                header="Bathrooms"
                data="2"
                collapsedata="The primary bed offers the perfect retreat after a busy day. With queen bed, standing AC, ceiling fan and TV. The second level offers an additional bedroom with queen bed and bath with shower. The living room has a sofa bed. "
              ></CollapseTableEntry>
              <CollapseTableEntry
                header="Kitchen"
                data="Electric Stovetop"
                collapsedata="The primary bed offers the perfect retreat after a busy day. With queen bed, standing AC, ceiling fan and TV. The second level offers an additional bedroom with queen bed and bath with shower. The living room has a sofa bed. "
              ></CollapseTableEntry>
              <CollapseTableEntry
                header="Amenties"
                data="Pool Access"
                collapsedata="The primary bed offers the perfect retreat after a busy day. With queen bed, standing AC, ceiling fan and TV. The second level offers an additional bedroom with queen bed and bath with shower. The living room has a sofa bed. "
              ></CollapseTableEntry>
              <TableEntry header="Max No. of Guests" data="6"></TableEntry>
              <TableEntry
                header="Cost per night"
                data="$239/per night"
              ></TableEntry>
              <tr>
                <th className="pr-10 text-left">Availability/Booking</th>
                <td className="text-right">
                  <Button>View on Airbnb</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-col items-end w-1/2">
          <img
            className="w-full p-10"
            src="../../images/mauivistafloorplan1.svg"
            alt="Maui Vista Floor Plan Lower Level"
          />
          <img
            className="w-1/2 p-10"
            src="../../images/mauivistafloorplan2.svg"
            alt="Maui Vista Floor Plan Upper Level"
          />
        </div>
      </div>

      <img
        className=" w-full py-20"
        src="../../images/mauivistacomplex.svg"
        alt="Maui Vista Complex"
      />

      <div className="w-full pb-20">
        <ul className="flex justify-evenly flex-wrap">
          <KeyEntry number="1">Tennis Courts</KeyEntry>
          <KeyEntry number="2">Pool</KeyEntry>
          <KeyEntry number="3">Unit 3421</KeyEntry>
          <KeyEntry number="4">Parking</KeyEntry>
          <KeyEntry number="5">Elevator</KeyEntry>
        </ul>
      </div>

      <Galleries></Galleries>
    </div>
  );
}
