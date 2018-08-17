import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { updateHouseList } from '../../ducks/reducer';

import Step1 from './Steps/step1'
import Step2 from './Steps/step2'
import Step3 from './Steps/step3'


class Wizard extends Component {
    constructor() {
        super()
        this.addHouse = this.addHouse.bind(this);
    }

    addHouse() {
        const { title, address, city, st, zip, img, mortgage, rent, updateHouseList } = this.props

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
        console.log(newHouse)
        axios.post('/api/houses', newHouse)
            .then(response => {
                console.log(response.data)
                updateHouseList(response.data)
            })
    }



    render() {
        return (
            <div>
                <div>
                    <h1>Add New Listing</h1>
                    <Link to='/' >
                        <button>Cancel</button>
                    </Link>
                </div>

                <div>
                    <Route path={`/wizard/1`} component={Step1} />
                    <Route path={`/wizard/2`} component={Step2} />
                    <Route path={`/wizard/3`} render={() => <Step3 addHouse={this.addHouse} />} />
                </div>
            </div>
        )
    }
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

export default connect(mapStateToProps, { updateHouseList })(Wizard);


// render = { ()=> <WizardOne
//     loanType={loanType}
//     propType={propType}
//     handleLoanType={changeLoanType}
//     handlePropType={changePropertyType} />