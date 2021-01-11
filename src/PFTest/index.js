import React, { useState } from 'react';

// skapa en komponent
// skapa ett inputfält och en knapp
// använd State!


function PFTest (props) {
    const [comment, setComment] = useState('');
    console.log("InputTest ran! comment: " + comment)

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Comment posted: "${comment}"`)
    }
    return (<>
    <form onSubmit={handleSubmit}>
    <label>Your comment:
        <input type="text" 
        value={comment}
        onChange={e => setComment(e.target.value)} />
    </label>
    <input type="submit" />
    </form>
    </>)
}

export default PFTest;