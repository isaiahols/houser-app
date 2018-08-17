
const initialState = {

    title: '',
    address: '',
    city: '',
    st: '',
    zip: '',
    img: '',
    mortgage: '',
    rent: '',
    houseList: [
        {
            title: 'words',
            address: 'other words',
            city: 'these words',
            st: 'not here',
            zip: 12345,
            img: 'things',
            mortgage: 4321,
            rent: 1324,
        },

    ]
}





export default function reducer(state = initialState, action) {
    let { payload } = action;
    switch (action.type) {
        case UPDATE_HOUSE:
            const { title, address, city, st, zip, img, mortgage, rent } = payload;
            return Object.assign({}, state, {
                house: {
                    title: title || state.title,
                    address: address || state.address,
                    city: city || state.city,
                    state: st || state.st,
                    zip: zip || state.zip,
                    img: img || state.img,
                    mortgage: mortgage || state.mortgage,
                    rent: rent || state.rent
                }
            })
        case UPDATE_HOUSE_LIST:
            return Object.assign({}, state, { houseList: payload })
        case ADD_HOUSE:
            return Object.assign({}, state, { houseList: [...state.houseList, payload] })
        case UPDATE_TITLE:
            return Object.assign({}, state, { title: payload })
        case UPDATE_ADDRESS:
            return Object.assign({}, state, { address: payload })
        case UPDATE_CITY:
            return Object.assign({}, state, { city: payload })
        case UPDATE_ST:
            return Object.assign({}, state, { st: payload })
        case UPDATE_ZIP:
            return Object.assign({}, state, { zip: payload })
        case UPDATE_IMG:
            return Object.assign({}, state, { img: payload })
        case UPDATE_MORTGAGE:
            return Object.assign({}, state, { mortgage: payload })
        case UPDATE_RENT:
            return Object.assign({}, state, { rent: payload })
        default:
            return state
    }
}





const UPDATE_HOUSE = 'UPDATE_HOUSE';
const UPDATE_HOUSE_LIST = 'UPDATE_HOUSE_LIST';
const ADD_HOUSE = 'ADD_HOUSE';
const UPDATE_TITLE = 'UPDATE_TITLE';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_ST = 'UPDATE_ST';
const UPDATE_ZIP = 'UPDATE_ZIP';
const UPDATE_IMG = 'UPDATE_IMG';
const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE';
const UPDATE_RENT = 'UPDATE_RENT';


// export function updateHouse(newHouse) {
//     return {
//         type: UPDATE_HOUSE,
//         payload: newHouse
//     }
// }

export function updateHouseList(houseList) {
    return {
        type: UPDATE_HOUSE_LIST,
        payload: houseList,
    }
}

export function addHouse(house) {
    return {
        type: ADD_HOUSE,
        payload: house
    }
}

export function updateTitle(title) {
    return {
        type: UPDATE_TITLE,
        payload: title
    }
}

export function updateAddress(address) {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateSt(st) {
    return {
        type: UPDATE_ST,
        payload: st
    }
}

export function updateZip(zip) {
    return {
        type: UPDATE_ZIP,
        payload: zip,
    }
}

export function updateImg(img) {
    return {
        type: UPDATE_IMG,
        payload: img
    }
}

export function updateMortgage(mortgage) {
    return {
        type: UPDATE_MORTGAGE,
        payload: mortgage
    }
}

export function updateRent(rent) {
    return {
        type: UPDATE_RENT,
        payload: rent
    }
}




