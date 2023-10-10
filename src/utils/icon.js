import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal, faEllipsis, faCircleExclamation, faCircleCheck , faCircleXmark ,faCircleHalfStroke,faCircle as circle, faCircleDot} from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import ProfileIcon from '../Components/ProfileIcon';
import { faSignal as faSignal5 } from '@fortawesome/free-solid-svg-icons';
// func to get the status icon by status
export const getIconByStatus = (status) => {
    switch (status) {
    case 'Todo':
        return <FontAwesomeIcon icon={faCircle} />; 
    case 'In progress':
        return <FontAwesomeIcon style={{color:"#f0b429"}}  icon={faCircleHalfStroke} />; 
        case 'Cancelled':
    return <FontAwesomeIcon style={{color:"#f24e4b"}} icon={faCircleXmark} />; 
    case 'Backlog':
        return <FontAwesomeIcon style={{color:"#f24e4b"}} icon={faCircleDot} />;
    case 'Done':
        return <FontAwesomeIcon style={{color:"#4b91f2"}} icon={faCircleCheck} />
    default:
        return '❓'; 
    }
};

//func to get the priority icon by priority
export const getIconByPriority = (priority) => {
    switch (priority) {
    case 0:
        return <FontAwesomeIcon icon={faEllipsis} />; 
    case 1:
        return <FontAwesomeIcon style={{color:"#969696"}} icon={faSignal} />; 
    case 2:
        return <FontAwesomeIcon style={{color:"#545755"}} icon={faSignal} />; 
    case 3:
        return <FontAwesomeIcon icon={faSignal} />
    case 4:
        return <FontAwesomeIcon  style={{color:"#ff8c4a"}}  icon={faCircleExclamation}/>
    default:
        return <FontAwesomeIcon icon={faSignal} />;
    }
};

//func to get the icon by status and priority
export const getIconByStatusPriority = (status,user) => {
    switch (status) {
    case 'Todo':
        return <FontAwesomeIcon icon={faCircle} />; 
    case 'In progress':
        return <FontAwesomeIcon style={{color:"#f0b429"}} icon={faCircleHalfStroke} />;
    case 'Cancelled':
        return <FontAwesomeIcon style={{color:"#f24e4b"}} icon={faCircleXmark} />; 
    case 'Backlog':
            return <FontAwesomeIcon style={{color:"#f24e4b"}} icon={faCircleDot} />; 
    case 'Done':
        return <FontAwesomeIcon style={{color:"#4b91f2"}} icon={faCircleCheck} />;
    case '4': 
        return <FontAwesomeIcon style={{color:"#ff8c4a"}} icon={faCircleExclamation} />;
    case '3':
         return <FontAwesomeIcon icon={faSignal5} />;
    case '2':
        return <FontAwesomeIcon style={{color:"#545755"}} icon={faSignal} />;
    case '1':
        return <FontAwesomeIcon style={{color:"#969696"}} icon={faSignal} />;
    case '0':
        return <FontAwesomeIcon icon={faEllipsis} />;
    default:
        return (
            <div>
                <ProfileIcon name={status ?status : ''} />
            </div>
        );
    }
};

//func to get the status name by status number
export const getStatusNameByKey = (status) => {
    switch (status) {
    case '4':
        return "Urgent"
    case '3':
         return "High"
    case '2':
        return "Medium"
    case '1':
        return "Low"
    case '0':
        return "No priority"
    default:
        return status 
    }
};