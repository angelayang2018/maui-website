import React from 'react';

export default function Button({variant, children}){
    const style = variant ? variant : '';
    let styles;

    switch(style){
        case 'outline': 
            styles = "border-solid py-2 px-7 border-0.5 border-golden-sun hover:bg-golden-sun hover:text-white"
            break;
        default:
            styles = "bg-golden-sun py-2 px-7 text-white hover:bg-dark-golden-sun"
            break;
    }

    return(<button className = {styles} >{children}</button>);
}