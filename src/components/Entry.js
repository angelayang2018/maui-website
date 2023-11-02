import React from "react";
import CondoInfo from "./CondoInfo";

export default function Entry({entry}) {
  return (
    <div className = "flex flex-col justify-center items-center">
      <CondoInfo></CondoInfo>
    </div>
  );
}
