import React from 'react';

export default function TableEntry(props){
    return(<tr className = "border-b-0.5 border-black">
        <th className = "text-left">{props.header}</th>
        <td className = "text-right">{props.data}</td>
    </tr>);
}