import React, { useState } from 'react';

// skapa en komponent
// skapa ett inputfält och en knapp
// använd State!


function PFTest (props) {

    // få name och setName att finnas i detta scope. Hur?
    console.log("PFTest ran! name: " + props.name)

    /* const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Name posted: "${props.name}"`)
        props.setName('');
    } */
    return (<>
    <form onSubmit={props.handleSubmit}>
    <label>Your name:
        <input type="text" 
        value={props.name}
        onChange={e => props.setName(e.target.value)} />
    </label>
    <input type="submit" />
    </form>
    </>)
}

export default PFTest;