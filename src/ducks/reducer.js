
const initialState = {
    house: {
        title: 'words',
        address: 'other words',
        city: 'these words',
        state: 'not here',
        zip: 12345,
    },
    houseList: [
        {
            title: 'words',
            address: 'other words',
            city: 'these words',
            state: 'not here',
            zip: 12345,
        },
        {
            title: 'words',
            address: 'other words',
            city: 'these words',
            state: 'not here',
            zip: 12345,
        },
        {
            title: 'words',
            address: 'other words',
            city: 'these words',
            state: 'not here',
            zip: 12345,
        }
    ]
}

const UPDATE_HOUSE = 'UPDATE_HOUSE';
const UPDATE_HOUSE_LIST = 'UPDATE_HOUSE_LIST';


export function updateHouse(newHouse) {
    return {
        type: UPDATE_HOUSE,
        payload: newHouse,
    }
}

export function updateHouseList(houseList) {
    return {
        type: UPDATE_HOUSE_LIST,
        payload: houseList,
    }
}




export default function reducer(state = initialState, action) {
    let { payload } = action;
    switch (action.type) {
        case UPDATE_HOUSE:
            console.log(payload)
            return Object.assign({}, state, { house: payload })
        case UPDATE_HOUSE_LIST:
            console.log('We are supposed to update list now with: ' + JSON.stringify(payload))
            return Object.assign({}, state, { houseList: payload })
        default:
            return state
    }
}