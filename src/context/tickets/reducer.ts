import { ITicket, ITicketsState } from "./model";
import * as fromActions from './actions'


export default (state: ITicketsState, action: any) => {
    switch (action.type) {
        case fromActions.FETCH_TICKETS: {   
            return {
                ...state,
                loading: true
            };   
        }
        case fromActions.FETCH_TICKETS_SUCCESS: {   
            return {
                ...state,
                tickets: action.payload,
                loading: false
            };   
        }
        case fromActions.FETCH_TICKETS_FAIL: {   
            return {
                ...state,
                loading: false,
                error: action.payload
            };   
        }
        // case fromActions.DELETE_TICKET: {
        //     return {
        //         ...state,
        //         tickets: action.payload
        //     };
        // }

        default:
            return state;
    }
};