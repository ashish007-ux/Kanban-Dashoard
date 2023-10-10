import React from 'react';
import '../Css/PriorityCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircle as circle, faCircleDot} from '@fortawesome/free-solid-svg-icons';
import ProfileIcon from './ProfileIcon';
import { getIconByStatus,getIconByPriority } from '../utils/icon';
import '../Css/PriorityCard.css'


//Component for Priority Card
export const PriorityCard = (props) => {
  const {ticket,user}=props

  return (
    <div className="card">
      <span className='first'>
        {ticket.id}
        <ProfileIcon name={user ? user?.name : ''} />
      </span>
      <span className='second'>
        <div className="status-icon">{getIconByStatus(ticket?.status)}
          </div>
        <h2>{ticket?.title}</h2>
      </span>
      <span className='feature'>
      <FontAwesomeIcon  className="feature-circle" icon={circle} />
        {ticket?.tag}
      </span>
    </div>
  );
};

//Component for Status Card
export const StatusCard = (props) => {
  const {ticket,user}=props

return (
  <div className="card">
    <span className='first'>
      {ticket.id}
      <ProfileIcon name={user ? user?.name : ''} />
    </span>
    <h2>{ticket?.title}</h2>
    <span className='second'>
      <div className="priority-icon">{getIconByPriority(ticket?.priority)}</div>
      <span className='feature'>
      <FontAwesomeIcon  className="feature-circle" icon={circle} />
          {ticket?.tag}
      </span>
    </span>   
  </div>
);
};
//

