export interface ITicketsState {
    tickets: ITicket[],
    fetchTickets: Function,
    loading: boolean,
    error: Error | null
}

export interface ITicket {
    title: string;
    currentVoting: CurrentDevVote;
    finalVoting: string;
}

//developer id mapped to hers/his vote
interface CurrentDevVote {
    [devId:string]:string
}