import React, {useEffect} from 'react';
import axios from 'axios';

export default function Rooms() {
  useEffect(() => {
    axios.get('https://demo-repo23.herokuapp.com/rooms/list')
      .then((response) => {
        console.log(response);
      })
  }, [])
  return (
    <div className="rooms-container">
    </div>
  )
}
