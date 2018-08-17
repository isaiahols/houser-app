import React from 'react';

import './house.css';

function House({ house, deleteHouse }) {
    let { id, title, address, city, state, zip } = house
    return (
        <div key={id} className='houseCard' >
            <h2>Property Type: {title} </h2>
            <h2>Address: {address} </h2>
            <h2>City: {city}</h2>
            <h2>State: {state}</h2>
            <h2>Zip: {zip}</h2>
            <button onClick={() => deleteHouse(id)}>Delete</button>
        </div>
    )
}

export default House;