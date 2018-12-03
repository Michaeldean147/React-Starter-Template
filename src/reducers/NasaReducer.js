const NasaReducer = (state = null, action) => {
    switch(action.type) {
        case 'UPDATE_NASA_INFO':
            return Object.assign({}, state, {NasaData: action.data})
        default:
            return state;
     }
};
export default NasaReducer;