import React from 'react'
import {PriorityCard ,StatusCard} from './StatusPriorityCard';
import User from './User';

function Card(props){
  const {data}=props
  const renderCard = (ticket) => {
    const user = data.users.find((u) => u.id === ticket.userId);
    switch (props.Type) {
      case 'Status':
        return <StatusCard key={ticket.id} ticket={ticket} user={user} />;
      case 'Priority':
        return <PriorityCard key={ticket.id} ticket={ticket} user={user} />;
      case 'User':
        return <User key={ticket.id} ticket={ticket} user={user} />;
      default:
        return null;
    }
  };

  return (
    <>
      {props.ticket.map((ticket) => (
        <div className="column" key={ticket.id}>
          {renderCard(ticket)}
        </div>
      ))}
    </>
  );
}

export default Card;

