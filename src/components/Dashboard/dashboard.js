import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { updateHouseList } from '../../ducks/reducer';

import House from '../House/house';

import './dashboard.css'


class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            houseLists: []
        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        axios.get(`/api/houses`).then(response => {
            this.props.updateHouseList(response.data);
        })
    }

    handleDelete(id) {
        axios.delete(`/api/houses/${id}`).then(response => {
            this.props.updateHouseList(response.data);
        })
    }

    render() {
        let mappedHouses = this.props.houses.map(house => {
            return <House house={house} deleteHouse={this.handleDelete} />
        })

        // console.log(this.state.houseLists);

        return (
            <div className="dashboard" >
                <h1>Dashboard</h1>
                <Link to='/wizard/1'>
                    <button>Add New Property</button>
                </Link>
                <hr />
                <h2>Home Listings</h2>
                {mappedHouses}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        houses: state.houseList,
    }
}

export default connect(mapStateToProps, { updateHouseList })(Dashboard);