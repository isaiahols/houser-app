import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import { updateTitle, updateAddress, updateCity, updateSt, updateZip } from '../../../ducks/reducer';

function Step1(props) {
    const { title, address, city, st, zip, updateTitle, updateAddress, updateCity, updateSt, updateZip } = props;
    return (
        <div>
            <div>
                <h2>Property Name</h2>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => updateTitle(e.target.value)}
                />
            </div>
            <div>
                <h2>Address</h2>
                <input
                    type="text"
                    value={address}
                    onChange={(e) => updateAddress(e.target.value)}
                />
            </div>
            <div>
                <h2>City</h2>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => updateCity(e.target.value)}
                />
            </div>
            <div>
                <h2>State</h2>
                <input
                    type="text"
                    value={st}
                    onChange={(e) => updateSt(e.target.value)}
                />
            </div>
            <div>
                <h2>Zip Code</h2>
                <input
                    type="text"
                    value={zip}
                    onChange={(e) => updateZip(e.target.value)}
                    placeholder='0'
                />
            </div>
            <Link to='2' >
                <button>Next</button>
            </Link>
        </div>
    )
}

function mapStateToProps(state) {
    const { title, address, city, st, zip } = state;
    return {
        title,
        address,
        city,
        st,
        zip
    }
}

const actionFunctions = {
    updateTitle, updateAddress, updateCity, updateSt, updateZip
}

export default connect(mapStateToProps, actionFunctions)(Step1);