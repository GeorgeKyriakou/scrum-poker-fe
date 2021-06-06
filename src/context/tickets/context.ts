import { createContext } from "react";
import { ITicketsState } from "./model";



const TicketsContext = createContext({} as ITicketsState);

export default TicketsContext;