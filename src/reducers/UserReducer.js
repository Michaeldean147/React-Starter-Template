const UserReducer = (state = null, action) => {
    switch(action.type) {
        case 'UPDATE_CURRENT_USER':
            return Object.assign({}, state, {userName: action.data.userName, userEmail: action.data.userEmail})
        default:
            return state;
     }
};
export default UserReducer;