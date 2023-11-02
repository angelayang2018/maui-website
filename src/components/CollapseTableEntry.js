import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function CollapseTableEntry(props) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <React.Fragment>
      
      <tr className={`border-black ${isCollapsed && "border-b-0.5"}`}>
        <th className={`text-left ${!isCollapsed && "text-golden-sun"}`}>
          {props.header}
        </th>
        <td className={`text-right ${!isCollapsed && "text-golden-sun"}`}>
          {props.data}
          <FontAwesomeIcon
            onClick={toggleCollapse}
            className="cursor-pointer"
            icon={isCollapsed ? faChevronDown : faChevronUp}
          />
        </td>
      </tr>
      {!isCollapsed && (
        <tr className={`border-black ${!isCollapsed && "border-b-0.5"}`}>
          <td colSpan="2">{props.collapsedata}</td>
        </tr>
      )}
    </React.Fragment>
  );
}
