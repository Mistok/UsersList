
const initialState = [];

const users_reducer = (store = initialState, action) => {

    switch (action.type) {

        case 'SET_USERS':
            let newStore = action.payload;
            return newStore;
        default:
            return store
    }
};

export default users_reducer;