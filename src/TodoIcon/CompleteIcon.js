import React from "react";
import { TodoIcon } from ".";

function CompleteIcon({ completed, onComplete }) {
    return (
        <TodoIcon
        type="done" 
        color={completed ? '#4caf50' : 'gray'}
        onClick={ onComplete }
        />
    )
}

export { CompleteIcon };