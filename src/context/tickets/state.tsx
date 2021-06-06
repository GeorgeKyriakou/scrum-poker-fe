import { useReducer } from "react";

import ticketsReducer from "./reducer";
import * as fromActions from "./actions";
import { ITicket, ITicketsState } from "./model";
import TicketsContext from "./context";


const TicketsState = (props: any) => {
  const initialState: ITicketsState = {
    tickets: [] as ITicket[],
    loading: true,
    error: null,
    fetchTickets: () => { },
  };

  const [state, dispatch] = useReducer(ticketsReducer, initialState);

  const fetchTickets = async () => {
    dispatch({
        type: fromActions.FETCH_TICKETS
    })
    try {
        const response = await fetch('http://localhost:3000/tickets.json', {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          })
          const res = await response.json()
          dispatch({
            type: fromActions.FETCH_TICKETS_SUCCESS,
            payload: res
          })
    } catch (err: any) {
        dispatch({
            type: fromActions.FETCH_TICKETS_FAIL,
            payload: err
        })
    }
  }

  return (
    <TicketsContext.Provider
      value={{
        tickets: state.tickets,
        loading: state.loading,
        error: state.error,
        fetchTickets,
      }}
    >
      {props.children}
    </TicketsContext.Provider>
  );
};

export default TicketsState;