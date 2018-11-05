const AppReducer = (state = null, action) => {
    switch(action.type) {
        case 'UPDATE_HOME_MESSAGE':
            return Object.assign({}, state, {HomeMessage: action.data})
        default:
            return state;
     }
};
export default AppReducer;