import React, { useState, useEffect } from 'react';
import axios from "axios";
import './Campus.css';
import Arrow from '../../assets/white-arrow.png';

const Campus = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://edusity-backend.onrender.com/v1/user/message/list');
        setUserData(response.data.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

 
  return (
    <div className='campus'>
      {userData.map((user, index) => (
        <div className='gallery' key={index}>
          <img src={user.image} alt={`image-${index}`} className='image' />
        </div>
      ))}
      
    </div>
  );
}

export default Campus;
