import React from 'react';
import '../Css/PriorityCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getIconByPriority, getIconByStatus } from '../utils/icon';
import { faSignal, faEllipsis, faCircleExclamation, faCircleCheck , faCircleXmark ,faCircleHalfStroke,faCircle as circle, faCircleDot} from '@fortawesome/free-solid-svg-icons';
const User = ({ ticket }) => {

  return (
    <div className="card">
      <span className='first'>
        {ticket?.id}
      </span>
      <span className='second'>
        <div className="status-icon">{getIconByStatus(ticket?.status)}
          </div>
        <h2>{ticket?.title}</h2>
      </span>
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

export default User;
