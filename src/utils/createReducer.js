export default function createReducer( initialState, actionHandlers ) {
    // set our initial state
    return ( state = initialState, action ) => {
        // get the reduce function for this action type
        const reduceFn = actionHandlers[ action.type ];
        
        // if there was no action handler for this action type, return the state
        if ( !reduceFn ) {
            return state;
        }
        
        // otherwise execute the reduce function with our state and action
        return { ...state, ...reduceFn( state, action ) };
    };
}