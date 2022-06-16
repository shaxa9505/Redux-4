const initialState = {value: 10, name: "Shohrux"};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "INCREMENT":
            return {
                ...state,
                value: state.value + 1
            }
        case "DECREMENT":
            return {
                ...state,
                value: state.value - 1
            }
        case "RANDOM":
            return {
                ...state,
                value: state.value = payload
            }
        default:
            return state
    }
}
export {reducer}
