import React from "react";
import Button from "./Button";
import TableEntry from "./TableEntry";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faSnowflake,
  faUmbrellaBeach,
  faPersonSwimming,
  faCar,
  faKitchenSet,
  faXmarksLines,
  faSoap,
} from "@fortawesome/free-solid-svg-icons";

export default function CondoInfo() {
  return (
    <div id="maui" className="w-full pt-12">
      <section className="flex flex-wrap-reverse justify-center items-center">
        <div className="w-[526px] my-[20px] p-10 m-2">
          <h3 className="text-peach-pink">01</h3>
          <h2 className="text-golden-sun">Book Your Slice of Paradise</h2>
          <br></br>
          <p>
            Each of our condos is meticulously designed to provide you with an
            exceptional stay. Our condos boast modern furnishings, spacious
            layouts, and fully equipped kitchens, ensuring that your stay is
            both comfortable and convenient.
          </p>
          <br></br>
          <Button variant="outline">Experience</Button>
        </div>
        <img
          className="border-solid p-3 border-golden-sun border-0.5 m-2 my-[20px]"
          src="https://i.ibb.co/rcN3FWM/maui-vista-home-small.png"
          alt="Maui Vista living room"
        />
      </section>
      <section className="flex flex-wrap-reverse justify-center ">
        <div className = "p-[80px] md-lg:p-[150px] w-[526px] m-2">
          <div className="grid grid-rows-4 grid-cols-2">
            <div className="flex flex-col justify-center text-center aspect-square border-solid border-0.5 border-golden-sun">
              <FontAwesomeIcon icon={faWifi} size="2xl" />
              <p>Wifi</p>
            </div>
            <div className="flex flex-col justify-center text-center aspect-square">
              <FontAwesomeIcon icon={faSnowflake} size="2xl" />
              <p>AC</p>
            </div>
            <div className="flex flex-col justify-center text-center aspect-square">
              <FontAwesomeIcon icon={faUmbrellaBeach} size="2xl" />
              <p>Beach Access</p>
            </div>
            <div className="flex flex-col justify-center text-center aspect-square border-solid border-0.5 border-golden-sun">
              <FontAwesomeIcon icon={faPersonSwimming} size="2xl" />
              <p>Pool</p>
            </div>
            <div className="flex flex-col justify-center text-center aspect-square border-solid border-0.5 border-golden-sun">
              <FontAwesomeIcon icon={faCar} size="2xl" />
              <p>Free Parking</p>
            </div>
            <div className="flex flex-col justify-center text-center aspect-square">
              <FontAwesomeIcon icon={faKitchenSet} size="2xl" />
              <p>Kitchen</p>
            </div>
            <div className="flex flex-col justify-center text-center aspect-square">
              <FontAwesomeIcon icon={faXmarksLines} size="2xl" />
              <p>Balcony</p>
            </div>
            <div className="flex flex-col justify-center text-center aspect-square border-solid border-0.5 border-golden-sun">
              <FontAwesomeIcon icon={faSoap} size="2xl" />
              <p>Dryer/Washer</p>
            </div>
          </div>
        </div>
        <table className="w-[526px] h-[600px] m-2">
          <tbody>
            <TableEntry
              header="Location"
              data="2191 South Kihei Road, Unit 3423"
            ></TableEntry>
            <TableEntry header="Bedrooms" data="2"></TableEntry>
            <TableEntry header="Bathrooms" data="2"></TableEntry>
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
      </section>
    </div>
  );
}
