import React from 'react';

import './house.css';

function House({ house, deleteHouse }) {
    let { id, title, address, city, st, zip, img, mortgage, rent } = house
    return (
        <div key={id} className='houseCard' >
            <img src={img} />
            <h2>Property Type: {title} </h2>
            <h2>Address: {address} </h2>
            <h2>City: {city}</h2>
            <h2>State: {st}</h2>
            <h2>Zip: {zip}</h2>
            <div>
                <h2>Monthly Mortgage: {mortgage}</h2>
                <h2>Monthly Rent: {rent} </h2>
            </div>
            <button onClick={() => deleteHouse(id)}>Delete</button>
        </div>
    )
}

export default House;