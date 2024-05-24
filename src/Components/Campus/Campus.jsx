import React, { useState, useEffect } from 'react';
import axios from "axios";
import './Campus.css';
import Arrow from '../../assets/white-arrow.png';

const Campus = () => {
  const [userData, setUserData] = useState([]);
  const [expanded, setExpanded] = useState(false);

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

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='campus'>
      {userData.map((user, index) => (
        <div className={`gallery ${!expanded && index >= 3 ? 'hidden' : ''}`} key={index}>
          <img src={user.image} alt={`image-${index}`} className='image' />
        </div>
      ))}
      <div className="see-more-img">
        <button className='see-btn' onClick={handleChange}>
          {expanded ? 'See Less' : 'See More Here'}
          <img src={Arrow} alt="arrow" className='arrow-img' />
        </button>
      </div>
    </div>
  );
}

export default Campus;
