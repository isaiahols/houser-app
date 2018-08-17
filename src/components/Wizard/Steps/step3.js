import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import { updateMortgage, updateRent, addHouse, updateHouseList } from '../../../ducks/reducer';

function Step3(props) {
    const { title, address, city, st, zip, img, mortgage, rent, updateHouseList, updateMortgage, updateRent, addHouse } = props
    function run() {

        const newHouse = {
            title,
            address,
            city,
            st,
            zip,
            img,
            mortgage,
            rent
        }
        axios.post('/api/houses', newHouse)
        .then(response => {
                console.log(response.data)
                updateHouseList(response.data)
            })
    }

    return (
        <div>
            <div>
                <h2>Monthly Mortgage Amount</h2>
                <input
                    type="text"
                    value={mortgage}
                    onChange={(e) => props.updateMortgage(e.target.value)}
                    placeholder='0'
                />
            </div>
            <div>
                <h2>Desired Monthly Rent</h2>
                <input
                    type="text"
                    value={rent}
                    onChange={(e) => props.updateRent(e.target.value)}
                    placeholder='0'
                />
            </div>
            <Link to='2'>
                <button>Back</button>
            </Link>
            <Link to='/' >
                <button onClick={() => run()} >Add</button>
            </Link>
        </div>
    )
}

function mapStateToProps(state) {
    const { title, address, city, st, zip, img, mortgage, rent } = state;
    return {
        title,
        address,
        city,
        st,
        zip,
        img,
        mortgage,
        rent
    }
}

export default connect(mapStateToProps, { updateMortgage, updateRent, updateHouseList })(Step3);