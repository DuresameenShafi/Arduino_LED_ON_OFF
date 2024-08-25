import React from 'react'
import axios from 'axios';

const buttonStyle = {
    padding: '10px 20px',
    margin: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  };
  
  const led = () => {
    const handleButtonClick = (state) => {
      axios.post(`http://localhost:5000/led/${state}`)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
    };
  
    return (
      <div>
        <button onClick={() => handleButtonClick('on')} style={buttonStyle}>Turn LED On</button>
        <button onClick={() => handleButtonClick('off')} style={buttonStyle}>Turn LED Off</button>
      </div>
    );
  };
  
export default led
