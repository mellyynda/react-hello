//import React, { useState } from 'react';


function PFTest (props) {
    return (<>
    <form onSubmit={props.handleSubmit}>
    <label>Your name:
        <input type="text" 
        value={props.name}
        onChange={e => props.setName(e.target.value)} />
    </label>
    <br />
    <label>Your profession:
        <input type="text"
            value={props.profession}
            onChange={e => props.setProfession(e.target.value)} />
    </label>
    <br />
    <input type="submit" />
    </form>
    </>)
}

export default PFTest;