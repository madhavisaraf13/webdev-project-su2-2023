import { Button } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WebFont from 'webfontloader';
const SERVER_API_URL = 'http://localhost:4000';

function Delete(){
    const [users, setUsers] = useState(null);

    const onDeleteHandler = async(id) => {
       const resp = await axios.delete(`${SERVER_API_URL}/delete-account/${id}`);
       fetchUsers();
       return resp.data;
    }
    
    const fetchUsers = async () => {
        try {
          const response = await axios.get(`${SERVER_API_URL}/users`);
          console.log(response.data);
          setUsers(response.data);
        } catch (error) {
          console.error('Failed to fetch user.');
        }
      };
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Cinzel:400,700', 'sans-serif'],
      }
    });

 

    fetchUsers();

  }, []);

  return (
    <ul className="list-group">
        {users && users.map(user => (
            <li className="list-group-item" key={user._id}>
                <div>
                    {user.firstName} {user.lastName}
                    <Button onClick={()=>onDeleteHandler(user._id)}className="btn btn-danger float-end">
                        Delete
                    </Button>
                </div>
            </li>
        ))}
    </ul>
);
}

export default Delete;