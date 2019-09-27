const initialState = {
    comments: [{
        x: 10,
        y: 10
    }, {
        x: 15,
        y: 17
    }, {
        x: 20,
        y: 25
    }]
};

export default function appReducer(state=initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}