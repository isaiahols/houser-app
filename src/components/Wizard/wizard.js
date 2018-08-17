import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Wizard extends Component {
    constructor() {
        super()


    }



    render() {
        // console.log(this.props);

        return (
            <div>
                <h1>Add New Listing</h1>
                <Link to='/' >
                    <button>Cancel</button>
                </Link>
                {/* <div>
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
                <button>Add</button> */}
            </div>
        )
    }
}

export default Wizard;