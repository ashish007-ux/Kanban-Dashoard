import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus,faEllipsis, faSignal5 } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck ,faSignal, faCircleXmark , faCircleDot,
    faCircleHalfStroke, faCircleExclamation} from '@fortawesome/free-solid-svg-icons';
import '../Css/Label.css'
import ProfileIcon from './ProfileIcon';
import {  getIconByStatusPriority, getStatusNameByKey } from "../utils/icon";

function Label(props) {

  




  return (
    <div className="tag">  
      <span className="name"> 
        <div className="icon">{getIconByStatusPriority(props.groupkey)}</div>
        <h2 className="task">{getStatusNameByKey(props.groupkey)}</h2>
        <p className="num">{props.numberOfElements}</p>
      </span>
      <div className="ic">
      <FontAwesomeIcon className="icon" icon={faPlus} />
      <FontAwesomeIcon className="icon" icon={faEllipsis} />
      </div>
    </div>
  );
}

export default Label;
