//import React, { useState } from 'react';

// 1. Ändra PFTEst till att även innehålla en profession-input
// 2. Rendera komponentet i App
// 3. Duplicera nuverande funktionalitet för name så att det även funkar för profession
// 4. Tips: profession kommer behöva ett nytt state i PFTest och ett nytt state i App.
// 5. modifiera HelloWorld-komponenten så att den tar emot och visar profession


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