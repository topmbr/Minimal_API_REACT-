// HotelList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HotelList({ token }) {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get('/hotels', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setHotels(response.data);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };

    fetchHotels();
  }, [token]);

  return (
    <div>
      <h2>Hotel List</h2>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            {hotel.name} - Latitude: {hotel.latitude}, Longitude: {hotel.longitude}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HotelList;
