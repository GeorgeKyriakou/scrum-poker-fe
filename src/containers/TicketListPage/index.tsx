import React, { useContext, useEffect } from 'react'
import './ticketListPage.scss'
import TicketsContext from '../../context/tickets/context'
import VotingWheel from '../../components/VotingWheel';

const TicketListPage: React.FC = () => {
    const { loading, error, tickets, fetchTickets } = useContext(TicketsContext);

    useEffect(() => {
        fetchTickets();
    }, [])

    const castVote = (ticketId:string, vote:string) => {
        console.log({ticketId, vote});
    }


    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return (<div>
            Something went wrong while loading the tickets:
        </div>)
    }

    return (<>
    <div className="tickets-list-wrapper">
        {tickets.length && tickets.map((ticket, i) => {
            return <div key={i} className="ticket-row">
               <div className="ticket-title"> {ticket.title}</div>
                <VotingWheel ticketId={ticket.id} castVote={castVote} />
               <div className="final-voting">Final: {ticket.finalVoting}</div>
            </div>
        })}
        </div>
    </>)
}

export default TicketListPage