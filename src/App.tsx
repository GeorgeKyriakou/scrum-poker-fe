import React from 'react';
import './App.scss';
import TicketListPage from './containers/TicketListPage';
import TicketsState from './context/tickets/state';

const App: React.FC = () => {
  // const pollId = new URLSearchParams(window.location.search).get("pollId")


  return (
    <TicketsState>
      <TicketListPage/>
    </TicketsState>
      
  );
}

export default App;
