import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

import RoomItem from '../../components/RoomItem/RoomItem';


export default function Users() {
  const [users, setUsers] = useState(undefined);
  const [error, setError] = useState(undefined);

  const [refresh, setRefresh] = useState(undefined);
  const history = useHistory();

  useEffect(() => {
    axios.get('https://demo-repo23.herokuapp.com/users/list')
      .then((response) => {
        console.log(response.data);
        if (response.data){
          setUsers(response.data);
        }
      })
      .catch(error => {
        console.log(error);
        setError(error);
      });
  }, [])

  return (
    <div className="content">
      <div className="rooms-header">
        <h1>Rooms</h1>
        <button
          onClick={() => history.push('/')}
          className="button"
        >
          {"<--"}Go Back Home
        </button>
      </div>

      {error && (
        <div className="rooms-error-box">
          <p>{error.toString()}</p>
        </div>
      )}

      <div className="rooms-list">
        {users ? users.map((room, index) => (
          <RoomItem
            key={`${room.roomName}-${index}`}
            name={room.roomName}
            userCount={room.num_users}
          />
        )) : (
          <div className="rooms-empty">
            <p>Sorry there are no rooms right now... Come back later </p>
          </div>
        )}
      </div>
    </div>
  )
}
