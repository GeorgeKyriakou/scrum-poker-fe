import React, { useContext, useEffect } from 'react'
import TicketsContext from '../../context/tickets/context'

const TicketListPage: React.FC = () => {
    const { loading, error, tickets, fetchTickets } = useContext(TicketsContext);

    useEffect(() => {
        fetchTickets();
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return (<div>
            Something went wrong while loading the tickets:
        </div>)
    }

    return (<>
        {tickets.length && tickets.map((ticket, i) => {
            return <div key={i}>
                {ticket.title}
            </div>
        })}
    </>)
}

export default TicketListPage