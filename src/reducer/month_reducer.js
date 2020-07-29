

const initialState = [
    {
        monthNumber: 1,
        monthColor: "transparent",
        monthName: "January",
    },
    {
        monthNumber: 2,
        monthColor: "transparent",
        monthName: "February",
    },
    {
        monthNumber: 3,
        monthColor: "transparent",
        monthName: "March",
    },
    {
        monthNumber: 4,
        monthColor: "transparent",
        monthName: "April",
    },
    {
        monthNumber: 5,
        monthColor: "transparent",
        monthName: "May",
    },
    {
        monthNumber: 6,
        monthColor: "transparent",
        monthName: "June",
    },
    {
        monthNumber: 7,
        monthColor: "transparent",
        monthName: "July",
    },
    {
        monthNumber: 8,
        monthColor: "transparent",
        monthName: "August",
    },
    {
        monthNumber: 9,
        monthColor: "transparent",
        monthName: "September",
    },
    {
        monthNumber: 10,
        monthColor: "transparent",
        monthName: "October",
    },
    {
        monthNumber: 11,
        monthColor: "transparent",
        monthName: "November",
    },
    {
        monthNumber: 12,
        monthColor: "transparent",
        monthName: "December",
    }
];

export const setColors = (colors) =>({
    type: 'SET_COLORS',
    payload: colors
});

const month_reducer = (store = initialState, action) => {

    switch (action.type) {

        case 'SET_COLORS':
            let newStore = store.map(month => {
                console.log(action.payload)
            });
            return newStore;
        default:
            return store
    }
};

export default month_reducer;