import React from 'react'
import './Die.css';

function Die({face}) {
    return (
        <div>
            <i class={`Die fas fa-dice-${face}`}></i>
        </div>
    )
}

export default Die
