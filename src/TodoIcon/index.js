import React from "react";
import './TodoIcon.css';
import { ReactComponent as Done48 } from './done48.svg';
import { ReactComponent as Delete48 } from './delete48.svg';


const iconTypes = {
    "done": color => (
        <Done48 className="Icon-svg Icon-svg--done" fill={color} />
    ),
    "delete": color => (
        <Delete48 className="Icon-svg Icon-svg--delete" fill={color} />
    ), 
}

function TodoIcon({ type, color = 'gray', onClick }) {
    
    return (
        <span className={`Icon-container Icon-container--${type}`}
        onClick={ onClick }
        >
            {iconTypes[type](color)}
        </span>
    );
}

export { TodoIcon };
