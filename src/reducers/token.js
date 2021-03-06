const Token = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TOKEN':
            return [
                ...state,
                {
                    token: action.token,
                    isLoggedIn: true
                }
            ];
        case 'REMOVE_TOKEN':
            return (state = []);
        default:
            return state;
    }
};

export default Token;
