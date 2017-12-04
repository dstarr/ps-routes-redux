import * as TYPES from '../actions/actionTypes';

function placesReducer(state = [], action) {

    for (let place in state) {

        console.log(place);
    }

    switch (action.type) {

        case TYPES.DELETE_PLACE:

            console.log('Reducer ' + TYPES.DELETE_PLACE + ' ' + action.id);

            let x = state.filter(place => place.id !== action.id);

            return x;

        default:
            return state;
    }
}

export default placesReducer;