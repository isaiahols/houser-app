import React from 'react';
import { Link } from 'react-router-dom';

function Step2() {
    return (
        <div>

            <h1>Add New Listing</h1>
            <Link to='/' >
                <button>Cancel</button>
            </Link>
            <div>
                <h2>Property Name</h2>
                <input type="text" />
            </div>
            <div>
                <h2>Address</h2>
                <input type="text" />
            </div>
            <div>
                <h2>City</h2>
                <input type="text" />
            </div>
            <div>
                <h2>State</h2>
                <input type="text" />
            </div>
            <div>
                <h2>Zip Code</h2>
                <input type="text" />
            </div>
            <Link >
                <button>Next</button>
            </Link>
        </div>
    )
}

export default Step2;