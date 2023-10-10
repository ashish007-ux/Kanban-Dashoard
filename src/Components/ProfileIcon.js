import React from 'react';
import { getInitialName ,getRandomColor} from '../utils/helper';
function ProfileIcon({ name }) {
  


  const ranColor = getRandomColor();
  const allInitials = getInitialName(name);

  return (
    <div
      className="user-icon"
      style={{ backgroundColor: ranColor, color: '#fff' , borderRadius:"50%",  width:"1.5em" , height:"1.5em", textAlign:"center"}}
    >
      {allInitials}
    </div>
  );
}

export default ProfileIcon;
