import React from "react";
import './TodoSearch.css';

function TodoSearch(){

    // const [] = React.useState('Juan');
    // [
    //     'Enrique',
    //     setState('Enrique')
    // ]

    const onSerchValueChange = (event) => {
        console.log(event.target.value);
    }
    
    return (
        <input className="TodoSearch" 
        placeholder="Cebolla" 
        onChange={onSerchValueChange}
        />
    );
}

export { TodoSearch };