import React from "react";

export default function KeyEntry({number, children}){
    return(<li className = "flex items-center"><div className ="bg-neutral-gray w-10 h-10 text-white flex items-center justify-center rounded-full mr-2">
        {number}
    </div>{children}</li>);
};