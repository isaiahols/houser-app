import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import { updateImg } from '../../../ducks/reducer';

function Step2(props) {
    const { img, updateImg } = props

    return (
        <div>

            <div>
                <h2>Image URL</h2>
                <input
                    type="text"
                    value={img}
                    onChange={(e) => updateImg(e.target.value)}
                />
            </div>
            <Link to='1'>
                <button>Back</button>
            </Link>
            <Link to='3' >
                <button>Next</button>
            </Link>
        </div>
    )
}

function mapStateToProps(state) {
    const { img } = state;
    return { img }
}

export default connect(mapStateToProps,{updateImg})(Step2);