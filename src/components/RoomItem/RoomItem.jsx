import React from 'react';

import './roomitem.css';

export default function RoomItem({name, userCount}) {
  return (
    <div className="room-item">
      <p> {name} </p>
      <p> {userCount} </p>
    </div>
  );
}


